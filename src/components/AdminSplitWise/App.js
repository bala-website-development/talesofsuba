import React, { useState, useEffect } from "react";
import AddFriend from "./AddFriend";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import BalanceSummary from "./BalanceSummary";
import Register from "./Register";
import Login from "./Login"; // Import the login component
import subaa from "@/images/subaa.png";
import logout from "@/images/logout.png";
import home from "@/images/home.png";
import bin from "@/images/bin.png";
import close from "@/images/delete.png";
import { getDataFromServer, fetchUsers, onAddFriendService, onUpdateFriendService } from "./APIService";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [deleteEnabled, setDeleteEnabled] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null); // Track the logged-in user's email
  const [loggedInUserName, setLoggedInUserName] = useState(""); // Store the user's name
  const [showAddFriend, setShowAddFriend] = useState(false); // Toggle visibility of Add Friend
  const [selectedFriend, setSelectedFriend] = useState(null); // Store the selected friend
  const [selectedFriendEmail, setSelectedFriendEmail] = useState(null); // Store the selected friend
  const [showAddExpense, setShowAddExpense] = useState(false); // Toggle visibility of Add Expense form
  const [showExpenseList, setShowExpenseList] = useState(false); // Toggle visibility of Expense List
  const [settleUpAmounts, setSettleUpAmounts] = useState({}); // Track settle-up amounts for each friend
  const [showSettleUp, setShowSettleUp] = useState(false); // Toggle visibility of Settle Up modal
  const [friendToSettle, setFriendToSettle] = useState(null); // Store the selected friend for settling up
  const [showRegister, setShowRegister] = useState(false);
  const [friendToSettleName, setFriendToSettleName] = useState(""); // Store friend's name
  const [loading, setLoading] = useState(false);
  const [sessionInitialized, setSessionInitialized] = useState(false);

  useEffect(() => {
    const initializeUserSession = async () => {
      const sessionUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (sessionUser) {
        setLoggedInUser(sessionUser.email);
        setLoggedInUserName(sessionUser.name);
        setSessionInitialized(true); // Set session as initialized after setting user
      }
    };
    initializeUserSession();
  }, []);

  useEffect(() => {
    if (sessionInitialized && loggedInUser) {
      const fetchUserData = async () => {
        try {
          const users = await getDataFromServer(loggedInUser);
          const user = users.find((user) => user.email === loggedInUser);
          if (user) {
            setFriends(user.friends || []);
            setExpenses(user.expenses || []);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, [sessionInitialized, loggedInUser]);

  const addFriend = async (friend) => {
    // Check if the friend is already added by email
    const existingFriend = friends.find((f) => f.email === friend.email);

    if (existingFriend) {
      // Show an error message if the friend is already in the list
      alert("This friend is already added.");
      return; // Exit the function to prevent further execution
    }

    // Update the friends array with the new friend immediately
    const updatedFriends = [...friends, { ...friend, balance: 0 }];

    // Update the state with the new friends array (asynchronously)
    setFriends(updatedFriends);

    // Fetch the logged-in user's data from the server
    const users = await getDataFromServer(loggedInUser);
    const user = users.find((user) => user.email === loggedInUser);

    if (user) {
      // Create updated user object with new friends and existing expenses
      const updatedUser = { ...user, friends: updatedFriends, expenses: user.expenses || [] };
      console.log("updatedUser", updatedUser);

      try {
        // Call the service to update the user with the new friends list
        await onUpdateFriendService(updatedUser);
        setShowAddFriend(false); // Close the modal after adding friend
      } catch (error) {
        console.error("Failed to update friend on the server:", error);
      }
    } else {
      console.error("User not found");
    }
  };
  const toggleDeleteButtons = () => {
    setDeleteEnabled(!deleteEnabled); // Toggle between true and false
  };
  const removeFriend = async (friendEmail) => {
    // Show a confirmation dialog
    const confirmRemoval = window.confirm("Are you sure you want to remove this friend?");

    if (!confirmRemoval) {
      return; // Exit if the user cancels the action
    }

    // Filter out the friend with the given email
    const updatedFriends = friends.filter((friend) => friend.email !== friendEmail);

    // Update the local state
    setFriends(updatedFriends);

    // Fetch the logged-in user's data from the server
    const users = await getDataFromServer(loggedInUser);
    const user = users.find((user) => user.email === loggedInUser);

    if (user) {
      // Create updated user object with new friends list and existing expenses
      const updatedUser = { ...user, friends: updatedFriends, expenses: user.expenses || [] };

      try {
        // Call the service to update the user with the new friends list
        await onUpdateFriendService(updatedUser);
        console.log("Friend removed successfully on the server.");
      } catch (error) {
        console.error("Failed to remove friend on the server:", error);
      }
    } else {
      console.error("User not found");
    }
    setDeleteEnabled(false);
  };

  const addExpense = async (expense, friendName, loggedInUserName) => {
    try {
      // Update the local expenses list
      setLoading(true);
      var loggedInUserName;
      const updatedExpenses = [...expenses, expense];
      setExpenses(updatedExpenses);

      // Update the friend's balances for the logged-in user (e.g., Bala)
      const updatedFriends = friends.map((friend) => {
        if (friend.email === expense.friendEmail) {
          // Determine the balance change based on the type of expense
          if (expense.type === "split") {
            friend.balance -= expense.amount / 2;
            friend.tag = "owe"; // Bala owes Subha
          } else if (expense.type === "you-paid-full") {
            friend.balance += expense.amount;
            friend.tag = "owes"; // Subha owes Bala
          } else if (expense.type === "friend-paid-full") {
            friend.balance -= expense.amount;
            friend.tag = "owe"; // Bala owes Subha
          } else if (expense.type === "friend-paid-split") {
            friend.balance -= expense.amount / 2;
            friend.tag = "owe"; // Bala owes Subha
          }
        }
        return friend;
      });

      setFriends(updatedFriends); // Update Bala's local state

      // Fetch the current logged-in user's data (Bala) from the server
      const users = await getDataFromServer(loggedInUser);
      const user = users.find((user) => user.email === loggedInUser);
      loggedInUserName = user.name;
      console.log("bala", loggedInUserName);
      if (!user) {
        console.error("User not found");
        return;
      }

      // Create an updated user object for Bala (logged-in user)
      const updatedUser = {
        ...user,
        friends: updatedFriends, // Bala's updated friends list
        expenses: updatedExpenses, // Bala's updated expenses
      };

      // Update Bala's data first
      setLoading(true);
      await onUpdateFriendService(updatedUser); // Update Bala's data on the server

      // Fetch the friend (Subha) to update their balance as well
      const friendUsers = await getDataFromServer(expense.friendEmail);
      let friendUser = friendUsers.find((friend) => friend.email === expense.friendEmail);

      if (friendUser) {
        console.log("Friend user fetched successfully:", friendUser);

        // Ensure Subha's balance is the inverse of Bala's balance
        const updatedFriendUser = {
          ...friendUser,
          name: expense.friend, // Ensure Subha's name is set
          friends: friendUser.friends.map((f) => {
            if (f.email === loggedInUser) {
              // Invert the balance for Subha (Bala's negative becomes Subha's positive)
              const loggedInUserFriend = updatedFriends.find((uf) => uf.email === expense.friendEmail);
              console.log("loggedInUserFriend", loggedInUserFriend);

              if (!loggedInUserFriend) {
                console.error("Logged-in user not found in updated friends list.");
                return f;
              }

              const invertedBalance = loggedInUserFriend.balance * -1;
              const updatedTag = f.tag === "owe" ? "owes" : "owe"; // Reverse the tag

              return { ...f, balance: invertedBalance, tag: updatedTag, name: loggedInUserName }; // Add Bala's name and balance to Subha's friend list
            }
            return f;
          }),
          expenses: [...(friendUser.expenses || []), expense], // Add the expense to Subha's expense list
        };

        // If the logged-in user is not already in Subha's friends list, add them
        if (!updatedFriendUser.friends.some((f) => f.email === loggedInUser)) {
          updatedFriendUser.friends.push({
            email: loggedInUser,
            name: loggedInUserName, // Add Bala's name
            balance: updatedFriends.find((uf) => uf.email === expense.friendEmail).balance * -1, // Invert Bala's balance for Subha
            tag: "owe",
          });
        }

        console.log("Updated Friend User Object: ", updatedFriendUser);

        // Update Subha's data after Bala's update completes
        await onUpdateFriendService(updatedFriendUser); // Update Subha's data on the server
      } else {
        console.log("Friend not found, creating a new friend profile for Subha.");

        // If the friend (Subha) does not exist, create a new profile for Subha
        const newFriendUser = {
          email: expense.friendEmail,
          name: friendName, // Add Subha's name
          friends: [
            {
              email: user.email,
              name: loggedInUserName, // Add Bala's name as the friend
              balance: updatedFriends.find((uf) => uf.email === expense.friendEmail).balance * -1, // Invert Bala's balance for Subha
              tag: "owe", // Bala owes Subha
            },
          ],
          expenses: [expense], // Add the expense to Subha's expense list
        };

        await onAddFriendService(newFriendUser); // Create Subha's profile
        console.log("New friend (Subha) created successfully.");
      }

      setLoading(false);
      setShowAddExpense(false); // Close the expense modal
      console.log("Expense and balances updated successfully for both users.");
      setLoading(false);
    } catch (error) {
      console.error("Error while updating expense and balances:", error);
      setLoading(false);
    }
  };
  const handleSettleUp = async () => {
    const settleAmount = parseFloat(settleUpAmounts[friendToSettle] || 0);

    if (!isNaN(settleAmount) && settleAmount > 0) {
      // Update the balance for the friend being settled up with in the logged-in user's data
      const updatedFriends = friends.map((friend) => {
        if (friend.email === friendToSettle) {
          friend.balance = friend.balance > 0 ? friend.balance - settleAmount : friend.balance + settleAmount;
        }
        return friend;
      });

      // Get the updated balance for this friend from the logged-in user's perspective
      const friendBalanceAfterSettle = updatedFriends.find((friend) => friend.email === friendToSettle)?.balance || 0;

      // Get the current date for the expense
      const currentDate = new Date().toLocaleDateString();

      // Add the settle-up entry to the expenses
      const updatedExpenses = [
        ...expenses,
        {
          friend: friendToSettleName,
          description: `Settle Up with ${friendToSettleName}`,
          amount: settleAmount,
          type: "settle",
          date: currentDate,
        },
      ];

      // Update local state with new friends and expenses
      setFriends(updatedFriends);
      setExpenses(updatedExpenses);
      setSettleUpAmounts({ ...settleUpAmounts, [friendToSettle]: "" });
      setShowSettleUp(false);

      // Fetch the current logged-in user's data from the server
      const users = await getDataFromServer(loggedInUser);
      const user = users.find((user) => user.email === loggedInUser);

      if (user) {
        // Create the updated user object with new friends and expenses
        const updatedUser = { ...user, friends: updatedFriends, expenses: updatedExpenses };

        try {
          // Call the service to update the user with the new data
          await onUpdateFriendService(updatedUser);
          console.log("Settle up updated successfully on the server for the logged-in user.");

          // Fetch the friend's data to update their balance as well (e.g., Subha)
          const friendUsers = await getDataFromServer(friendToSettle);
          const friendUser = friendUsers.find((f) => f.email === friendToSettle);

          if (friendUser) {
            // Invert the balance adjustment for the friend's perspective
            const updatedFriendData = {
              ...friendUser,
              friends: friendUser.friends.map((f) => {
                if (f.email === loggedInUser) {
                  // Pass the inverted balance to the friend, making sure it matches the logged-in user's balance
                  return { ...f, balance: -friendBalanceAfterSettle }; // Invert the balance
                }
                return f;
              }),
              expenses: [
                ...(friendUser.expenses || []),
                {
                  friend: loggedInUserName,
                  description: `Settle Up with ${loggedInUserName}`,
                  amount: settleAmount,
                  type: "settle",
                  date: currentDate,
                },
              ],
            };

            // Update the friend’s data on the server
            await onUpdateFriendService(updatedFriendData);
            console.log("Settle up updated successfully on the server for the friend.");
          } else {
            console.error("Friend user not found on the server.");
          }
        } catch (error) {
          console.error("Failed to update settle-up on the server:", error);
        }
      } else {
        console.error("User not found");
      }
    }
  };
  // Handle user login (validate against shared storage)
  const handleLogin = (email, name) => {
    setLoggedInUser(email);
    setLoggedInUserName(name);
    localStorage.setItem("loggedInUser", JSON.stringify({ email, name }));
    console.log(loggedInUser, email);
  };

  // Handle user logout with confirmation
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("loggedInUser");
      setLoggedInUser(null);
      setLoggedInUserName("");
      setFriends([]);
      setExpenses([]);
    }
  };
  // Handle friend selection for adding expense
  const handleFriendSelection = (friendEmail, friendName) => {
    setSelectedFriend(friendName);
    setSelectedFriendEmail(friendEmail);
    setShowAddExpense(true);
  };
  // Handle settle-up input changes
  const handleSettleAmountChange = (e) => {
    setSettleUpAmounts({
      ...settleUpAmounts,
      [friendToSettle]: e.target.value,
    });
  };

  const handleRegister = async (email, name) => {
    const newUser = { email, name, friends: [], expenses: [] };
    await onAddFriendService(newUser);
    setShowRegister(false);
    alert("✅ Registered successfully. Please log in.");
  };

  if (!loggedInUser) {
    return showRegister ? <Register onRegister={handleRegister} onToggleToLogin={() => setShowRegister(false)} /> : <Login onLogin={handleLogin} onToggleToRegister={() => setShowRegister(true)} />;
  }
  // Toggle Expense List sliding up
  const toggleExpenseList = () => {
    setShowExpenseList(!showExpenseList);
  };

  // Close Expense List when clicking outside (optional)
  const closeExpenseListOnClickOutside = (e) => {
    if (e.target.classList.contains("slide-up-expense-list")) {
      setShowExpenseList(false);
    }
  };

  const openSettleUpModal = (friendEmail, friendName) => {
    const friend = friends.find((f) => f.email === friendEmail);
    const balance = Math.abs(friend.balance); // Get absolute value of balance (owed or owed to)

    setFriendToSettle(friendEmail); // Store friend email to be settled with
    setFriendToSettleName(friendName); // Store the friend's name for display in modal
    setSettleUpAmounts({ ...settleUpAmounts, [friendEmail]: balance.toFixed(2) }); // Pre-fill the input with balance
    setShowSettleUp(true); // Show the modal
  };

  return (
    <>
      {/* Navigation with Add Friend and Logout */}
      <nav className="navbar navbar-light titlesplitequally">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand text-white" href="/adminapphome">
              <img src={home.src} alt="Logo" className="" width="30" />
            </a>
          </div>
          <a className="navbar-brand text-white" href="#">
            <h5 className="mb-0 text-white">Split Equally</h5>
          </a>
          <div>
            <button className="btn btn-primary btn-warning border" onClick={() => setShowAddFriend(true)}>
              Add Friend
            </button>{" "}
          </div>
          <div>
            <a className="navbar-brand text-white" href="#" onClick={handleLogout}>
              <img src={logout.src} alt="Logo" width="25" />
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-1">
        <div align="right">
          <p className="mb-0">
            <small>Welcome, {loggedInUserName}!</small>
          </p>
        </div>
        <BalanceSummary friends={friends} onSettleUp={handleSettleUp} />
        {/* Display friend list with balance and option to select a friend */}

        {/* Add row with toggle button */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div>
            {" "}
            <h6 className="mb-0">Friend List</h6>
          </div>
          <div>
            <button className="btn btn-sm btn-danger p-1 d-none" onClick={toggleDeleteButtons}>
              <small>{deleteEnabled ? "Disable Delete" : "Enable Delete"}</small>
            </button>
          </div>
        </div>
        <ul className="list-group mb-4">
          {friends.length != 0
            ? friends.map((friend, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <small>
                    {friend && friend.name && friend.name.toUpperCase()}: {friend.balance == 0 ? "No Balance" : friend.balance < 0 ? <span className="text-danger">You owe ${Math.abs(friend.balance)}</span> : <span className="text-success">Owes you ${Math.abs(friend.balance)}</span>}
                  </small>
                  <div>
                    {/* Add Expense Button */}
                    <button className="btn btn-sm btn-warning ml-1" onClick={() => handleFriendSelection(friend.email, friend.name)}>
                      Add
                    </button>{" "}
                    {/* Settle Up Button */}
                    {friend.balance == 0 && deleteEnabled ? (
                      <>
                        <img
                          onClick={() => removeFriend(friend.email)}
                          src={bin.src}
                          width="40"
                          className="px-2 border rounded p-1"
                          //className={!deleteEnabled || loading ? "d-none" : ""} // Disable if deleteEnabled is false
                          style={{ cursor: deleteEnabled ? "pointer" : "not-allowed" }} // Change cursor based on state
                        />
                      </>
                    ) : friend.balance == 0 ? (
                      ""
                    ) : (
                      <button className="btn btn-sm btn-success ml-2" onClick={() => openSettleUpModal(friend.email, friend.name)}>
                        Settle
                      </button>
                    )}
                  </div>
                </li>
              ))
            : "Please add friends to split the bill."}
        </ul>

        {/* Add Friend Modal */}
        {showAddFriend && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add a New Friend</h5>
                  <a onClick={() => setShowAddFriend(false)}>
                    <img src={close.src} alt="Logo" className="" width="30" />
                  </a>
                </div>
                <div className="modal-body">
                  <AddFriend onAddFriend={addFriend} />
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        )}

        {/* Add Expense Modal */}
        {showAddExpense && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content">
                <div className="modal-header">
                  <small className="mb-0 text-dark">
                    {/* Add Expense for <b>{selectedFriend + "-" + selectedFriendEmail}</b> */}
                    Add Expense for <b>{selectedFriendEmail}</b>
                  </small>{" "}
                  <a onClick={() => setShowAddExpense(false)}>
                    <img src={close.src} alt="Logo" className="" width="30" />
                  </a>
                </div>
                <div className="modal-body">
                  <AddExpense onAddExpense={addExpense} friends={friends} selectedFriend={selectedFriend} selectedFriendEmail={selectedFriendEmail} loading={loading} />
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        )}

        {/* Settle Up Modal */}
        {showSettleUp && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content grid1">
                <div className="modal-header">
                  <small className="mb-0 text-dark">
                    Settle Up with <b>{friendToSettleName}</b>
                  </small>{" "}
                  <a onClick={() => setShowSettleUp(false)}>
                    <img src={close.src} alt="Logo" className="" width="30" />
                  </a>
                </div>
                <div className="modal-body mb-2">
                  <input type="number" className="form-control" placeholder="Enter amount" value={settleUpAmounts[friendToSettle] || ""} onChange={handleSettleAmountChange} step="any" min="0" inputMode="decimal" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning w-100" onClick={handleSettleUp}>
                    Confirm Settle Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expense List Sliding Up from Bottom */}
        <div className="text-center">
          <button className="btn btn-warning mt-3" onClick={toggleExpenseList}>
            {showExpenseList ? "Hide Expense History" : "View Expense History"}
          </button>
        </div>

        <div className={`slide-up-expense-list ${showExpenseList ? "show" : ""}`} onClick={closeExpenseListOnClickOutside}>
          <div className="container p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-3">Expense List</h6>
              <button className="btn btn-secondary btn-sm" onClick={toggleExpenseList}>
                Close
              </button>
            </div>
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </div>

      {/* Styles for the modals and slide-up */}
      <style jsx>{`
        /* Modal Overlay for Background Fade */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Faded background */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }

        /* Modal Container for centering */
        .modal-container {
          background: white;
          padding: 20px;
          width: 100%;
          max-width: 500px;
          border-radius: 8px;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        }

        .modal-content .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Slide-up Expense List */
        .slide-up-expense-list {
          position: fixed;
          bottom: -100%;
          left: 0;
          width: 100%;
          background: white;
          height: 90%;
          transition: bottom 0.3s ease-in-out;
          box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1050;
        }

        .slide-up-expense-list.show {
          bottom: 0;
        }
      `}</style>
    </>
  );
};

export default App;

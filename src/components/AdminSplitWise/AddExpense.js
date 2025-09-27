import React, { useState, useEffect } from "react";

const AddExpense = ({ onAddExpense, friends, selectedFriend, selectedFriendEmail, loading }) => {
  const [friend, setFriend] = useState(selectedFriend || ""); // Initialize with selected friend
  const [friendEmail, setFriendEmail] = useState(selectedFriendEmail || ""); // Initialize with selected friend email
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseType, setExpenseType] = useState("split");
  const [date, setDate] = useState(""); // New state for date
  //const [loading, setLoading] = useState(false);
  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };
  // Set the date to today's date when the component loads
  useEffect(() => {
    setDate(getTodayDate()); // Set default date to today
  }, []);

  // Update the selected friend and friendEmail if the prop changes
  useEffect(() => {
    setFriend(selectedFriend);
    setFriendEmail(selectedFriendEmail);
  }, [selectedFriend, selectedFriendEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (friend === "" || friendEmail === "" || amount === "" || description === "" || date === "") return;

    const expense = {
      friend, // Friend's name
      friendEmail, // Friend's email (for balance updates)
      description,
      amount: parseFloat(amount),
      type: expenseType,
      date,
    };

    onAddExpense(expense);
    setFriend("");
    setFriendEmail("");
    setDescription("");
    setAmount("");
    setExpenseType("split");
    setDate(getTodayDate()); // Reset the date to today after form submission
  };

  return (
    <form onSubmit={handleSubmit} className="grid1">
      {/* Friend name and email - disabled */}
      <p className="mb-0 d-none">{friend + " - " + friendEmail}</p>
      <input type="text" value={friend + " - " + friendEmail} className="form-control d-none" disabled />

      {/* Description input */}
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control mt-2" />

      {/* Amount input */}
      <div className="input-group">
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control mt-2 w-50" step="any" min="0" inputMode="decimal" required />

        {/* Date field */}
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control mt-2 w-50" />
      </div>
      {/* Expense Type dropdown */}
      <select value={expenseType} onChange={(e) => setExpenseType(e.target.value)} className="form-control mt-2">
        <option value="split">{`You paid and split equally with ${friend}`}</option>
        <option value="friend-paid-split">{`${friend} paid and split equally`}</option>
        <option value="you-paid-full">{`You paid full, and ${friend} owes the full amount`}</option>
        <option value="friend-paid-full">{`${friend} paid full, and you owe the full amount`}</option>
      </select>

      <button type="submit" className="btn btn-warning mt-3">
        {loading ? "Please wait..." : "Add Expense"}
      </button>
    </form>
  );
};

export default AddExpense;

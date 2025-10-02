import React, { useState, useEffect } from "react";

const BalanceSummary = ({ friends, onSettleUp, loggedInUser }) => {
  const [settleAmounts, setSettleAmounts] = useState({});
  const [totalPay, setTotalPay] = useState(0); // Total amount the user needs to pay
  const [totalReceive, setTotalReceive] = useState(0); // Total amount the user will receive

  // Calculate total pay and total receive for the logged-in user
  useEffect(() => {
    let pay = 0;
    let receive = 0;

    friends.forEach((friend) => {
      if (friend.balance < 0) {
        pay += Math.abs(friend.balance); // You owe money to the friend
      } else if (friend.balance > 0) {
        receive += friend.balance; // Friend owes you money
      }
    });

    setTotalPay(pay);
    setTotalReceive(receive);
  }, [friends]);

  // Handle input change for the partial settle-up amount
  const handleSettleAmountChange = (e, friendName) => {
    const { value } = e.target;
    setSettleAmounts({
      ...settleAmounts,
      [friendName]: value,
    });
  };

  // Handle Settle Up click
  const handleSettleUpClick = (friendName) => {
    const settleAmount = parseFloat(settleAmounts[friendName] || 0);
    if (!isNaN(settleAmount) && settleAmount > 0) {
      onSettleUp(friendName, settleAmount); // Send the settlement amount
      setSettleAmounts({ ...settleAmounts, [friendName]: "" }); // Clear input after settling
    }
  };

  return (
    <div>
      <h6 className="mb-0">Balance Summary</h6>

      {/* Total amount you need to pay and receive in a grid format */}
      <div className="row mb-4">
        <div className="col-6 text-center">
          <div className="card border-danger">
            <div className="card-body">
              <strong>You need to pay</strong>
              <p className="text-danger mb-0">${totalPay.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="col-6 text-center">
          <div className="card border-success">
            <div className="card-body">
              <strong>You will receive</strong>
              <p className="text-success mb-0">${totalReceive.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;

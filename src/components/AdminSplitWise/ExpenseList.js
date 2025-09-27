import React, { useState } from "react";

const ExpenseList = ({ expenses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and sort the expenses by date (latest first)
  const filteredExpenses = expenses.filter((expense) => expense.description.toLowerCase().includes(searchTerm.toLowerCase()) || expense.friend.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by latest date

  return (
    <div className="container1">
      {/* Search Input */}
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Search expenses" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <hr />
      {/* Scrollable Expense List */}
      <div className="expense-list-scrollable">
        <ul className="list-unstyled p-1">
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense, index) => (
              <li key={index} className="d-flex justify-content-between align-items-center border rounded mt-1 p-1 compact-list-item">
                <div>
                  <strong className="d-block">
                    <small>{expense.description}</small> -<small className="text-muted">{new Date(expense.date).toLocaleDateString()}</small>
                  </strong>

                  <p className="text-muted mb-0">{expense.type === "split" ? `You and ${expense.friend} split this equally.` : expense.type === "you-paid-full" ? `You paid the full amount. ${expense.friend} owes you $${expense.amount.toFixed(2)}.` : expense.type === "friend-paid-full" ? `${expense.friend} paid the full amount. You owe ${expense.friend} $${expense.amount.toFixed(2)}.` : expense.type === "friend-paid-split" ? `${expense.friend} paid and you owe half.` : expense.type === "settle" ? `Settle Up: You settled $${expense.amount.toFixed(2)} with ${expense.friend}.` : ""}</p>
                </div>
                <div>
                  <span
                    className={`badge ${
                      expense.type === "friend-owes" || expense.type === "settle" || expense.type === "you-paid-full"
                        ? "bg-success" // Green if friend owes or settle up
                        : "bg-danger" // Red if you owe
                    }`}
                  >
                    ${expense.amount.toFixed(2)}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center py-2">No expenses found</li>
          )}
        </ul>
      </div>

      {/* Styles for Scrollable List */}
      <style jsx>{`
        .expense-list-scrollable {
          max-height: 600px; /* Set the height to make it scrollable */
          overflow-y: auto; /* Enable vertical scrolling */
          padding-right: 8px; /* Avoid hiding content behind the scrollbar */
        }

        /* Compact list items by reducing padding and margins */
        .compact-list-item {
          margin-bottom: 0; /* Remove bottom margin */
        }

        .compact-list-item strong {
          font-size: 0.85rem; /* Reduce font size slightly */
        }

        .compact-list-item p {
          font-size: 0.75rem; /* Reduce size of small text for compactness */
          line-height: normal;
        }

        .badge {
          font-size: 0.75rem; /* Adjust the size of the badge */
          padding: 0.2rem 0.5rem; /* Reduce padding inside the badge */
        }

        .bg-success {
          background-color: #28a745; /* Green for success */
        }

        .bg-danger {
          background-color: #dc3545; /* Red for danger */
        }
      `}</style>
    </div>
  );
};

export default ExpenseList;

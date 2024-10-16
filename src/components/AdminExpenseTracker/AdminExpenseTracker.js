import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

const ExpenseTracker = () => {
  // Predefined categories
  const categories = ["Groceries", "Subscription", "Rent", "Travel", "Shopping", "Entertainment", "Healthcare", "Other"];
  // Get today's date formatted as YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: categories[0],
    date: getTodayDate(),
  });
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showMonthlyReport, setShowMonthlyReport] = useState(false); // State to toggle monthly report view

  // Fetch expenses from the server
  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "itemsbytype/expense");
        const data = await response.json();
        setExpenses(data);
      } catch (err) {
        setError("Failed to fetch expenses.");
      }
      setLoading(false);
    };
    fetchExpenses();
  }, []);

  // Handling form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount" && value < 0) {
      setForm({ ...form, [name]: 0 });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Save new expense to the server
  const saveExpense = async (newExpense) => {
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExpense),
      });
      alert("Saved Successfully");
      setError("");
    } catch (err) {
      console.log("Error saving expense: ", err);
      setError("Failed to save expense.");
    } finally {
      setLoading(false);
    }
  };

  // Handling form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: uuid(),
      type: "expense",
      description: form.description,
      amount: parseFloat(form.amount),
      category: form.category,
      date: form.date,
    };
    saveExpense(newExpense);
    setForm({ description: "", amount: "", category: categories[0], date: getTodayDate() });
  };

  // Delete an expense with confirmation
  const deleteExpense = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this expense?");
    if (!isConfirmed) return;
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/removeitem/" + id, { method: "DELETE" });
      setExpenses(expenses.filter((expense) => expense.id !== id));
      setError("");
    } catch (err) {
      setError("Failed to delete expense.");
    }
    setLoading(false);
  };

  // Calculate monthly totals for the report
  const calculateMonthlyReport = () => {
    const monthlyTotals = {};

    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      if (!monthlyTotals[yearMonth]) {
        monthlyTotals[yearMonth] = 0;
      }
      monthlyTotals[yearMonth] += expense.amount;
    });

    return monthlyTotals;
  };

  const monthlyReport = calculateMonthlyReport();
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  const currentMonthExpense = expenses.filter((expense) => new Date(expense.date).getMonth() === new Date().getMonth()).reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container">
      <h4>Expense Tracker</h4>
      <h5>
        Current Month's Expense: <span className="text-primary">${currentMonthExpense.toFixed(2)}</span>
      </h5>

      {/* Expense Form */}
      <form onSubmit={handleFormSubmit} className="grid">
        <input type="text" name="description" placeholder="Expense Description" value={form.description} onChange={handleInputChange} required />
        <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleInputChange} min="0" required />
        <select name="category" value={form.category} onChange={handleInputChange} required>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="date" name="date" value={form.date} onChange={handleInputChange} required />
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Add Expense"}
        </button>
      </form>
      <div className="center">{error && <p style={{ color: "red" }}>{error}</p>}</div>

      {/* Total Expenses */}
      <h5>
        Total Expense: <span className="text-primary">${totalExpense.toFixed(2)}</span>
      </h5>

      {/* Monthly Report Link */}
      <button className="btn btn-info" onClick={() => setShowMonthlyReport(!showMonthlyReport)}>
        {showMonthlyReport ? "Hide Monthly Report" : "View Monthly Report"}
      </button>

      {/* Monthly Report Grid */}
      {showMonthlyReport && (
        <div className="mt-3">
          <h5>Monthly Report</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Month</th>
                <th>Total Expense</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(monthlyReport).map((month, index) => (
                <tr key={index}>
                  <td>{month}</td>
                  <td>${monthlyReport[month].toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Expense List */}
      <h5>All Expenses</h5>
      <div className="container">
        {expenses.map((expense, index) => (
          <div key={index} className="d-flex flex-wrap align-items-center justify-content-between expense-row  border-bottom">
            <div className="flex-grow-1 me-2">
              <span className="text-muted">{expense.date}</span> <br />
              {expense.description} - {expense.category}
            </div>
            <div className="me-2">
              <strong>${expense.amount.toFixed(2)}</strong>
            </div>
            <div>
              <button onClick={() => deleteExpense(expense.id)} className="btn btn-danger btn-sm" disabled={loading}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseTracker;
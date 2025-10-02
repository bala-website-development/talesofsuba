import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import expenseSection from "@/data/expenseSection";

import { Col, Image, Row, Modal, Button } from "react-bootstrap";
import bin from "@/images/bin.png";
import subaa from "@/images/subaa.png";
import home from "@/images/home.png";
const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formDate, setFormDate] = useState("");
  const [deleteEnabled, setDeleteEnabled] = useState(false);
  const [showMonthlyReport, setShowMonthlyReport] = useState(false); // Toggle monthly report view
  const [showGroupByCategory, setShowGroupByCategory] = useState(false); // Toggle group by category view
  const [showExpensesModal, setShowExpensesModal] = useState(false); // Modal visibility state

  ///pagination
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const expensesPerPage = 12; // Number of expenses to display per page
  const pageNumbersToShow = 4;
  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;

  const sortedExpenses = expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
  const currentExpenses = sortedExpenses.slice(indexOfFirstExpense, indexOfLastExpense);
  const totalPages = Math.ceil(expenses.length / expensesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const startPage = Math.max(1, currentPage - Math.floor(pageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);

  ///pagination
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short" }; // Format as "dd-MMM"
    const date = new Date(dateString);
    // Add one day to correct for time zone issues
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("en-US", options);
  };
  // Get today's date formatted as YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const todaydate = getTodayDate();
  // Predefined categories
  const categories = ["Groceries", "Subscription", "Rent", "Fuel", "Food", "Gift", "Travel", "Saving", "Shopping", "Entertainment", "Healthcare", "Other"];
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: categories[0],
    date: getTodayDate(),
  });
  const toggleDeleteButtons = () => {
    setDeleteEnabled(!deleteEnabled); // Toggle between true and false
  };

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
    console.log(form);
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
    console.log("newExpense", newExpense);
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

  // Group expenses by category
  const groupByCategory = () => {
    const groupedExpenses = {};
    expenses.forEach((expense) => {
      const category = expense.category;
      if (!groupedExpenses[category]) {
        groupedExpenses[category] = [];
      }
      groupedExpenses[category].push(expense);
    });
    return groupedExpenses;
  };

  const monthlyReport = calculateMonthlyReport();
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  const currentMonthExpense = expenses.filter((expense) => new Date(expense.date).getMonth() === new Date().getMonth()).reduce((total, expense) => total + expense.amount, 0);

  const groupedExpenses = groupByCategory(); // Get the grouped expenses

  return (
    <>
      <nav className="navbar navbar-light title">
        <div className="container-fluid ">
          <div>
            <a className="navbar-brand text-white" href="/adminapphome">
              <img src={home.src} alt="Logo" className="" width="30" />
            </a>
          </div>
          <h5 className="mb-0 text-secondary">Split Equally</h5>
          <div>
            <img src={subaa.src} width="50" />
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="px-2">
          <h6 className="text-center mb-0 border rounded p-1 bg-light">
            Current Month's Expense: <span className="text-primary">${currentMonthExpense.toFixed(2)}</span>
          </h6>
        </div>
        {/* Expense Form */}

        <form onSubmit={handleFormSubmit} className="grid">
          <input type="text" name="description" placeholder="Expense Description" value={form.description} onChange={handleInputChange} required />
          <input type="number" name="amount" placeholder="Amount" step="any" value={form.amount} onChange={handleInputChange} min="0" inputMode="decimal" required />
          <select name="category" className="form-control" value={form.category} onChange={handleInputChange} required>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input type="date" name="date" className="form-control" defaultValue={todaydate} onChange={handleInputChange} required />

          <button type="submit" disabled={loading}>
            <h6 className="mb-0">{loading ? "Loading..." : "Add Expense"}</h6>
          </button>
        </form>
        <div className="center">{error && <p style={{ color: "red" }}>{error}</p>}</div>
        {/* Total Expenses */}
        <h5>
          Total Expense: <span className="text-primary">${totalExpense.toFixed(2)}</span>
        </h5>

        <div className="d-flex justify-content-between align-items-center mb-2">
          {/* Monthly Report Link */}
          <button className="btn btn-warning me-2 p-1 m-1" onClick={() => setShowMonthlyReport(!showMonthlyReport)}>
            {showMonthlyReport ? "Monthly Report" : "Monthly Report"}
          </button>
          {/* Group by Category Link */}
          <button className="btn btn-warning p-1 m-1" onClick={() => setShowGroupByCategory(!showGroupByCategory)}>
            {showGroupByCategory ? "Category Report" : "Category Report"}
          </button>
          <button className="btn btn-warning p-1 m-1" onClick={() => setShowExpensesModal(true)}>
            View All Expenses
          </button>
        </div>
        {/* Monthly Report Grid */}
        <Modal show={showMonthlyReport} onHide={() => setShowMonthlyReport(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Monthly Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {showMonthlyReport && (
                <div className="mt-3">
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
                          <td>{formatDate(month)}</td>
                          <td>${monthlyReport[month].toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}{" "}
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={showGroupByCategory} onHide={() => setShowGroupByCategory(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Group by Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Grouped by Category Grid */}
            <div>
              {showGroupByCategory && (
                <div className="mt-1">
                  {Object.keys(groupedExpenses).map((category, index) => (
                    <div key={index}>
                      <h6 className="categorytitle mb-0">{category}</h6>
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {groupedExpenses[category].map((expense, i) => (
                            <tr key={i}>
                              <td>{formatDate(expense.date)}</td>
                              <td>{expense.description.length > 12 ? expense.description.substring(0, 12) + ".." : expense.description}</td>
                              <td>${expense.amount.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}{" "}
            </div>
          </Modal.Body>
        </Modal>

        {/* Expense List */}
        <Modal show={showExpensesModal} onHide={() => setShowExpensesModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>All Expenses</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {/* Add row with toggle button */}
              <div className="d-flex justify-content-end align-items-center mb-1">
                <div>
                  <button className="btn btn-danger p-1" onClick={toggleDeleteButtons}>
                    <small>{deleteEnabled ? "Disable Delete" : "Enable Delete"}</small>
                  </button>
                </div>
              </div>
              {/* Expense List */}
              {currentExpenses.map((expense, index) => (
                <div key={index} className="d-flex flex-wrap align-items-center justify-content-between expense-row py-2 border-bottom">
                  <div className="flex-grow-1 me-2">
                    <small>
                      <b>{formatDate(expense.date)}</b>
                    </small>{" "}
                    <small>
                      {expense.description.length > 12 ? expense.description.substring(0, 12) + ".." : expense.description} - {expense.category}
                    </small>
                  </div>
                  <div className="me-1">
                    <small>
                      <strong>${expense.amount.toFixed(2)}</strong>
                    </small>
                  </div>
                  <div>
                    <img
                      onClick={() => deleteExpense(expense.id)}
                      src={bin.src}
                      width="20"
                      className={!deleteEnabled || loading ? "d-none" : ""} // Disable if deleteEnabled is false
                      style={{ cursor: deleteEnabled ? "pointer" : "not-allowed" }} // Change cursor based on state
                    />
                  </div>
                </div>
              ))}
              {/* Pagination Controls */}
              <div className="pagination mt-3">
                <button className="btn btn-secondary me-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                  Previous
                </button>
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((number) => (
                  <button key={number} className={`btn ${currentPage === number ? "btn-warning" : "btn-outline-secondary"} me-2`} onClick={() => paginate(number)}>
                    {number}
                  </button>
                ))}
                <button className="btn btn-secondary" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                  Next
                </button>
              </div>{" "}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ExpenseTracker;

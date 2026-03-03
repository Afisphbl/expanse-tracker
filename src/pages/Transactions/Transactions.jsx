import React from "react";
import "./Transactions.css";

function Transactions() {
  return (
    <div className="transactions-page">
      <div className="filters-sidebar">
        <h2>Filters</h2>
        <span className="clear-all-btn">clear all</span>
        <div className="filter-group">
          <label>Transaction type</label>
          <div className="checkbox-group">
            <label className="checkbox-item" htmlFor="income">
              <input
                className="custom-checkbox"
                type="checkbox"
                name="income"
                id="income"
                checked
              />
              Income
            </label>
            <label className="checkbox-item" htmlFor="expense">
              <input
                className="custom-checkbox"
                type="checkbox"
                name="expense"
                id="expense"
                checked
              />
              Expense
            </label>
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" className="select-input">
            <option value="">All categories</option>
            <option value="food">Food & Dining</option>
            <option value="shopping">Shopping</option>
            <option value="transportation">Transportation</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health & Fitness</option>
            <option value="education">Education</option>
            <option value="travel">Travel</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="">Amount Range</label>
          <div className="range-inputs">
            <input
              type="number"
              name="min-amount"
              id="min-amount"
              className="number-input"
              placeholder="Min"
            />
            <input
              type="number"
              name="max-amount"
              id="max-amount"
              className="number-input"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      <div className="transactions-main">
        <div className="card-style">
          <div>
            <h2 className="card-title">Recent Transactions</h2>
            <p className="card-subtitle">
              View and manage your financial transactions
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <input
              type="search"
              style={{ width: "200px;" }}
              className="select-input"
              name=""
              id=""
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        <table className="transactions-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Description</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td className="t-desc-cell">
                <span>Grocery Shopping</span>
              </td>
              <td>
                <span className="category-badge">Food & Dining</span>
              </td>
              <td
                style={{
                  fontSize: "0.875rem;",
                  color: "var(--text-secondary)",
                }}
              >
                2024-01-15
              </td>
              <td
                style={{
                  textAlign: "right;",
                  fontWeight: "700;",
                  color: "var(--text-secondary);",
                }}
              >
                $85.75
              </td>
              <td className="table-actions">
                <button className="action-icon-btn edit">Edit</button>
                <button className="action-icon-btn delete">Delete</button>
              </td>
            </tr>

            {/* More rows would go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;

import React from "react";
import "./Transactions.css";

function Transactions() {
  return (
    <div className="transactions-page">
      <div className="filters-sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          <label>Transaction type</label>
          <div className="checkbox-group">
            <label className="checkbox-item" htmlFor="income">
              <input
                className="custom-checkbox"
                type="checkbox"
                name="income"
                id="income"
              />
              Income
            </label>
            <label className="checkbox-item" htmlFor="expense">
              <input
                className="custom-checkbox"
                type="checkbox"
                name="expense"
                id="expense"
              />
              Expense
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;

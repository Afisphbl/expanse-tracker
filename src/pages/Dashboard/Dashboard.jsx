import React from "react";
import { Download } from "lucide-react";
import { useData } from "../../context/data/DataProvider";
import Card from "../../components/cards/Card";
import "./Dashboard.css";

function Dashboard() {
  const { DataContext, ChartsContext } = useData();
  return (
    <div className="dashboard">
      <div className="stats-grid">
        {DataContext.map((item) => (
          <Card
            key={item.id}
            title={item.label}
            value={`$${item.balance.toLocaleString()}`}
            desc={item.desc}
            trend={item.balance >= 0 ? "trend-up" : "trend-down"}
            color={item.color}
          >
            {item.icon}
          </Card>
        ))}
      </div>

      <div className="charts-grid">
        <div className="card trends-card">
          <CardHead />
          <Chart data={ChartsContext} />
        </div>
        <TransactionList />
      </div>
    </div>
  );
}

function CardHead() {
  return (
    <div className="card-head">
      <div>
        <h3 className="card-title">Spending Trends</h3>
        <p className="card-subtitle">Last 6 months overview</p>
      </div>

      <select
        className="chart-period"
        defaultValue="6m"
        aria-label="Chart period"
      >
        <option value="3m">Last 3 Months</option>
        <option value="6m">Last 6 Months</option>
        <option value="12m">Last 12 Months</option>
      </select>
    </div>
  );
}

function Chart({ data }) {
  const maxChartValue = Math.max(...data.map((item) => item.value), 1);
  return (
    <div className="bar-chart">
      {data.map((item) => (
        <div key={item.month} className="chart-bar-wrapper">
          <div
            className={`bar ${item.value === maxChartValue ? "highlighted" : ""}`}
            style={{ height: `${(item.value / maxChartValue) * 100}%` }}
          ></div>
          <span className="bar-label">{item.month}</span>
        </div>
      ))}
    </div>
  );
}

function TransactionList() {
  const { DataTransactionContext } = useData();
  return (
    <div className="transaction-list">
      <div className="transaction-head">
        <h3 className="list-title">Recent Transactions</h3>
        <button className="view-all-btn" type="button">
          View All
        </button>
      </div>

      <div className="transaction-short-list">
        {DataTransactionContext.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </div>

      <button className="import-statement-btn" type="button">
        <Download size={12} />
        Import Statement
      </button>
    </div>
  );
}

function TransactionItem({ item }) {
  const isIncome = item.amount >= 0;
  const amountPrefix = isIncome ? "+" : "-";

  return (
    <div className="transaction-item">
      <div className="t-left">
        <div className={`t-icon ${item.tone}`}>{item.icon}</div>
        <div className="t-info">
          <h4>{item.name}</h4>
          <p>{item.date}</p>
        </div>
      </div>

      <div className={`t-amount ${isIncome ? "income" : "expense"}`}>
        {amountPrefix}${Math.abs(item.amount).toFixed(2)}
      </div>
    </div>
  );
}

export default Dashboard;

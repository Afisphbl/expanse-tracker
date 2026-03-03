import React from "react";
import {
  Download,
  Castle,
  MoreVertical,
  TrendingUp,
  PlusIcon,
} from "lucide-react";
import Button from "../../components/Reused/Button";
import Card from "../../components/cards/Card";
import { useData } from "../../context/data/DataProvider";
import "./Accounts.css";
import "../Dashboard/Dashboard.css";

function Accounts() {
  const { DataAccountsContext, DataFinancialTrendsContext } = useData();
  const trendType = new Set(DataFinancialTrendsContext.map((t) => t.type));
  return (
    <section className="accounts-page">
      <AccountHeader />
      <StatCard data={DataAccountsContext} />
      <AccountTabs trendType={trendType} />
      <div className="accounts-grid">
        {DataFinancialTrendsContext.map((trend) => (
          <AccountCard key={trend.id} {...trend} />
        ))}
        <Button className="account-card add-account-card">
          <PlusIcon size={24} className="add-icon" />
          <div className="add-div">
            <p className="add-p1">Connect New Account</p>
            <p className="add-p2">Add banks, cards, and wallets</p>
          </div>
        </Button>
      </div>
    </section>
  );
}

function AccountHeader() {
  return (
    <div className="accounts-header">
      <div className="header-text">
        <h1>My Accounts</h1>
        <p>Manage your connected bank accounts and wallets</p>
      </div>

      <div className="header-actions">
        <Button className="btn btn-outline">
          <Download size={16} />
          Export CSV
        </Button>

        <Button className="btn btn-primary">+ Add Account</Button>
      </div>
    </div>
  );
}

function StatCard({ data }) {
  return (
    <div className="stats-grid">
      {data.map((item) => (
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
  );
}

function AccountTabs({ trendType }) {
  const trendTypes = Array.from(trendType);
  return (
    <div className="accounts-tabs">
      <Button className="tab active">All Accounts</Button>
      {trendTypes.map((type) => {
        return type !== "card" ? (
          <Button key={type} className="tab">
            {type.replace(type[0], type[0].toUpperCase())}
          </Button>
        ) : null;
      })}
    </div>
  );
}

function AccountCard({ balance, name, trend, lastSync, bank, color }) {
  return (
    <div className="account-card">
      <div className="acc-header">
        <div className="acc-info">
          <Castle size={16} className="acc-icon" />
          <div className="acc-details">
            <h3>{name}</h3>
            <p>{bank} • ...7437</p>
          </div>
        </div>
        <Button className="action-btn">
          <MoreVertical size={16} />
        </Button>
      </div>

      <div className="acc-balance-container">
        <div>
          <p className="acc-balance-label">Current Balance</p>
          <p className="acc-balance-value">${balance.toLocaleString()}</p>
        </div>
        <div
          className="acc-trend-badge"
          style={{ backgroundColor: "rgba(16, 185, 129, 0.1) " }}
        >
          <TrendingUp size={16} color="green" />
          {trend > 0 ? " + " : ""}
          {trend}%
        </div>
      </div>

      <div className="acc-footer">
        <span className="acc-sync">Last synced: {lastSync}</span>
        <Button className="acc-action">View History</Button>
      </div>
    </div>
  );
}

export default Accounts;

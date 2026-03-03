import React, { createContext, useContext } from "react";
import {
  Castle,
  ShoppingCart,
  CreditCardIcon,
  BriefcaseBusiness,
  Car,
  ShoppingBasket,
  Tv,
  UtensilsCrossed,
  Zap,
  CardSimIcon,
  PiggyBank,
} from "lucide-react";

const dataDashboardCard = [
  {
    id: 1,
    balance: 158730.5,
    label: "Total Balance",
    desc: "+2.5 from last month",
    icon: <Castle size={24} />,
    color: "blue",
  },
  {
    id: 2,
    balance: 3450.75,
    label: "Monthly Expenses",
    desc: "+10% from last month",
    icon: <ShoppingCart size={24} />,
    color: "emerald",
  },
  {
    id: 3,
    balance: -5000.0,
    label: "Monthly Income",
    desc: "-5% from last month",
    color: "rose",
    icon: <CreditCardIcon size={24} />,
  },
];

const dataFinancialTrends = [
  {
    id: 1,
    name: "Main Checking",
    balance: 12450.0,
    bank: "Chase Bank",
    lastSync: "2m ago",
    trend: 2.5,
    type: "bank",
    color: "blue",
  },
  {
    id: 2,
    name: "High-Yield Savings",
    balance: 28210.33,
    bank: "Marcus Bank",
    lastSync: "1h ago",
    trend: 4.1,
    type: "bank",
    color: "emerald",
  },
  {
    id: 3,
    name: "Sapphire Preferred",
    balance: -2150.0,
    bank: "Credit Card",
    lastSync: "Oct 15",
    trend: 5.4,
    type: "card",
    color: "rose",
  },
  {
    id: 4,
    name: "Crypto Wallet",
    balance: 4820.17,
    bank: "Coinbase",
    lastSync: "Just now",
    trend: -1.2,
    type: "wallet",
    color: "slate",
  },
  {
    id: 5,
    name: "Retirement 401k",
    balance: 115400.0,
    bank: "Fidelity",
    lastSync: "1 day ago",
    trend: 0.8,
    type: "investment",
    color: "violet",
  },
];

const accountsData = [
  {
    id: 1,
    balance: 158730.5,
    label: "Total Balance",
    desc: "+2.5",
    icon: <Castle size={24} />,
    color: "blue",
  },
  {
    id: 2,
    balance: 5,
    label: "Active Account",
    desc: "Connected",
    icon: <CardSimIcon size={24} />,
    color: "emerald",
  },
  {
    id: 3,
    balance: 3450.75,
    label: "Monthly Savings",
    desc: "+5% from last month",
    icon: <PiggyBank size={24} />,
    color: "rose",
  },
];

const dataCharts = [
  { month: "Jan", value: 5000 },
  { month: "Feb", value: 7000 },
  { month: "Mar", value: 6000 },
  { month: "Apr", value: 8000 },
  { month: "May", value: 7500 },
  { month: "Jun", value: 9000 },
];

const RECENT_TRANSACTIONS = [
  {
    id: 1,
    name: "Grocery Store",
    date: "Today, 2:45 PM",
    amount: -85,
    tone: "warning",
    icon: <ShoppingBasket size={14} />,
  },
  {
    id: 2,
    name: "Electric Utility",
    date: "Yesterday, 10:20 AM",
    amount: -120,
    tone: "primary",
    icon: <Zap size={14} />,
  },
  {
    id: 3,
    name: "Monthly Salary",
    date: "Oct 22, 2023",
    amount: 4200,
    tone: "success",
    icon: <BriefcaseBusiness size={14} />,
  },
  {
    id: 4,
    name: "Uber Ride",
    date: "Oct 21, 2023",
    amount: -25,
    tone: "accent",
    icon: <Car size={14} />,
  },
  {
    id: 5,
    name: "Burger King",
    date: "Oct 20, 2023",
    amount: -18.4,
    tone: "danger",
    icon: <UtensilsCrossed size={14} />,
  },
  {
    id: 6,
    name: "Netflix Premium",
    date: "Oct 19, 2023",
    amount: -15.99,
    tone: "info",
    icon: <Tv size={14} />,
  },
];

const Data = createContext();

const value = {
  ChartsContext: dataCharts,
  DataContext: dataDashboardCard,
  DataFinancialTrendsContext: dataFinancialTrends,
  DataAccountsContext: accountsData,
  DataTransactionContext: RECENT_TRANSACTIONS,
};

export const DataDashboardProvider = ({ children }) => {
  return <Data.Provider value={value}>{children}</Data.Provider>;
};

export const useData = () => useContext(Data);

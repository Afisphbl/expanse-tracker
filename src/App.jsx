import React from "react";
import { Routes, Route } from "react-router-dom";
import { DataDashboardProvider } from "./context/data/DataProvider";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Accounts from "./pages/Accounts/Accounts";
import Transactions from "./pages/Transactions/Transactions";
import Report from "./pages/Reports/Reports";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Layout>
      <Header />
      <main className="main-content">
        <div className="container">
          <DataDashboardProvider>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </DataDashboardProvider>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;

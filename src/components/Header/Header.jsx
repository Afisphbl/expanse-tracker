import React from "react";
import { Wallet, Search, MoonStar } from "lucide-react";
import Input from "../Reused/Input";
import Button from "../Reused/Button";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const avatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVh45EcphzyIEavgHBKRpfloDmIfxibwWMLle58Cm9RNAOlHAHjMwBvqgqWT5yReU1JGxyRlFavFHG_vA6VgpmzAk11Aqewujy5_8C1boqbi8VgiOTsHmM503rrYI3xZl6W1_c26I_pPB_skRUBmt6wSBV4gV-S7EvG9ny84BVCwB08ZN6PGZ_1AZ_Wd_q0Kim5XoJhNqzl5q8-pCLFXDWdrTYCQKJ8hRp89mSq4hS7nxG4UUySVQPtQhShbHhoQGnRxpBQbv1_kk";

function Header() {
  return (
    <header className="header">
      <section className="header-left">
        <div className="logo">
          <span className="logo-icon">
            <Wallet size={24} />
          </span>
          <span>ExpenseTracker</span>
        </div>
        <Navigation />
      </section>
      <section className="header-right">
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <Input className="search-input" label="Search..." type="search" />
        </div>
        <div className="header-actions">
          <Button className="action-btn">
            <MoonStar size={24} />
          </Button>

          <Button>
            <img className="profile-img" src={avatar} alt="Profile Picture" />
          </Button>
        </div>
      </section>
    </header>
  );
}

export default Header;

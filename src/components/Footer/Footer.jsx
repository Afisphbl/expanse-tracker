import React from "react";
import { Wallet } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Wallet size={24} className="footer-icon" />
          <span className="footer-title">Expanse Tracker</span>
        </div>

        <div className="footer-links">
          <span className="footer-link">Privacy Policy</span>
          <span className="footer-link">Terms of Service</span>
          <span className="footer-link">help center</span>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} Expanse Tracker. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

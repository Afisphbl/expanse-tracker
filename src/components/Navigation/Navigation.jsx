import React from "react";
import "./Navigation.css";

const NAV__LINKS = [
  { label: "Dashboard", active: true },
  { label: "Accounts", active: false },
  { label: "Transactions", active: false },
  { label: "Report", active: false },
];

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        {NAV__LINKS.map((link) => (
          <li className={link.active ? "active" : ""}>
            <a href="" className={`nav-link `}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

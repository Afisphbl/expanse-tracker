import React from "react";
import "./Navigation.css";

const NAV__LINKS = [
  { label: "Dashboard", href: "#dashboard", active: true },
  { label: "Accounts", href: "#accounts", active: false },
  { label: "Transactions", href: "#transactions", active: false },
  { label: "Report", href: "#report", active: false },
];

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {NAV__LINKS.map((link) => (
          <li
            key={link.label}
            className={`nav-item ${link.active ? "nav-item-active" : ""}`}
          >
            <a
              href={link.href}
              className="nav-link"
              aria-current={link.active ? "page" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const NAV__LINKS = [
  { label: "Dashboard", href: "", active: true },
  { label: "Accounts", href: "accounts", active: false },
  { label: "Transactions", href: "transactions", active: false },
  { label: "Report", href: "report", active: false },
];

function Navigation() {
  const [links, setLinks] = useState(NAV__LINKS);

  function toggleActive(label) {
    setLinks((prev) => {
      return prev.map((link) => {
        if (link.label === label) {
          link.active = true;
        } else {
          link.active = false;
        }

        return { ...link };
      });
    });
  }
  return (
    <nav className="nav">
      <ul className="nav-list">
        {links.map((link) => (
          <li
            key={link.label}
            onClick={() => toggleActive(link.label)}
            className={`nav-item ${link.active ? "nav-item-active" : ""}`}
          >
            <Link to={`/${link.href}`} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

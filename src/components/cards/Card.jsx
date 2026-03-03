import React from "react";

function Card({ title, value, desc, trend, color, children }) {
  return (
    <div className="stat-card">
      <div>
        <h3 className="stat-label">{title}</h3>
        <p className="stat-value">{value}</p>
        <p className={`stat-trend ${trend}`}>{desc}</p>
      </div>
      <div className={`stat-icon-wrapper ${color}`}>{children}</div>
    </div>
  );
}

export default Card;

// src/components/WalletDashboard.jsx
import React from "react";
import AfroBitChart from "./AfroBitChart";

const WalletDashboard = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ color: "#1E1E1E", marginBottom: "1rem" }}>
        AfroBit Balance Over Time
      </h2>

      <AfroBitChart />

      {/* Placeholder for more dashboard content */}
      <div style={{ marginTop: "2rem" }}>
        <p>Recent Transactions</p>
        {/* Add send/receive buttons here later */}
      </div>
    </div>
  );
};

export default WalletDashboard;


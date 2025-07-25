// AfroBitChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2025-07-18", balance: 1500 },
  { date: "2025-07-19", balance: 1800 },
  { date: "2025-07-20", balance: 1700 },
  { date: "2025-07-21", balance: 2100 },
  { date: "2025-07-22", balance: 2400 },
  { date: "2025-07-23", balance: 2200 },
  { date: "2025-07-24", balance: 2600 },
];

const AfroBitChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="date" tick={{ fill: "#666" }} />
        <YAxis tick={{ fill: "#666" }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#4CAF50"   // AfroBit green accent
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AfroBitChart;


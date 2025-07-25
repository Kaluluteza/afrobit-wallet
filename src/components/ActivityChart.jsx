import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'USD', volume: 400 },
  { name: 'SAR', volume: 300 },
  { name: 'GBP', volume: 200 },
  { name: 'AFB', volume: 500 },
];

const getBarColor = (volume) => {
  if (volume > 400) return '#16a34a';   // Green - High
  if (volume > 250) return '#f97316';   // Orange - Medium
  return '#3b82f6';                     // Blue - Low
};

const ActivityChart = () => (
  <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl mx-auto mt-8">
    <h2 className="text-lg font-semibold text-center mb-4 text-indigo-700">
      Currency Transaction Volume
    </h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="volume" fill="#8884d8">
          {data.map((entry, index) => (
            <cell
              key={`cell-${index}`}
              fill={getBarColor(entry.volume)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;


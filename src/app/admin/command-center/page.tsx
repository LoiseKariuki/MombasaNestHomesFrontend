"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Papa from "papaparse";
import { saveAs } from "file-saver";

// Mock KPI data
const mockData = [
  { date: "2025-10-01", occupancy: 80, adr: 55, leads: 12 },
  { date: "2025-10-02", occupancy: 82, adr: 60, leads: 15 },
  { date: "2025-10-03", occupancy: 78, adr: 58, leads: 10 },
  { date: "2025-10-04", occupancy: 90, adr: 65, leads: 18 },
  { date: "2025-10-05", occupancy: 85, adr: 62, leads: 14 },
];

export default function AdminCommandCenter() {
  const [data, setData] = useState(mockData);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const handleFilter = () => {
    if (!dateRange.from || !dateRange.to) return setData(mockData);
    setData(
      mockData.filter(
        (d) => d.date >= dateRange.from && d.date <= dateRange.to,
      ),
    );
  };

  const handleExportCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "kpi-report.csv");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Command Center</h1>

      {/* Filters */}
      <div className="flex gap-4 items-end">
        <div>
          <label className="block text-sm font-medium">From</label>
          <input
            type="date"
            value={dateRange.from}
            onChange={(e) =>
              setDateRange({ ...dateRange, from: e.target.value })
            }
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">To</label>
          <input
            type="date"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleFilter}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Apply
        </button>
        <button
          onClick={handleExportCSV}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Export CSV
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded text-center">
          <h2 className="font-semibold">Occupancy</h2>
          <p className="text-2xl">{data[data.length - 1]?.occupancy ?? 0}%</p>
        </div>
        <div className="p-4 bg-white shadow rounded text-center">
          <h2 className="font-semibold">ADR</h2>
          <p className="text-2xl">${data[data.length - 1]?.adr ?? 0}</p>
        </div>
        <div className="p-4 bg-white shadow rounded text-center">
          <h2 className="font-semibold">Leads</h2>
          <p className="text-2xl">{data[data.length - 1]?.leads ?? 0}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-4">KPI Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="occupancy" stroke="#1E90FF" />
            <Line type="monotone" dataKey="adr" stroke="#32CD32" />
            <Line type="monotone" dataKey="leads" stroke="#FF4500" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

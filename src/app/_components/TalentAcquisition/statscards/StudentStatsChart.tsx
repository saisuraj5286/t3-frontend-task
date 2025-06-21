"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dataByMonth: Record<string, { name: string; students: number }[]> = {
  January: [
    { name: "K", students: 180 },
    { name: "P", students: 220 },
    { name: "C", students: 140 },
    { name: "A", students: 90 },
    { name: "S", students: 50 },
    { name: "T", students: 130 },
    { name: "R", students: 170 },
  ],
  February: [
    { name: "K", students: 100 },
    { name: "P", students: 150 },
    { name: "C", students: 80 },
    { name: "A", students: 60 },
    { name: "S", students: 90 },
    { name: "T", students: 70 },
    { name: "R", students: 110 },
  ],
  // Add more month-specific data 
};

export default function StudentStatsChart() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
  };

  const data = dataByMonth[selectedMonth] ?? [];

  return (
    <div className="relative w-full max-w-[100%] rounded-xl bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm text-gray-500">Statistics</h2>
          <h1 className="text-lg font-bold text-gray-800">Total Students</h1>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-1 text-sm shadow-sm"
          >
            {selectedMonth}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0  z-10 mt-2 w-32 rounded-md border bg-white shadow-lg">
              {months.map((month) => (
                <div
                  key={month}
                  onClick={() => handleMonthSelect(month)}
                  className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ResponsiveContainer width={350} height={230}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            dataKey="students"
            radius={[10, 10, 0, 0]}
            fill="url(#colorUv)"
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={1} />
              <stop offset="100%" stopColor="#C084FC" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

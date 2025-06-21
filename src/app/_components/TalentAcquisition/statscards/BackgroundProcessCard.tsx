"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { name: "1 - 10 Aug", value: 10 },
  { name: "11 - 20 Aug", value: 30 },
  { name: "21 - 30 Aug", value: 75 },
  { name: "1 - 10 Nov", value: 100 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded bg-black px-2 py-1 text-xs text-white shadow-md">
        View
      </div>
    );
  }
  return null;
};

export default function BackgroundProcessCard() {
  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-4 shadow">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Statistics</p>
          <h2 className="text-lg font-semibold">Background Process</h2>
        </div>
        <button className="flex items-center rounded bg-gray-100 px-2 py-1 text-sm">
          Month <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>

      <h1 className="mb-4 text-3xl font-bold">75%</h1>

      <ResponsiveContainer width={370} height={150}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }}
          />
          <YAxis
            domain={[0, "dataMax + 20"]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            fillOpacity={1}
            fill="url(#colorValue)"
            activeDot={{
              r: 6,
              fill: "#6366f1",
              strokeWidth: 2,
              stroke: "#fff",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

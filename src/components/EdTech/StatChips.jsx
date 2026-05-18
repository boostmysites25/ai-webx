import React from "react";

const StatChips = ({ stats }) => (
  <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
    {stats.map(({ value, label }) => (
      <div
        key={label}
        className="text-center px-6 py-4 rounded-lg border border-secondary/20 bg-white shadow-sm text-primary"
      >
        <p className="text-2xl sm:text-3xl font-bold text-secondary">{value}</p>
        <p className="text-xs sm:text-sm mt-1 text-gray-600 uppercase tracking-wide">
          {label}
        </p>
      </div>
    ))}
  </div>
);

export default StatChips;

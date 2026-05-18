import React from "react";
import { liveIndices } from "../../data/stockMarketTraining";

const LiveIndicesCards = ({ compact = false }) => (
  <div
    className={`grid gap-3 ${
      compact ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 md:grid-cols-3"
    }`}
    role="list"
    aria-label="Sample market indices for learning"
  >
    {liveIndices.map((index) => (
      <div
        key={index.name}
        role="listitem"
        className={`rounded-lg border border-secondary/20 bg-white/5 ${
          compact ? "p-3" : "p-5"
        }`}
      >
        <p className="text-xs text-secondary uppercase tracking-wider">
          {index.name}
        </p>
        <p
          className={`ticker-text font-bold text-white ${
            compact ? "text-xl" : "text-2xl"
          } mt-1`}
        >
          {index.value}
        </p>
        <p className="text-xs text-green-400 mt-2">{index.bias}</p>
      </div>
    ))}
  </div>
);

export default LiveIndicesCards;

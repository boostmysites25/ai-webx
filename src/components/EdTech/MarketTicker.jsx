import React from "react";
import { tickerItems } from "../../data/stockMarketTraining";

const MarketTicker = ({ variant = "dark" }) => {
  const items = [...tickerItems, ...tickerItems];
  const bg =
    variant === "dark"
      ? "bg-primary/95 border-secondary/30"
      : "bg-[#010C2A]/5 border-primary/10";

  return (
    <div
      className={`overflow-hidden border-y py-2 ${bg}`}
      aria-label="Indian market indices ticker"
    >
      <div className="ticker-track flex gap-8 whitespace-nowrap" aria-hidden="true">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`ticker-text text-xs sm:text-sm font-medium uppercase tracking-wider ${
              variant === "dark" ? "text-secondary" : "text-primary/80"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;

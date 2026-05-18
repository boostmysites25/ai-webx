import React from "react";
import { Link } from "react-router-dom";
import StatChips from "./StatChips";
import {
  ACADEMY_PATH,
  heroStats,
  spotlightFeatures,
} from "../../data/stockMarketTraining";

const EdTechSpotlight = () => (
  <section
    className="academy-section-alt w-full"
    aria-label="AI WebX EdTech program highlights"
  >
    <div className="wrapper flex flex-col items-center gap-8">
      <p
        data-aos="fade-up"
        className="text-center text-lg font-medium text-primary"
      >
        Ready to go deeper into stock market training?
      </p>

      <div data-aos="fade-up">
        <StatChips stats={heroStats} />
      </div>

      <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3">
        {spotlightFeatures.map((feature) => (
          <span
            key={feature}
            className="px-4 py-2 rounded-full text-sm bg-white text-primary border border-secondary/20 shadow-sm"
          >
            {feature}
          </span>
        ))}
      </div>

      <div data-aos="fade-up">
        <Link to={ACADEMY_PATH} className="primary-btn">
          View Full Program
        </Link>
      </div>
    </div>
  </section>
);

export default EdTechSpotlight;

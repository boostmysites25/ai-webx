import React, { useEffect } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";
import { homeVerticals } from "../../data/stockMarketTraining";
import techIcon from "../../assets/images/icons/software-development.png";
import edtechIcon from "../../assets/images/icons/ai.png";

const LaneCta = ({ cta, variant = "primary" }) => {
  if (variant === "link") {
    const className =
      "inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary transition-colors group";

    if (cta.external) {
      return (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {cta.label}
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </a>
      );
    }

    return (
      <Link to={cta.href} className={className}>
        {cta.label}
        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
      </Link>
    );
  }

  const className = "primary-btn w-full sm:w-auto text-center";

  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {cta.label}
      </a>
    );
  }

  return (
    <Link to={cta.href} className={className}>
      {cta.label}
    </Link>
  );
};

const VerticalLane = ({ lane, variant }) => {
  const isEdtech = variant === "edtech";

  return (
    <article
      data-aos="fade-up"
      className={`flex flex-col h-full rounded-2xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 ${
        isEdtech
          ? "bg-gradient-to-br from-secondary/15 via-white to-white border-secondary/30 shadow-[0_12px_40px_-12px_rgba(33,155,228,0.35)]"
          : "bg-white/95 border-primary/10 shadow-[0_12px_40px_-16px_rgba(1,12,42,0.12)]"
      }`}
    >
      <LaneAccentBar isEdtech={isEdtech} />
      <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
        {lane.audience}
      </p>
      <div className="flex items-start gap-3 mt-2">
        <img
          src={isEdtech ? edtechIcon : techIcon}
          alt=""
          className="w-11 h-11 object-contain shrink-0 mt-0.5"
        />
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-wider ${
              isEdtech ? "text-secondary" : "text-primary/70"
            }`}
          >
            {lane.label}
          </p>
          <h2 className="text-lg md:text-xl font-bold text-primary leading-snug mt-1">
            {lane.title}
          </h2>
        </div>
      </div>
      <p className="mt-4 text-sm md:text-[0.95rem] text-gray-600 leading-relaxed flex-1">
        {lane.highlight}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6 pt-5 border-t border-gray-200/80">
        <LaneCta cta={lane.ctaPrimary} variant="primary" />
        <LaneCta cta={lane.ctaSecondary} variant="link" />
      </div>
    </article>
  );
};

const LaneAccentBar = ({ isEdtech }) => (
  <div
    className={`h-1 w-12 rounded-full mb-5 ${isEdtech ? "bg-secondary" : "bg-primary"}`}
  />
);

const Banner = () => {
  const { eyebrow, headline, subhead, trustPoints, tech, edtech } = homeVerticals;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -50,
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    return () => tl.kill();
  }, []);

  return (
    <section
      id="banner"
      className="relative min-h-screen w-full flex justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />

      <div className="wrapper relative z-10 pt-[9.5rem] pb-16 md:pb-20">
        <div className="max-w-4xl">
          <p
            data-aos="fade-right"
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-5"
          >
            {eyebrow}
          </p>

          <h1
            data-aos="fade-right"
            className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] text-primary"
          >
            {headline.primary}
            <span className="block mt-2 text-secondary">{headline.accent}</span>
          </h1>

          <p
            data-aos="fade-right"
            data-aos-delay="50"
            className="mt-5 text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl"
          >
            {subhead}
          </p>

          <ul
            data-aos="fade-up"
            className="mt-6 flex flex-wrap gap-2 md:gap-3 list-none p-0"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-white/80 border border-primary/10 text-primary font-medium shadow-sm"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid lg:grid-cols-[1fr_min(280px,28%)] gap-8 lg:gap-10 mt-12 lg:mt-14 items-end"
        >
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <VerticalLane lane={tech} variant="tech" />
            <VerticalLane lane={edtech} variant="edtech" />
          </div>

          <div className="hidden lg:flex justify-center items-end pb-2">
            <img
              loading="lazy"
              id="robot"
              src={robot}
              alt="AI WebX — technology and education"
              width="280"
              height="360"
              className="w-full max-w-[260px] h-auto object-contain drop-shadow-lg opacity-95"
            />
          </div>
        </div>

        <div className="lg:hidden flex justify-center mt-10">
          <img
            loading="lazy"
            src={robot}
            alt="AI WebX"
            width="180"
            height="140"
            className="h-36 object-contain opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

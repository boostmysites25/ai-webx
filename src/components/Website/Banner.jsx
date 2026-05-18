import React, { useEffect } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";
import { homeVerticals } from "../../data/stockMarketTraining";
import techIcon from "../../assets/images/icons/software-development.png";
import edtechIcon from "../../assets/images/icons/ai.png";

const LaneCta = ({ cta, variant = "primary" }) => {
  const className =
    variant === "primary" ? "primary-btn text-center" : "secondary-btn text-center";

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
    <div
      data-aos="fade-up"
      className={`flex flex-col h-full p-6 md:p-8 rounded-2xl border shadow-md ${
        isEdtech
          ? "bg-secondary/10 border-secondary/25"
          : "bg-white/90 border-primary/10"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={isEdtech ? edtechIcon : techIcon}
          alt=""
          className="w-10 h-10 object-contain"
        />
        <p className="text-secondary text-xs font-medium uppercase tracking-wider">
          {lane.label}
        </p>
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-primary leading-tight">
        {lane.title}
      </h2>
      <ul className="mt-4 space-y-2 flex-1">
        {lane.bullets.map((bullet) => (
          <li key={bullet} className="text-sm text-gray-600 flex gap-2">
            <span className="text-secondary shrink-0">✓</span>
            {bullet}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 mt-6">
        <LaneCta cta={lane.ctaPrimary} variant="primary" />
        <LaneCta cta={lane.ctaSecondary} variant="secondary" />
      </div>
    </div>
  );
};

const Banner = () => {
  const { badges, headline, subhead, tech, edtech } = homeVerticals;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      id="banner"
      className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="wrapper pt-[10rem] pb-[5rem]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">
          <div className="flex-1 min-w-0">
            <div data-aos="fade-right" className="flex flex-wrap gap-2 mb-4">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className={`px-3 py-1 text-sm rounded ${
                    badge.startsWith("EdTech")
                      ? "bg-secondary/10 text-primary border border-secondary/30"
                      : "bg-[#ECECF2] text-gray-900"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1
              data-aos="fade-right"
              className="text-[2rem] md:text-4xl lg:text-5xl font-bold leading-tight text-primary"
            >
              {headline}
            </h1>
            <p
              data-aos="fade-right"
              className="text-sm md:text-base text-gray-600 mt-4 max-w-2xl"
            >
              {subhead}
            </p>

            <div
              data-aos="fade-up"
              className="grid md:grid-cols-2 gap-5 mt-10"
            >
              <VerticalLane lane={tech} variant="tech" />
              <VerticalLane lane={edtech} variant="edtech" />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="hidden lg:flex shrink-0 w-[min(100%,280px)] xl:w-[320px] items-center justify-center pt-4"
          >
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcSet={`${robot} 300w, ${robot} 600w, ${robot} 1200w`}
              sizes="280px"
              alt="AI WebX intelligent solutions"
              width="320"
              height="400"
              className="h-[35vh] xl:h-[42vh] w-full object-contain"
            />
          </div>
        </div>

        <div className="lg:hidden flex justify-center mt-8">
          <img
            loading="lazy"
            src={robot}
            alt="AI WebX"
            width="200"
            height="160"
            className="h-[20vh] object-contain opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

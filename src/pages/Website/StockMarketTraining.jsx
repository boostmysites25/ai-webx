import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import StatChips from "../../components/EdTech/StatChips";
import AcademyInquiryForm from "../../components/EdTech/AcademyInquiryForm";
import { companyDetails } from "../../data/constant";
import {
  academyConfig,
  heroStats,
  programHighlights,
  practiceSection,
  aiTools,
  marketsInAction,
  curriculum,
  learningRoadmap,
  trainerPlaceholder,
  educationPrinciples,
  academyDisclaimer,
  edtechCourseSchema,
} from "../../data/stockMarketTraining";
import line from "../../assets/images/line.png";

const getWhatsAppUrl = () => {
  const phone = companyDetails.phone.replace(/\D/g, "");
  const text = encodeURIComponent(academyConfig.whatsappMessage);
  return `https://wa.me/${phone}?text=${text}`;
};

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 justify-center mb-4">
    <img src={line} alt="" className="w-[3rem]" />
    <p className="font-medium text-secondary uppercase text-sm tracking-wide">
      {children}
    </p>
  </div>
);

const SimulationLink = ({ children, className = "primary-btn inline-block" }) => (
  <a
    href={academyConfig.simulationUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);

const StockMarketTraining = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <>
      <Helmet>
        <title>
          AI WebX EdTech — Stock Market Training | Indian Options Mentorship
        </title>
        <meta
          name="description"
          content="1-year daily mentorship for Indian options traders. Learn NIFTY, BANKNIFTY, CE/PE, risk management, and AI-assisted trading with ChatGPT and Claude."
        />
        <meta
          name="keywords"
          content="stock market training, options trading India, NIFTY, BANKNIFTY, EdTech, AI trading, mentorship"
        />
        <link
          rel="canonical"
          href="https://www.aiwebx.in/edtech/stock-market-training"
        />
        <script type="application/ld+json">
          {JSON.stringify(edtechCourseSchema)}
        </script>
      </Helmet>

      <div className="landing-bg">
        <Header />

        {/* Hero */}
        <section className="academy-section-white pt-28">
          <div className="wrapper text-center max-w-4xl mx-auto">
            <p className="text-secondary text-sm uppercase tracking-widest mb-4">
              {academyConfig.brandName} · {academyConfig.tagline}
            </p>
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-bold text-primary leading-tight"
            >
              1 Year Daily Mentorship for Indian Options Traders
            </h1>
            <p
              data-aos="fade-up"
              className="text-secondary text-xl md:text-2xl font-medium mt-4"
            >
              Learn to trade smarter with ChatGPT & Claude
            </p>
            <p
              data-aos="fade-up"
              className="text-gray-600 max-w-2xl mx-auto mt-6"
            >
              A structured education program covering market structure, option
              chains, risk management, and AI-assisted workflows — with daily
              mentorship and hands-on practice on live market data.
            </p>
            <div data-aos="fade-up" className="mt-10">
              <StatChips stats={heroStats} />
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn text-center"
              >
                Start 1 Year Mentorship
              </a>
              <SimulationLink className="secondary-btn text-center">
                Start Live Market Simulation
              </SimulationLink>
            </div>
            <div className="mt-8">
              <a
                href="#curriculum"
                className="text-secondary text-sm underline underline-offset-4"
              >
                Explore Curriculum
              </a>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="academy-section-alt">
          <div className="wrapper">
            <SectionLabel>WHAT YOU GET</SectionLabel>
            <h2 className="heading text-center mb-10">
              One Full Year of Structured Learning
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {programHighlights.map((item) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  className="bg-white p-6 rounded-xl shadow-md border border-primary/5"
                >
                  <h3 className="font-semibold text-lg text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools */}
        <section className="academy-section-white">
          <div className="wrapper">
            <SectionLabel>AI TOOLS YOU&apos;LL MASTER</SectionLabel>
            <h2 className="heading text-center mb-10">
              Trade Smarter with ChatGPT & Claude
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="border border-secondary/20 rounded-xl p-8 bg-white shadow-sm"
                >
                  <p className="text-secondary text-xs tracking-widest">
                    {tool.provider}
                  </p>
                  <h3 className="text-2xl font-bold text-primary mt-2">
                    {tool.name}
                  </h3>
                  <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                    {tool.bullets.map((b) => (
                      <li key={b}>✓ {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* One year journey */}
        <section className="academy-section-alt">
          <div className="wrapper">
            <SectionLabel>LEARNING ROADMAP</SectionLabel>
            <h2 className="heading text-center mb-10">
              How Your 1 Year Journey Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningRoadmap.map((step) => (
                <div
                  key={step.step}
                  className="text-center p-6 bg-white rounded-xl border border-primary/5 shadow-sm"
                >
                  <span className="text-3xl font-bold text-secondary">
                    {step.step}
                  </span>
                  <h3 className="font-semibold mt-4 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <SimulationLink className="secondary-btn inline-block">
                Start Live Market Simulation
              </SimulationLink>
            </div>
          </div>
        </section>

        {/* Practice First — primary funnel */}
        <section className="academy-section-alt text-center">
          <div className="wrapper max-w-2xl mx-auto">
            <h2 className="heading-2">{practiceSection.headline}</h2>
            <p className="mt-4 text-gray-600">{practiceSection.body}</p>
            <p className="mt-3 text-sm text-gray-500">{practiceSection.subline}</p>
            <SimulationLink className="primary-btn inline-block mt-8">
              {practiceSection.ctaLabel}
            </SimulationLink>
            <p className="mt-4 text-xs text-gray-500">
              {practiceSection.compliance}
            </p>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="academy-section-white">
          <div className="wrapper">
            <SectionLabel>ADVANCED CURRICULUM</SectionLabel>
            <h2 className="heading text-center mb-10">
              From Beginner Confusion to Structured Trading Clarity
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {curriculum.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-md border border-primary/5"
                >
                  <span className="text-4xl font-bold text-secondary/30 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-secondary text-xs font-medium">
                      {item.tag}
                    </p>
                    <h3 className="font-semibold text-lg text-primary">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indian markets */}
        <section className="academy-section-alt">
          <div className="wrapper">
            <SectionLabel>INDIAN MARKETS IN ACTION</SectionLabel>
            <h2 className="heading text-center mb-10">
              Real Markets. Real Tools. Real Practice.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {marketsInAction.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-white shadow-md border border-primary/5"
                >
                  <p className="text-secondary text-xs font-medium">
                    {item.subtitle}
                  </p>
                  <h3 className="font-semibold text-lg mt-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor */}
        <section className="academy-section-white">
          <div className="wrapper max-w-3xl mx-auto text-center">
            <SectionLabel>MEET YOUR MENTOR</SectionLabel>
            <h2 className="heading">{trainerPlaceholder.title}</h2>
            <p className="text-secondary mt-2">{trainerPlaceholder.subtitle}</p>
            <p className="text-gray-600 mt-6">{trainerPlaceholder.bio}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {trainerPlaceholder.specialties.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-secondary/10 text-sm text-primary border border-secondary/20"
                >
                  {s}
                </span>
              ))}
            </div>
            <blockquote className="mt-8 italic text-gray-700 border-l-4 border-secondary pl-4 text-left max-w-xl mx-auto">
              &ldquo;{trainerPlaceholder.quote}&rdquo;
            </blockquote>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-gray-600 text-left max-w-md mx-auto">
              {trainerPlaceholder.highlights.map((h) => (
                <li key={h}>✓ {h}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Principles + Pricing */}
        <section className="academy-section-alt">
          <div className="wrapper">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-2">
                Designed for Serious Indian Market Learners
              </h2>
              <p className="text-gray-600 mt-4">
                Education, practice, and disciplined decision-making — not tips or
                guaranteed returns.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {educationPrinciples.map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 rounded-full bg-white text-primary text-sm border border-secondary/20"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center mt-16 pt-16 border-t border-secondary/20">
              <p className="text-secondary uppercase text-sm tracking-widest">
                Limited Mentorship Seats
              </p>
              <h2 className="heading mt-2">One Year Daily Mentorship</h2>
              <p className="text-gray-600 mt-4">
                Daily guidance to learn options trading using AI-assisted study
                methods.
              </p>
              <p className="text-4xl font-bold text-secondary mt-8">
                {academyConfig.pricing.amount}
              </p>
              <p className="text-gray-500">{academyConfig.pricing.note}</p>
              <ul className="text-left max-w-sm mx-auto mt-8 space-y-2 text-sm text-gray-600">
                {academyConfig.pricing.includes.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn inline-block mt-10"
              >
                Enroll Now on WhatsApp
              </a>
              <p className="mt-6">
                <SimulationLink className="text-secondary underline text-sm bg-transparent border-0 p-0 hover:text-primary">
                  Not ready yet? Start Live Market Simulation
                </SimulationLink>
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="academy-section-white">
          <div className="wrapper grid lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel>CONTACT US</SectionLabel>
              <h2 className="heading-2">Have Questions Before You Enroll?</h2>
              <p className="text-gray-600 mt-4">
                Whether you are a beginner or already trade options, we are
                happy to help you decide if this mentorship is right for you.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="text-secondary"
                  >
                    {companyDetails.email}
                  </a>
                </li>
                <li>
                  <span className="font-medium">WhatsApp:</span>{" "}
                  <a href={whatsappUrl} className="text-secondary">
                    {companyDetails.phone}
                  </a>
                </li>
                <li>
                  <span className="font-medium">Hours:</span> Mon - Sat · 10 AM
                  - 6 PM IST
                </li>
                <li>
                  <span className="font-medium">Live Sessions:</span> Daily
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-primary/5">
              <AcademyInquiryForm />
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-gray-50 border-t">
          <div className="wrapper">
            <p className="text-xs text-gray-600 text-center max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> {academyDisclaimer}
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default StockMarketTraining;

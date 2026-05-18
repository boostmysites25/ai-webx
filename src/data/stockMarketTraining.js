export const ACADEMY_PATH = "/edtech/stock-market-training";

export const academyConfig = {
  brandName: "AI WebX EdTech",
  programName: "Stock Market Training",
  tagline: "India Options Training",
  simulationUrl: "https://www.tradingsmart.ai/?ref=m8x6v13x",
  practicePartner: {
    name: "tradingsmart.ai",
    tagline: "Paper trading on live market data — no real funds at risk",
  },
  whatsappMessage:
    "Hi, I am interested in the AI WebX EdTech Stock Market Training program (1 Year Daily Mentorship).",
  pricing: {
    amount: "₹4,999",
    note: "+ GST for 1 full year",
    includes: [
      "1 year access",
      "Daily mentorship",
      "AI trading workflow training",
      "Options basics to advanced concepts",
      "Risk management and trade psychology",
      "India market focused examples",
      "Hands-on live market simulation practice",
    ],
  },
  marketHours: "09:15 - 15:30 IST",
};

export const homeVerticals = {
  eyebrow: "AI WebX · Technology Partner & EdTech Academy",
  headline: {
    primary: "We build software for growing businesses.",
    accent: "We train India's options traders — every trading day.",
  },
  subhead:
    "One team, two missions: ship AI-ready web and cloud products for companies, and run a structured 1-year mentorship program with daily market guidance and live simulation practice — so you learn with discipline, not tips.",
  trustPoints: [
    "Web · App · AI · Cloud",
    "365-day program",
    "Daily live mentorship",
    "Risk-free market simulation",
  ],
  tech: {
    audience: "For businesses & startups",
    label: "Technology",
    title: "Custom software, AI systems & cloud",
    highlight:
      "MVPs to enterprise platforms — web apps, automation, and AI that ships on time.",
    ctaPrimary: { label: "Explore services", href: "/services" },
    ctaSecondary: { label: "Talk to our team", href: "/contact" },
  },
  edtech: {
    audience: "For learners & active traders",
    label: "AI WebX EdTech",
    title: "1-year stock market mentorship",
    highlight:
      "NIFTY & options focus · ChatGPT & Claude workflows · practice on live data with paper money.",
    ctaPrimary: { label: "View academy program", href: ACADEMY_PATH },
    ctaSecondary: {
      label: "Try live market simulation",
      href: academyConfig.simulationUrl,
      external: true,
    },
  },
};

export const heroStats = [
  { value: "365", label: "Days Access" },
  { value: "Daily", label: "Mentorship" },
  { value: "AI", label: "Trading Tools" },
];

export const programHighlights = [
  {
    title: "Daily Mentorship",
    desc: `Structured guidance during market hours (${academyConfig.marketHours}). Live discussions, trade reviews, and disciplined learning — not tips.`,
  },
  {
    title: "Full-Year Program",
    desc: "365 days of curriculum, accountability, and skill-building. From options basics to advanced risk control.",
  },
  {
    title: "Hands-On Practice",
    desc: "Apply every lesson on a live market simulation environment. Practice with real price action using paper money before risking capital.",
  },
];

export const practiceSection = {
  headline: "Practice First, Risk Nothing",
  body: "Run your ideas on live market data with paper money — apply mentorship lessons without spending a real rupee. Mentorship students use a live market simulation as part of their daily workflow.",
  subline: "Paper trading on live market data via tradingsmart.ai — no real funds at risk.",
  ctaLabel: "Start Simulation",
  compliance: "Simulated results · Paper trading only · Not investment advice",
};

export const aiTools = [
  {
    provider: "BY OPENAI",
    name: "ChatGPT",
    bullets: [
      "Daily watchlist & sector scan prompts",
      "Option chain explanation in plain English",
      "Trade journal & mistake review",
    ],
  },
  {
    provider: "BY ANTHROPIC",
    name: "Claude",
    bullets: [
      "Deep chart & multi-timeframe reasoning",
      "Scenario planning before market opens",
      "Personalised trading playbook drafting",
    ],
  },
];

export const marketsInAction = [
  {
    title: "Track NIFTY & BANKNIFTY",
    subtitle: "LIVE INDICES",
    desc: "Read price action, OI shifts, and momentum during the 09:15 - 15:30 IST window.",
  },
  {
    title: "Decode CE / PE Premiums",
    subtitle: "OPTION CHAIN",
    desc: "Understand strike laddering, ITM/ATM/OTM zones, and weekly expiry behaviour.",
  },
  {
    title: "ChatGPT + Claude in Action",
    subtitle: "AI WORKFLOW",
    desc: "Apply AI prompts to plan, execute, and review trades — then practice outcomes on live market simulation.",
  },
];

export const curriculum = [
  {
    step: "01",
    tag: "AI WORKFLOW",
    title: "Trade with ChatGPT & Claude",
    desc: "Hands-on training on using ChatGPT and Claude to build watchlists, read option chains, draft trade plans, and run post-trade reviews alongside your simulation practice.",
  },
  {
    step: "02",
    tag: "MARKET CORE",
    title: "Options Mastery",
    desc: "Understand CE, PE, premiums, strike selection, expiry behavior, IV, and practical market examples.",
  },
  {
    step: "03",
    tag: "CAPITAL FIRST",
    title: "Risk Engine",
    desc: "Learn position sizing, stop-loss planning, capital protection, and when not to trade.",
  },
  {
    step: "04",
    tag: "365 DAYS",
    title: "Daily Mentorship",
    desc: "Stay consistent with one full year of guided learning, market discussions, and structured practice.",
  },
];

export const learningRoadmap = [
  {
    step: "01",
    title: "Foundation",
    desc: "Options basics, market language, premium behavior, and risk awareness.",
  },
  {
    step: "02",
    title: "AI Setup",
    desc: "Learn how to use AI for research, journaling, watchlists, and scenario planning.",
  },
  {
    step: "03",
    title: "Live Market Practice",
    desc: "Apply chart reading and option chain concepts on a live market simulation — real prices, paper money, zero capital risk.",
  },
  {
    step: "04",
    title: "Trader Discipline",
    desc: "Build a repeatable process with review, psychology, and capital protection.",
  },
];

export const trainerPlaceholder = {
  title: "Our Trading Mentors",
  subtitle: "Stock Market & Trading Mentors",
  bio: "Experienced mentors guide you through practical strategies, technical analysis, risk management, and market psychology — alongside AI tools like ChatGPT and Claude for faster, more disciplined learning.",
  specialties: [
    "Intraday Trading",
    "Swing Trading",
    "Technical Analysis",
    "Risk & Money Management",
    "Trading Psychology",
    "Options Market Basics",
  ],
  highlights: [
    "Daily market learning sessions",
    "Trading workflows with ChatGPT & Claude",
    "Beginner-friendly explanations",
    "Trade review and journaling",
    "Risk-first trading approach",
  ],
  quote:
    "Helping traders build confidence through practical strategies, technical analysis, and disciplined trading.",
};

export const educationPrinciples = [
  "No guaranteed profit claims",
  "Education-focused approach",
  "AI-supported learning",
  "Risk-first trading mindset",
];

export const spotlightFeatures = [
  "Option chain basics",
  "Risk protocol",
  "ChatGPT & Claude workflows",
  "India market focus (09:15–15:30 IST)",
];

export const academyDisclaimer =
  "This program is for education and skill development only. Options trading involves market risk. We do not provide guaranteed returns, investment advice, or profit assurance. Learners should make independent decisions and consult a registered financial professional where required.";

export const edtechCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI WebX EdTech — Stock Market Training",
  description:
    "One-year daily mentorship program for Indian options traders covering market structure, option chains, risk management, and AI-assisted trading workflows.",
  provider: {
    "@type": "Organization",
    name: "AI WebX",
    sameAs: "https://www.aiwebx.in",
  },
  educationalLevel: "Beginner to Intermediate",
  inLanguage: "en-IN",
  offers: {
    "@type": "Offer",
    category: "Education",
    priceCurrency: "INR",
  },
};

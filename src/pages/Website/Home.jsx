import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component"; // For optimized image loading
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import line from "../../assets/images/line.png";
import {
  industriesCompanyServe,
  localBusinessSchema,
  services,
} from "../../data/constant";
import aboutImg from "../../assets/images/home-aboutus.webp";
import whoWeAre from "../../assets/images/who-we-are.webp";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import { Link } from "react-router-dom";
import WorkFlow from "../../components/WorkFlow";
import EdTechSpotlight from "../../components/EdTech/EdTechSpotlight";
import { edtechCourseSchema } from "../../data/stockMarketTraining";

// Lazy load components for better performance
const Header = React.lazy(() => import("../../components/Website/Header"));
const Banner = React.lazy(() => import("../../components/Website/Banner"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          AI WebX - AI Technology Solutions & EdTech Stock Market Training
        </title>
        <meta
          name="description"
          content="AI WebX offers AI, Machine Learning, Blockchain solutions and EdTech stock market training with 1-year daily mentorship for Indian options traders."
        />
        <meta
          name="keywords"
          content="AI solutions, Machine Learning, Blockchain, EdTech, stock market training, NIFTY, BANKNIFTY, options trading India"
        />
        <link rel="canonical" href="https://www.aiwebx.com" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="AI WebX - Leading AI & Technology Solutions Provider"
        />
        <meta
          property="og:description"
          content="Transform your business with cutting-edge AI, Machine Learning, and Blockchain solutions from AI WebX."
        />
        <meta property="og:image" content={aboutImg} />
        <meta property="og:url" content="https://www.aiwebx.in" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI WebX - Leading AI & Technology Solutions Provider"
        />
        <meta
          name="twitter:description"
          content="Transform your business with cutting-edge AI, Machine Learning, and Blockchain solutions."
        />
        <meta name="twitter:image" content={aboutImg} />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(edtechCourseSchema)}
        </script>
      </Helmet>

      <div className="landing-bg">
        <Header />
        <Banner />
        <EdTechSpotlight />

        <main>
          <section
            id="services"
            className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
            aria-label="Our Services"
          >
            <div className="blurred-blue left-[-10%] top-[-10%]"></div>
            <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary capitalize">
                  Our Services
                </h2>
              </div>
              <h1 data-aos="fade-up" className="heading text-center">
                Technology & Education Services
              </h1>
              <p data-aos="fade-up" className="text-center max-w-2xl">
                From AI and cloud solutions for businesses to EdTech stock
                market mentorship — explore how AI WebX can help you grow.
              </p>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 mx-auto max-w-6xl"
              >
                {services.map((item) => (
                  <ServiceItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section
            className="wrapper py-[2rem] flex flex-col gap-3"
            aria-label="Industries We Serve"
          >
            <div className="flex flex-col gap-3">
              <h2 data-aos="fade-up" className="heading text-center">
                Industries We Serve
              </h2>
              <p data-aos="fade-up" className="mt-2 text-center mb-3">
                We cater to a wide range of industries, delivering tailored AI
                and tech solutions to meet specific needs:
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
              {industriesCompanyServe.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem]"
                >
                  <LazyLoadImage
                    width="200"
                    height="100"
                    src={item.img}
                    alt={`${item.title} industry solutions`}
                    className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-white/70 group-hover:bg-black/60 transition-all duration-300"></div>
                  <h3 className="text-center text-[1.3rem] font-medium relative z-10 group-hover:text-white transition-all duration-300">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="relative z-10 block text-center mt-2">
                      <span className="inline-block px-2 py-0.5 text-xs rounded bg-secondary text-white">
                        {item.badge}
                      </span>
                    </span>
                  )}
                  <p className="text-gray-800 text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <WorkFlow />

            <section
              className="wrapper pb-10 flex flex-col items-center gap-5 z-10"
              aria-label="About Company"
            >
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary">About Company</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
                <div className="relative" data-aos="fade-right">
                  <LazyLoadImage
                    src={whoWeAre}
                    width="500"
                    height="400"
                    alt="AI WebX company overview"
                    className="rounded-lg h-[20rem] md:h-full md:max-h-[25rem] w-full object-cover object-right"
                  />
                  <div className="w-full sm:w-fit sm:max-w-[18rem] text-white h-full sm:h-fit absolute md:-bottom-[5rem] bottom-0 left-0 bg-primary/70 sm:bg-primary p-5 rounded-lg">
                    <h3 className="text-5xl font-bold text-white">2+</h3>
                    <p className="font-medium mt-3 text-white">
                      Years of Experience
                    </p>
                    <p className="pl-5 border-l-2 border-white text-md mt-3 text-white">
                      The trusted choice for your software development solutions
                    </p>
                  </div>
                </div>
                <div data-aos="fade-right" className="flex flex-col gap-5">
                  <h2 className="heading-2">
                    Our Vision: Empowering Global Businesses with Intelligent
                    Technology
                  </h2>
                  <p>
                    At AI WebX, we are committed to delivering innovative AI,
                    Machine Learning, and Blockchain solutions that help
                    businesses adapt and excel in an increasingly complex and
                    competitive marketplace.
                  </p>
                  <Link to="/about-us" className="primary-btn mt-7 w-fit">
                    Know More About Us
                  </Link>
                </div>
              </div>
            </section>
          </section>

          <Experience />
          <Testimonials />
          <LeadForm />
          <AssociatedWith />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

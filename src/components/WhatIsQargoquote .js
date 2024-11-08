import { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import q from "../assets/qq.png";

export const WhatIsQargoquote = () => {
  const [visibleSections, setVisibleSections] = useState({});

  // Declare each ref individually at the top level
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const introRef = useRef(null);
  const subtitleRef = useRef(null);
  const listRefs = useRef([]); // Array for list items
  const conclusionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe each ref individually
    observer.observe(titleRef.current);
    observer.observe(imageRef.current);
    observer.observe(introRef.current);
    observer.observe(subtitleRef.current);
    observer.observe(conclusionRef.current);
    listRefs.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-rose-900 p-6 mx-auto" id="what-is-qargoquote">
      <div className="max-w-[1280px] mx-auto space-y-8">
        {/* Responsive Layout for Image and Title */}
        <div className="flex flex-col md:flex-row md:items-center ">
          <img
            ref={imageRef}
            src={q}
            alt="Logo"
            data-section="image"
            className={`w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 mb-4 md:mb-0 transition-opacity duration-700 ${
              visibleSections.image ? "opacity-100" : "opacity-0"
            }`}
          />
          <h2
            ref={titleRef}
            data-section="title"
            className={`text-3xl font-bold pl-4 text-white text-center md:text-left transition-opacity duration-700 ${
              visibleSections.title ? "opacity-100" : "opacity-0"
            }`}
          >
            What is Qargoquote?
          </h2>
        </div>

        <p
          ref={introRef}
          data-section="intro"
          className={`text-white text-lg transition-opacity duration-700 ${
            visibleSections.intro ? "opacity-100" : "opacity-0"
          }`}
        >
          Qargoquote is Qatar’s first online B2B logistics marketplace, uniquely
          designed to transform how importers and logistics providers connect,
          compare, and collaborate. Our platform redefines logistics
          procurement, making it faster, more transparent, and cost-effective.
        </p>

        <h3
          ref={subtitleRef}
          data-section="subtitle"
          className={`text-2xl font-semibold text-white transition-opacity duration-700 ${
            visibleSections.subtitle ? "opacity-100" : "opacity-0"
          }`}
        >
          Why Choose Qargoquote?
        </h3>

        <ul className="list-disc list-inside space-y-4 text-white pl-4">
          {[
            "The only platform that can solve procurement and logistics business challenges. The place that connects importers and traders with logistics service providers.",
            "Instant Access to Competitive Quotes: Importers can post their shipment needs and receive multiple quotes from a network of verified logistics providers. No more waiting or repetitive outreach—Qargoquote brings all options together so you can make quick, informed decisions.",
            "Transparent Rate and Quality Comparisons: Compare prices and service quality with verified ratings and reviews. Our platform ensures transparency, helping importers choose providers who align with their budget and standards.",
            "A Steady Stream of Targeted Leads for Service Providers: For logistics providers, Qargoquote offers direct access to importers actively seeking services, reducing the need for traditional sales outreach.",
            "Flexible Subscription Options: With weekly, monthly, and annual plans, Qargoquote adapts to your needs, providing full platform access with the flexibility that suits your business.",
            "Reputation-Building with Ratings and Reviews: Both importers and providers benefit from a transparent rating system. Providers can build credibility, while importers can make confident choices based on feedback.",
            "Data Insights for Smarter Business Decisions: Service providers can access valuable market data, allowing them to refine services, adjust pricing, and stay competitive.",
          ].map((text, index) => (
            <li
              key={index}
              ref={(el) => (listRefs.current[index] = el)}
              data-section={`list-item-${index}`}
              className={`transition-opacity duration-700 ${
                visibleSections[`list-item-${index}`]
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <strong>{text.split(":")[0]}:</strong> {text.split(":")[1]}
            </li>
          ))}
        </ul>

        <p
          ref={conclusionRef}
          data-section="conclusion"
          className={`text-lg font-semibold text-white transition-opacity duration-700 ${
            visibleSections.conclusion ? "opacity-100" : "opacity-0"
          }`}
        >
          Qargoquote: Qatar’s First and Only Online B2B Solution for Logistics
          Procurement
        </p>
        <p
          className={`text-white transition-opacity duration-700 ${
            visibleSections.conclusion ? "opacity-100" : "opacity-0"
          }`}
        >
          Whether you’re an importer or trader looking for the best shipping
          deal or a logistics service provider aiming to expand your reach,
          Qargoquote offers the tools, connections, and transparency you need to
          succeed in today’s logistics landscape.
        </p>
      </div>
    </section>
  );
};

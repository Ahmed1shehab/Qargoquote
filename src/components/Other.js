import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import like from "../assets/like.png";
import like2 from "../assets/like2.jpg";

export const Other = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Update if screen is large (1024px or wider)
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative max-w-[1280px] mx-auto p-6 font-sans text-gray-800">
      {/* Main Container for Image and Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left relative">
        {/* Text Content */}
        <div className="relative z-20 mt-8 md:mt-0 md:w-2/3" data-aos="fade-up">
          <p className="text-lg text-gray-500 mb-4">
            Imagine having a steady stream of targeted leads delivered right to
            you—clients actively searching for logistics solutions, ready to
            receive your quote.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 max-w-[800px] mx-auto">
            With <span className="font-normal">Qargoquote</span>, you can access
            a marketplace of serious inquiries, all looking for reliable service
            providers like you
          </h2>

          <p className="text-lg text-gray-500 mb-4 text-center md:text-left max-w-[800px] mx-auto">
            It’s time to stop chasing leads and start winning them.
          </p>

          <p className="text-xl font-bold text-gray-800 mt-4">
            Join Qargoquote to expand your reach, improve your conversion rate,
            and boost your business with <br />
            qualified sales leads.
          </p>
        </div>

        {/* Image Container (only visible on large screens) */}
        {isLargeScreen && (
          <div
            className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 opacity-70"
            data-aos="fade-left"
          >
            <img
              src={like2}
              alt="Background Logo"
              className="absolute bottom-0 right-0 w-full h-full z-0"
            />
            <img
              src={like}
              alt="Logo"
              className="absolute bottom-0 right-0 w-full h-full z-10"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Other;

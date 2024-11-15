import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import like from "../assets/like.png";
import like2 from "../assets/like2.jpg";
import logo from "../assets/q.png";

export const Other = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="other"
      className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 font-sans text-gray-800 overflow-hidden"
    >
      <div className="flex justify-center pb-6 md:pb-10" data-aos="fade-down">
        <img src={logo} alt="Logo" className="w-48 sm:w-64" />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left relative space-y-8 md:space-y-0">
        <div
          className="relative z-20 md:w-2/3 px-4 md:px-0"
          data-aos="fade-up"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-4 md:mb-6 max-w-prose">
            Imagine having a steady stream of targeted leads delivered right to
            you—clients actively searching for logistics solutions, ready to
            receive your quote.
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 max-w-[800px] mx-auto">
            With <span className="font-normal">Qargoquote</span>, you can access
            a marketplace of serious inquiries, all looking for reliable service
            providers like you.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-4 md:mb-6 max-w-prose">
            It’s time to stop chasing leads and start winning them.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mt-4 md:mt-6 max-w-prose">
            Join Qargoquote to expand your reach, improve your conversion rate,
            and boost your business with qualified sales leads.
          </p>
        </div>
        <div
          className={`${
            isLargeScreen ? "absolute bottom-0 right-0" : "mt-8 mx-auto"
          } w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 opacity-${
            isLargeScreen ? "70" : "40"
          } flex justify-center items-center`}
          data-aos="fade-left"
        >
          <div className="relative w-full h-full">
            <img
              src={like2}
              alt="Background Logo"
              className="absolute inset-0 w-full h-full z-0 object-cover"
            />
            <img
              src={like}
              alt="Logo"
              className="absolute inset-0 w-full h-full z-10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Other;

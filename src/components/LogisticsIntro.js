import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pic3 from "../assets/Logistics/pic3.png";

export const LogisticsIntro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-rose-900 flex items-center">
      <div className="max-w-[1200px] mx-auto pt-6 text-center font-sans text-white">
        
        {/* Title with Fade-in Animation */}
        <p
          className="text-xl md:text-2xl font-semibold mb-6"
          data-aos="fade-in"
        >
          What if you could get instant access to a marketplace of logistics service providers, all in one place? Imagine comparing multiple quotes, evaluating service quality through transparent ratings, and selecting the best option—all within minutes!
        </p>
        
        <h2
          className="text-2xl md:text-3xl font-bold text-slate-200 mb-4"
          data-aos="fade-in"
        >
          Qargoquote is here to transform the way you manage logistics.
        </h2>

        <div
          className="text-lg md:text-xl text-white mb-6"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <p>No more phone calls</p>
          <p>No more endless follow-ups for quotations</p>
        </div>

        {/* Two-column section with image and text */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          
          {/* Image Column with Slide-in Animation from Left */}
          <div
            className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img
              src={pic3}
              alt="Logistics"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64"
            />
          </div>
          
          {/* Text Column with Slide-in Animation from Right */}
          <div
            className="md:w-1/2 flex items-center justify-center md:justify-start md:mt-4"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <p className="text-lg md:text-xl text-slate-200 font-medium md:text-left">
              Now you can streamline the procurement process, save on costs, <br />
              and make informed decisions with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsIntro;

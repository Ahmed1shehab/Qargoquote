import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ex1 from "../assets/importer/ex1.png";
import ex2 from "../assets/importer/ex2.jpg";
import "./Welcome.css";

export const Importer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="Importer" className="bg-rose-900 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-6">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white leading-tight pt-2 mb-4 head break-words"
          data-aos="fade-up"
        >
          Importer & Trading Business Owner
        </h1>

        <div
          className="space-y-4 text-white text-base md:text-lg mb-6 font-semibold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="styled-p">
            Still using outdated methods to procure shipping and logistics
            services?
          </p>
          <p className="styled-p">
            Spending countless hours contacting service providers one by one?
          </p>
          <p className="styled-p">
            Tired of waiting for multiple quotes to trickle in, only to juggle
            through endless emails and spreadsheets?!
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <div
            className="w-full md:w-1/2 h-80"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={ex1}
              alt="Importer & Trading Business Owner 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-full md:w-1/2 h-80 mt-4 md:mt-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src={ex2}
              alt="Importer & Trading Business Owner 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1
          className="text-2xl md:text-4xl font-bold text-gray-200 text-center mb-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          This is becoming a History
        </h1>
        <span
          className="block text-gray-200 text-base md:text-lg text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          in the past now…
        </span>
      </div>
    </section>
  );
};

export default Importer;

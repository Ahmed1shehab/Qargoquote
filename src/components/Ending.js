import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import comp from "../assets/comp.png";

export const Ending = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black py-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 sm:px-6 md:px-12 gap-8">
        
        {/* Text Section */}
        <div
          className="md:w-1/2 flex items-center justify-center md:justify-start"
          data-aos="fade-right"
        >
          <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-white leading-relaxed md:leading-loose">
            Save Time & Efforts <br />
            Cut Costs <br />
            Make the Best Shipping Deals <br />
            Enhance your <br />
            Business!
          </p>
        </div>

        {/* Image Section */}
        <div
          className="md:w-1/2 flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <img
            src={comp}
            alt="Logistics Business Owner"
            className="w-3/4 sm:w-4/5 md:w-full max-w-xs sm:max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Ending;

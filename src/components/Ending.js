import{ useEffect } from "react";
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
    <div className="bg-black ">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-6 gap-6">
        <div
          className="md:w-1/2 flex items-center justify-center md:justify-start"
          data-aos="fade-right"
        >
          <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            Save Time & Efforts <br />
            Cut Costs <br />
            Make the Best Shipping Deals <br />
            Enhance your <br />
            Business!
          </p>
        </div>

        <div
          className="md:w-1/2 flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <img
            src={comp}
            alt="Logistics Business Owner"
            className="w-full h-full max-h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

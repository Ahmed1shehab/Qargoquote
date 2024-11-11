import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Welcome.css";
import pic1 from "../assets/Logistics/pic1.png";
import pic2 from "../assets/Logistics/pic2.png";

export const Logistics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for smooth animation
      once: true, // Trigger animation only once on scroll
    });
  }, []);

  return (
    <section id="Service" className="bg-rose-900 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-6">
        <h1
          className="text-2xl md:text-3xl text-center font-bold text-white leading-none pt-2 mb-4 head"
          data-aos="fade-up"
        >
          Logistics Business Owner
        </h1>

        <div
          className="space-y-2 text-white text-base md:text-lg mb-6 px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            Missing out on potential clients due to{" "}
            <strong>limited market reach?</strong>
          </p>
          <p>
            Still relying on cold calls and a <strong>large sales team</strong>{" "}
            to reach potential clients?
          </p>
          <p>
            <strong>Struggling</strong> to consistently find high-quality sales
            leads for your logistics services?
          </p>
          <p>
            Spending time <strong>chasing leads</strong> in the market but can't
            get an opportunity?
          </p>
          <p>
            Wondering if there’s a more{" "}
            <strong>efficient way to keep your sales pipeline full</strong>{" "}
            without cold calls?
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div
            className="w-full md:w-1/2 h-80"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img
              src={pic1}
              alt="Logistics Business Owner 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-full md:w-1/2 h-80 mt-4 md:mt-0"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src={pic2}
              alt="Logistics Business Owner 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;

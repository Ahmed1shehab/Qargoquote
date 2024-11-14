import getStarted from "../assets/GetStarted.png";
import logo from "../assets/q.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const GetStarted = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white relative overflow-hidden pb-8">

      <div className="text-white max-w-[1280px] mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-12">
        {/* Left Column */}
        <div
          className="md:w-1/2 relative flex flex-col items-center md:items-start mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <img
            src={getStarted}
            alt="Get Started"
            className="w-full h-auto mb-4 object-cover"
          />
          <h1 className="text-white text-3xl sm:text-4xl font-bold  md:static">
            Get Started !!
          </h1>

          {/* Additional Texts under Get Started */}
          <div className="flex flex-col items-start mt-4" data-aos="fade-in">
  <div className="flex flex-row items-start space-x-4">
    <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white line-through-red">
      Today
    </span>
    <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
      Now!
    </span>
  </div>
  <p className="text-md sm:text-lg md:text-xl text-gray-400 mt-2 text-left">
    Cost savings for longer terms...
  </p>
</div>

        </div>

        {/* Right Column */}
        <div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-12"
          data-aos="fade-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
            SUBSCRIPTION OPTIONS
          </h2>
          <p className="text-sm sm:text-md md:text-lg text-gray-300 mb-4">
            Flexible plans to fit every business need! <br />
            With suitable weekly, monthly, and annual plans
          </p>
          <a href="/" className="text-white underline text-md md:text-lg">
            Register
          </a>
        </div>
      </div>

      <div
        className="hidden md:flex items-center justify-end px-4 sm:px-6 md:px-12 -mt-16" 
        data-aos="fade-in"
      >
        <img src={logo} alt="Logo" className="w-32 md:w-48 lg:w-64" />
      </div>
    </div>
  );
};

export default GetStarted;

import getStarted from "../assets/GetStarted.png";
import logo from "../assets/q.png"; // Import your logo image
import { useEffect } from "react";
import AOS from "aos"; // For animation
import "aos/dist/aos.css"; // Import AOS styles

export const GetStarted = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white relative">
      {/* Logo */}
      <div className="flex items-center justify-center transform -translate-x-1/2" data-aos="fade-in">
        <img src={logo} alt="Logo" className="w-64" />
      </div>

      <div className="text-white max-w-[1280px] mx-auto flex flex-col md:flex-row items-center p-6 md:p-12">
        {/* Left Column */}
        <div
          className="md:w-1/2 relative flex flex-col items-start mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <img
            src={getStarted}
            alt="Get Started"
            className="w-full h-auto mb-4 object-cover"
          />
          <h1 className="text-white text-5xl absolute bottom-4 right-4 font-bold">
            Get Started !!
          </h1>
        </div>

        {/* Right Column */}
        <div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-12"
          data-aos="fade-left"
        >
          <h2 className="text-4xl font-semibold mb-2">SUBSCRIPTION OPTIONS</h2>
          <p className="text-lg text-gray-300 mb-4">
            Flexible plans to fit every business need! <br />
            With suitable weekly, monthly, and annual plans
          </p>
          <a href="/" className="text-white underline text-lg">
            Learn More
          </a>
        </div>
      </div>

      {/* Additional Texts */}
      <div className="flex flex-col items-center justify-center py-4 sd:py-8" data-aos="fade-in">
        <div className="flex items-center space-x-4">
          <span className="text-5xl font-semibold text-gray-500 line-through">
            Today
          </span>
          <span className="text-5xl font-semibold text-green-500">Now!</span>
        </div>
        <p className="text-xl text-gray-400 mt-2 text-center md:text-left md:ml-4">
          Cost savings for longer terms...
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

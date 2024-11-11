import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import mainImage from "../assets/HowItWorks/main2.png";
import second2 from "../assets/HowItWorks/second2.png";

export const HowItWorksSecond = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto p-4 sm:p-6 font-sans text-gray-800 flex flex-col md:flex-row items-center md:items-start overflow-hidden">
      {/* Left Column with Main Image */}
      <div
        className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center md:justify-start"
        data-aos="fade-right"
      >
        <img
          src={mainImage}
          alt="Main"
          className=" h-auto object-contain mx-auto md:mx-0"
        />
      </div>

      {/* Right Column with Content */}
      <div className="md:w-2/3 w-full md:pl-8" data-aos="fade-left">
        <div className="flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
            How it works
          </h1>
          <img
            src={second2}
            alt="Icon"
            className="mt-4 md:mt-0 md:ml-4 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
          />
        </div>

        <span
          className="block text-slate-400 text-base sm:text-lg text-center md:text-left ml-0 md:ml-[75px]"
          data-aos="fade-up"
        >
          For Importers and Traders
        </span>

        <h2
          className="text-lg sm:text-xl font-semibold mt-6 mb-6 text-center md:text-left"
          data-aos="fade-up"
        >
          HERE’S A STEP-BY-STEP PROCESS FOR USING QARGOQUOTE
        </h2>

        <div
          className="space-y-4 text-sm sm:text-base md:text-lg text-center md:text-left px-2 sm:px-0"
          data-aos="fade-up"
        >
          <p>
            <strong>Sign-Up:</strong> Users create an account, entering business
            details and completing verification.
          </p>
          <p>
            <strong>Log-In:</strong> Users log in securely for platform access.
          </p>
          <p>
            <strong>Choose Subscription Plan:</strong> Select from weekly,
            monthly, or annual subscription options. Complete payment to unlock
            full platform features.
          </p>
          <p>
            <strong>Create a Shipment Request:</strong> Importers enter shipment
            specifics, submitting a request for quotes.
          </p>
          <p>
            <strong>Receive and Compare Quotes:</strong> Importers review
            quotes, comparing costs and quality based on provider ratings.
          </p>
          <p>
            <strong>Select a Service Provider:</strong> Finalize the booking
            with the chosen provider.
          </p>
          <p>
            <strong>Completion and Review:</strong> After successful delivery,
            importers can rate the service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSecond;

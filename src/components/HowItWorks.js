import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import mainImage from "../assets/HowItWorks/main.png";
import iconImage from "../assets/HowItWorks/icon.png";
import logo from "../assets/q.png";

export const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
      once: true, // Only animate once
    });
  }, []);

  return (
    <section>
      <div className="flex justify-center pt-4" data-aos="fade-down">
        <img src={logo} alt="Logo" className="w-64" />
      </div>
      <div
        id="service-provider"
        className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-6 font-sans text-gray-800 flex flex-col md:flex-row overflow-hidden"
      >
        {/* Left Column with Main Image */}
        <div
          className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center md:justify-start"
          data-aos="fade-right"
        >
          <img
            src={mainImage}
            alt="Main"
            className="w-3/4 h-auto object-contain mx-auto md:mx-0"
          />
        </div>

        {/* Right Column with Content */}
        <div className="md:w-2/3 w-full md:pl-8" data-aos="fade-left">
          <div className="flex flex-col md:flex-row items-center mb-2">
            <h1 className="text-4xl font-bold">How it works</h1>
            <img
              src={iconImage}
              alt="Icon"
              className="w-28 ml-4 md:ml-4 md:order-none order-2 mt-4 md:mt-0"
            />
          </div>

          <span
            className="block text-slate-400 text-lg text-center md:text-left md:ml-[75px]"
            data-aos="fade-up"
          >
            For Service Provider
          </span>

          <h2 className="text-xl font-semibold mt-8 mb-8" data-aos="fade-up">
            HERE’S A STEP-BY-STEP PROCESS FOR USING QARGOQUOTE
          </h2>

          <div className="space-y-4" data-aos="fade-up">
            <p>
              <strong>Sign-Up:</strong> Service providers create an account,
              verify details, and log in.
            </p>
            <p>
              <strong>Choose Subscription Plan:</strong> Providers select a
              subscription (weekly, monthly, or annually) and complete payment
              to access the platform’s features.
            </p>
            <p>
              <strong>Receive Shipment Requests:</strong> Providers get notified
              of new shipment requests that match their logistics activity
              services.
            </p>
            <p>
              <strong>Submit Quotes:</strong> Providers respond with quotes
              based on shipment details, including cost and service specifics.
            </p>
            <p>
              <strong>Monitor Selection:</strong> Providers track and get
              notified when quotes are accepted by importers.
            </p>
            <p>
              <strong>Service Delivery:</strong> After being selected, providers
              coordinate with the importer for service fulfillment.
            </p>
            <p>
              <strong>Receive and Review Feedback:</strong> Upon completion,
              providers receive ratings and feedback, helping improve visibility
              and future business opportunities on the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

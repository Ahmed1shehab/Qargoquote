import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../assets/KeyBenefits/logo1.png";
import logo2 from "../assets/KeyBenefits/logo2.png";
import logo3 from "../assets/KeyBenefits/logo3.png";

export const KeyBenefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="key-benefits" className="bg-rose-900 relative p-6">
      <div className="max-w-[1280px] mx-auto font-sans text-slate-300 flex flex-col md:flex-row">
        {/* Left Column with Images, hidden on smaller screens */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:block hidden">
          <img
            src={logo1}
            alt="logo 1"
            className="w-3/4 mb-4 rotate-6"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            src={logo2}
            alt="logo 2"
            className="w-3/4 mb-4 rotate-6"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
          <img
            src={logo3}
            alt="logo 3"
            className="w-3/4 rotate-6"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
        </div>

        {/* Right Column with Text Content */}
        <div className="w-full md:w-2/3 p-6" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-6 text-white text-center md:text-left">
            Key Benefits
          </h1>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-slate-200 mb-2">
              INCREASED EXPOSURE AND CLIENT REACH
            </h2>
            <p className="text-white">
              <strong>Expand Market Presence:</strong> Service providers gain
              visibility to all inquiries from importers actively looking for
              logistics solutions, eliminating the need for time-consuming outreach.
            </p>
            <p className="text-white">
              <strong>Direct Targeting:</strong> With importers and traders
              posting specific shipment requests, providers can respond to
              relevant inquiries, increasing their chances of securing contracts.
            </p>
            <p className="text-white">
              <strong>Opportunities for Growth:</strong> By attracting inquiries of all sizes, providers can stabilize revenue streams and foster growth.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-slate-200 mb-2">
              COST EFFICIENCY THROUGH AUTOMATION
            </h2>
            <p className="text-white">
              <strong>Reduced Sales Overhead:</strong> Qargoquote’s automated
              inquiry and quoting system reduces reliance on a large sales team, saving on costs.
            </p>
            <p className="text-white">
              <strong>Streamlined Quoting Process:</strong> Automated
              notifications for relevant requests allow providers to respond quickly.
            </p>
            <p className="text-white">
              <strong>Lower Marketing Expenses:</strong> The platform serves as
              a digital marketplace, reducing the need for expensive marketing by providing a steady client flow.
            </p>
          </section>

          <section className="mb-0">
            <h2 className="text-xl font-bold text-slate-200 mb-2">
              EFFICIENT BIDDING AND FASTER RESPONSE TIMES
            </h2>
            <p className="text-white">
              <strong>Quick Quote Submission:</strong> Providers can respond to
              requests quickly, keeping them competitive.
            </p>
            <p className="text-white">
              <strong>Improved Responsiveness:</strong> Automated systems ensure
              that providers are notified immediately of new opportunities.
            </p>
            <p className="text-white">
              <strong>Increased Winning Potential:</strong> Rapid quote submissions increase providers’ chances of securing jobs.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

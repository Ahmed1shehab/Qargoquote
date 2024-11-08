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
            className="w-3/4 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            style={{ transform: "rotate(10deg)" }}
          />
          <img
            src={logo2}
            alt="logo 2"
            className="w-3/4 mb-4"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            style={{ transform: "rotate(10deg)" }}
          />
          <img
            src={logo3}
            alt="logo 3"
            className="w-3/4"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            style={{ transform: "rotate(10deg)" }}
          />
        </div>

        {/* Right Column with Text Content */}
        <div className="w-full md:w-2/3 p-6" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-6 text-white text-center md:text-left">Key Benefits</h1>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-slate-200 mb-2">
              INCREASED EXPOSURE AND CLIENT REACH
            </h2>
            <p className="text-white">
              <strong>Expand Market Presence:</strong> Service providers gain
              visibility to all inquiries that importers actively looking for
              logistics solutions. This direct access eliminates the need for
              time-consuming outreach and marketing efforts.
            </p>
            <p className="text-white">
              <strong>Direct Targeting:</strong> With importers and traders
              posting specific shipment requests, providers can focus on
              responding to relevant inquiries, increasing the chance of
              securing contracts and reducing cold sales efforts.
            </p>
            <p className="text-white">
              <strong>Opportunities for Growth:</strong> By attracting a wide
              range of inquiries (small, medium, and large), providers can
              stabilize revenue streams and foster long-term growth.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold text-slate-200 mb-2">
              COST EFFICIENCY THROUGH AUTOMATION
            </h2>
            <p className="text-white">
              <strong>Reduced Sales Overhead:</strong> Qargoquote’s automated
              inquiry and quoting system reduces reliance on a large sales team,
              saving on salaries, training, and other sales-related costs.
            </p>
            <p className="text-white">
              <strong>Streamlined Quoting Process:</strong> Automated
              notifications for relevant shipment requests allow providers to
              respond promptly, increasing efficiency without needing extra
              resources.
            </p>
            <p className="text-white">
              <strong>Lower Marketing Expenses:</strong> The platform serves as
              a digital marketplace, reducing the need for expensive marketing
              campaigns by providing a steady flow of interested clients.
            </p>
          </section>

          <section className="mb-0">
            <h2 className="text-xl font-bold text-slate-200 mb-2">
              EFFICIENT BIDDING AND FASTER RESPONSE TIMES
            </h2>
            <p className="text-white">
              <strong>Quick Quote Submission:</strong> Providers can respond to
              shipment requests quickly through the platform, keeping them
              competitive while reducing the administrative burden of
              traditional quoting processes.
            </p>
            <p className="text-white">
              <strong>Improved Responsiveness:</strong> Automated systems ensure
              that providers are notified immediately of new opportunities,
              helping them stay agile and responsive to clients’ needs, a key
              factor in winning contracts.
            </p>
            <p className="text-white">
              <strong>Increased Winning Potential:</strong> By being able to
              submit quotes rapidly, providers increase their chances of
              securing jobs, enhancing their sales conversion rate without
              additional costs.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

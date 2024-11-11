import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../assets/KeyBenefits/logo1.png";
import logo2 from "../assets/KeyBenefits/logo2.png";
import logo3 from "../assets/KeyBenefits/logo3.png";
import Logo from "../assets/q.png";
import "./KeyBenefits.css";

export const KeyBenefitsS = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white relative">
      <div className="max-w-[1280px] mx-auto font-sans text-black flex flex-col md:flex-row relative">
        <img src={Logo} alt="Logo" className="top-left-logo w-64" />

        <div className="w-full md:w-2/3 p-6" data-aos="fade-up">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-black text-center md:text-left">
              Key Benefits
            </h1>
            <h2 className="text-2xl font-bold text-red-900 text-center md:text-left mt-2">
              Importers & Traders
            </h2>
          </div>

          <div className="text-center md:text-left mb-6 px-8">
            <p className="text-red-700 text-2xl font-bold">
              EMPHASIZE TRANSPARENCY, TIME-SAVING, AND THE ABILITY TO AVOID
              HIDDEN COSTS.
            </p>
          </div>

          <section className="mb-6">
            <p className="text-black text-xl py-[15px]">
              <strong className="text-slate-700 font-bold">
                Time & Effort Savings:
              </strong>{" "}
              With Qargoquote, you are enhancing the procurement department in
              your organization by expanding resources, saving significant time
              by having access to a wide network of both local and international
              logistics service providers. This enables you to receive multiple
              quotes for your inquiry in one place through simplified steps,
              eliminating the need to search and contact them individually.
            </p>
            <p className="text-black text-xl pb-[15px]">
              <strong className="text-slate-700 font-bold">
                Cost Savings:
              </strong>{" "}
              You will be able to compare multiple offers and select the most
              efficient option according to your priority, considering effective
              shipping options by shipping cost, transit time, payment method,
              and service provider quality rating.
            </p>
            <p className="text-black text-xl pb-[15px]">
              <strong className="text-slate-700 font-bold">
                Corruption Mitigation:
              </strong>{" "}
              Qargoquote's transparent system reduces the risk of biased
              decision-making and maintains procurement integrity.
            </p>
          </section>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center">
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
      </div>
    </div>
  );
};

export default KeyBenefitsS;

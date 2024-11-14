import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../assets/KeyBenefits/logo1.png";
import logo2 from "../assets/KeyBenefits/logo2.png";
import logo3 from "../assets/KeyBenefits/logo3.png";
// import Logo from "../../assets/q.png";
import "./LogisticsAndKey.css";

export const KeyBenefitsS = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-rose-900 overflow-hidden relative px-4 sm:px-6 md:px-8">
      <div className="max-w-[1280px] mx-auto font-sans text-black flex flex-col md:flex-row relative items-center md:items-start">
       
        {/* <img
          src={Logo}
          alt="Logo"
          className="top-left-logo w-64 md:w-64  absolute top-4 left-4"
        /> */}

        <div className="w-full md:w-2/3 p-4 md:p-6" data-aos="fade-up">
          <div className="mb-6 text-center md:text-left">
            <h1 className="text-5xl md:text-5xl font-bold text-white">
              Key Benefits
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-200 mt-2">
              Importers & Traders
            </h2>
          </div>

          <div className="text-center md:text-left mb-6">
            <p className="text-slate-200 text-lg md:text-2xl font-bold px-2 md:px-0">
              EMPHASIZE TRANSPARENCY, TIME-SAVING, AND THE ABILITY TO AVOID
              HIDDEN COSTS.
            </p>
          </div>

          <section className="mb-6 space-y-4">
            <p className="text-white text-lg md:text-xl py-2 md:py-[15px] px-2 md:px-0">
              <strong className="text-slate-200 font-bold">
                Time & Effort Savings:
              </strong>{" "}
              With Qargoquote, you are enhancing the procurement department in
              your organization by expanding resources, saving significant time
              by having access to a wide network of both local and international
              logistics service providers. This enables you to receive multiple
              quotes for your inquiry in one place through simplified steps,
              eliminating the need to search and contact them individually.
            </p>
            <p className="text-white text-lg md:text-xl pb-2 md:pb-[15px] px-2 md:px-0">
              <strong className="text-slate-200 font-bold">
                Cost Savings:
              </strong>{" "}
              You will be able to compare multiple offers and select the most
              efficient option according to your priority, considering effective
              shipping options by shipping cost, transit time, payment method,
              and service provider quality rating.
            </p>
            <p className="text-white text-lg md:text-xl pb-2 md:pb-[15px] px-2 md:px-0">
              <strong className="text-slate-200 font-bold">
                Corruption Mitigation:
              </strong>{" "}
              Qargoquote's transparent system reduces the risk of biased
              decision-making and maintains procurement integrity.
            </p>
          </section>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
  <img
    src={logo1}
    alt="logo 1"
    className="w-4/5 md:w-full rotate-6 md:block hidden" // Hidden on mobile
    data-aos="fade-right"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-anchor-placement="top-bottom"
  />
  <img
    src={logo2}
    alt="logo 2"
    className="w-3/4 md:w-3/4 rotate-6 md:block hidden" // Hidden on mobile
    data-aos="fade-right"
    data-aos-delay="300"
    data-aos-duration="1000"
  />
  <img
    src={logo3}
    alt="logo 3"
    className="w-1/2 md:w-1/2 rotate-6 md:block hidden" // Hidden on mobile
    data-aos="fade-right"
    data-aos-delay="500"
    data-aos-duration="1000"
  />
</div>

      </div>
    </div>
  );
};

export default KeyBenefitsS;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pic3 from "../../assets/Logistics/pic3.png";
import Logo from "../../assets/q.png";
import "./LogisticsAndKey.css";

export const LogisticsIntro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    const handleScroll = () => {
      const logoElement = document.querySelector(".logo-container");
      const keyBenefitsLogo = document.querySelector(".top-left-logo");

      if (logoElement) {
        const rect = logoElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          logoElement.classList.add("scrolled");
          keyBenefitsLogo.classList.add("visible");
        } else {
          logoElement.classList.remove("scrolled");
          keyBenefitsLogo.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-rose-900 flex items-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-6 text-center font-sans text-white relative">
        <p
          className="text-lg sm:text-xl md:text-2xl font-semibold mb-6"
          data-aos="fade-in"
        >
          What if you could get instant access to a marketplace of logistics
          service providers, all in one place? Imagine comparing multiple
          quotes, evaluating service quality through transparent ratings, and
          selecting the best option—all within minutes!
        </p>

        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 mb-4"
          data-aos="fade-in"
        >
          Qargoquote is here to transform the way you manage logistics.
        </h2>

        <div
          className="text-base sm:text-lg md:text-xl text-white mb-6"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <p>No more phone calls</p>
          <p>No more endless follow-ups for quotations</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div
            className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img
              src={pic3}
              alt="Logistics"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-64 md:h-64 object-cover"
            />
          </div>

          <div
            className="md:w-1/2 flex flex-col items-center md:items-start justify-center md:mt-4"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium md:text-left mb-4">
              Now you can streamline the procurement process, save on costs,{" "}
              <br />
              and make informed decisions with ease.
            </p>
          </div>
        </div>

        <div className="logo-container" data-aos="fade-in">
          <img src={Logo} alt="Logo" className="logo w-64  sm:w-64  md:w-64  mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LogisticsIntro;

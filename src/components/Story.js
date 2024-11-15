import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/q.png";

export const Story = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="Our-Story"
      className="max-w-[1280px] mx-auto p-6 sm:p-10 space-y-10 md:space-y-16 lg:space-y-20"
    >
      <div className="flex justify-center" data-aos="fade-down">
        <img src={logo} alt="Logo" className="w-48 sm:w-64" />
      </div>

      <section
        className="flex flex-col lg:flex-row items-start lg:space-x-6 space-y-4 sm:space-y-6 lg:space-y-0 "
        data-aos="fade-up"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight lg:leading-none text-center lg:text-right flex-grow m-0 pt-0">
          The Story Behind Qargoquote
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 lg:pl-6 max-w-prose">
          The name <strong>Qargoquote</strong> comes from “Cargo Quote,”
          reflecting the platform’s core mission to simplify logistics
          procurement. But there’s more to it—the “Q” is a nod to Qatar, where
          the idea was born and where the platform is tailored to serve. By
          replacing “C” with “Q,” we created a name that not only sounds the
          same but also proudly represents its roots and purpose: a logistics
          solution made in Qatar, for Qatar to the world.
        </p>
      </section>

      <section
        className="flex flex-col lg:flex-row items-start lg:space-x-6 space-y-4 sm:space-y-6 lg:space-y-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="m-0 pt-0 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight lg:leading-none text-center lg:text-right flex-grow">
          Logo
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 lg:pl-6 max-w-prose">
          <strong>Our logo</strong> brings this story to life. The design
          features pyramid-shaped triangles inspired by the serrated edge of the
          Qatari flag, arranged to point inward toward the center. These
          pyramids symbolize the core of <strong>Qargoquote</strong>: a single,
          unified platform where all logistics needs come together. This central
          focus reinforces our goal to make logistics procurement seamless and
          accessible, placing everything you need in one place. The colors
          maroon and white reflect Qatar's national identity, underscoring our
          commitment to empowering local businesses.
        </p>
      </section>
      <section
        className="flex flex-col lg:flex-row items-start lg:space-x-6 space-y-4 sm:space-y-6 lg:space-y-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="m-0 pt-0 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight lg:leading-none text-center lg:text-right flex-grow">
          Vision
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 lg:pl-6 max-w-prose">
          <strong>Qargoquote</strong> embodies our vision to bring innovation,
          transparency, and efficiency to Qatar’s logistics market. It’s not
          just a name—it’s a statement of our commitment to empowering local
          businesses with world-class logistics solutions.
        </p>
      </section>
    </section>
  );
};

export default Story;

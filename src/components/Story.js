import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/q.png"; // Import your logo image

export const Story = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="Our-Story" className="max-w-[1280px] mx-auto p-10 space-y-16 md:space-y-20">
      {/* Centered Logo */}
      <div className="flex justify-center mb-10" data-aos="fade-down">
        <img src={logo} alt="Logo" className="w-64  " />
      </div>

      {/* Story Section */}
      <section
        className="flex flex-col md:flex-row items-start md:space-x-6 space-y-6 md:space-y-0"
        data-aos="fade-up"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-none pt-4">
          The Story Behind Qargoquote
        </h1>
        <p className="text-lg md:text-xl text-gray-700 md:pl-6">
          The name <strong>Qargoquote</strong> comes from “Cargo Quote,”
          reflecting the platform’s core mission to simplify logistics
          procurement. But there’s more to it—the “Q” is a nod to Qatar, where
          the idea was born and where the platform is tailored to serve. By
          replacing “C” with “Q,” we created a name that not only sounds the
          same but also proudly represents its roots and purpose: a logistics
          solution made in Qatar, for Qatar to the world.
        </p>
      </section>

      {/* Vision Section */}
      <section
        className="flex flex-col md:flex-row items-start md:space-x-6 space-y-6 md:space-y-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-none pt-4">
          Vision
        </h1>
        <p className="text-lg md:text-xl text-gray-700 md:pl-6">
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
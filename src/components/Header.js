import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // import icon from react-icons

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling behavior
    const handleSmoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <header>
      <div className="bg-rose-900 text-white min-h-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-center md:justify-end px-4">
          <ul className="flex text-xs sm:text-[0.75rem] space-x-4 m-2 whitespace-nowrap">
            <li className="after:content-['|'] after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="#Qargoquote">What is Qargoquote</a>
            </li>
            <li className="after:content-['|'] after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="/">Sign Up</a>
            </li>
            <li className="after:content-['|'] after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="/">Sign In</a>
            </li>
            <li
              className="relative hover:cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a
                href="#Subscribe"
                onClick={(e) => e.preventDefault()}
                className="flex items-center"
              >
                Solutions
                <FaChevronDown className="ml-1" />
              </a>
              <div
                id="dropdownNavbar"
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 p-4 md:p-0`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a
                      href="#Service"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Service providers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Importer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Importers and traders
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

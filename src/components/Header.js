import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = ({ openForm }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/${targetId}`);
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header>
      <div className="bg-rose-900 text-white min-h-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-center md:justify-end px-2 sm:px-4">
          <ul className="flex text-[0.65rem] sm:text-xs md:text-sm lg:text-base space-x-2 sm:space-x-3 md:space-x-4 m-1 sm:m-2 lg:m-4 whitespace-nowrap">
            <li className="after:content-['|'] after:ml-2 sm:after:ml-3 md:after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a
                href="#Qargoquote"
                onClick={(e) => handleSmoothScroll(e, "#Qargoquote")}
              >
                What is Qargoquote
              </a>
            </li>

            <li
              className="relative hover:cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a
                href="#other"
                onClick={(e) => handleSmoothScroll(e, "#other")}
                className="flex items-center after:content-['|'] after:ml-2 sm:after:ml-3 md:after:ml-4 last:after:content-['']"
              >
                Solutions
                <FaChevronDown className="ml-1" />
              </a>
              <div
                id="dropdownNavbar"
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 sm:w-44 absolute top-full left-[calc(50%-50px)] transform -translate-x-1/2 md:left-0 md:translate-x-0 p-2 sm:p-4`}
              >
                <ul className="py-1 text-[0.65rem] sm:text-xs md:text-sm text-gray-700">
                  <li>
                    <a
                      href="#Service"
                      onClick={(e) => handleSmoothScroll(e, "#Service")}
                      className="block px-2 py-1 sm:px-4 sm:py-2 hover:bg-gray-100"
                    >
                      Service providers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Importer"
                      onClick={(e) => handleSmoothScroll(e, "#Importer")}
                      className="block px-2 py-1 sm:px-4 sm:py-2 hover:bg-gray-100"
                    >
                      Importers and traders
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/SOP"
                      className="block px-2 py-1 sm:px-4 sm:py-2 hover:bg-gray-100"
                    >
                      SOP
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="after:content-['|'] after:ml-2 sm:after:ml-3 md:after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="#FAQ" onClick={(e) => handleSmoothScroll(e, "#FAQ")}>
                FAQ
              </a>
            </li>
            <li className="after:content-['|'] after:ml-2 sm:after:ml-3 md:after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="/">Register</a>
            </li>
            <li className="after:content-['|'] after:ml-2 sm:after:ml-3 md:after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="/">Login</a>
            </li>
            <li className="after:content-['|'] after:ml-2 sm:after:ml-3 md:after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  openForm();
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

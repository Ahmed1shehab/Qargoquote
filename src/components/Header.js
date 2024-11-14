import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
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
        <div className="max-w-[1280px] mx-auto flex items-center justify-center md:justify-end px-4">
          <ul className="flex text-xs sm:text-[0.75rem] space-x-4 m-2 whitespace-nowrap">
            <li className="after:content-['|'] after:ml-4 last:after:content-[''] hover:cursor-pointer">
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
                className="flex items-center after:content-['|'] after:ml-4 last:after:content-['']"
              >
                Solutions
                <FaChevronDown className="ml-1" />
              </a>
              <div
                id="dropdownNavbar"
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full left-[calc(50%-50px)] transform -translate-x-1/2 md:left-0 md:translate-x-0 p-4 md:p-0`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a
                      href="#Service"
                      onClick={(e) => handleSmoothScroll(e, "#Service")}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Service providers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Importer"
                      onClick={(e) => handleSmoothScroll(e, "#Importer")}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Importers and traders
                    </a>
                  </li>
                  <li>
                    <Link to="/SOP" className="block px-4 py-2 hover:bg-gray-100">
                      SOP
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="after:content-['|'] after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="/">Register</a>
            </li>
            <li className="after:content-['|'] after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

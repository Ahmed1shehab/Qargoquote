import q from "../assets/qq.png";
import Qatar from "../assets/qatar.png";

export const Welcome = () => {
  return (
    <section id="Welcome" className="text-center px-4 sm:px-6 md:px-0">
      {/* Title Section */}
      <h1 className="fade-in text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold mb-">
        Welcome to
      </h1>

      {/* Logo and Qargoquote Text Section */}
      <div className="flex flex-col items-center md:flex-row md:items-center justify-center space-x-0 md:space-x-4 py-6 md:py-12 lg:py-20">
        <img
          src={q}
          alt="Logo"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flip mb-4 md:mb-0"
        />
        <h3 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-500 pl-0 md:pl-6 lg:pl-10 fade-in-delay">
          Qargoquote
        </h3>
      </div>

      {/* Subtitle Section */}
      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal fade-in-span block md:inline">
        The First B2B Online Logistics Business Solution of its kind in Qatar
      </span>

      {/* Footer Section with "Made in Qatar" and Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 sm:px-6 md:px-0">
        {/* Made in Qatar Section */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            src={Qatar}
            alt="Qatar"
            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
          />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg">
            Made in Qatar
          </span>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col space-y-2 items-center md:items-end">
          <button
            type="button"
            className="py-2.5 px-5 text-sm md:text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            LEARN MORE
          </button>
          <button
            type="button"
            className="py-2.5 px-5 text-sm md:text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

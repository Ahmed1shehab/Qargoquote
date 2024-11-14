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
          className="w-20 h-16 md:w-24 md:h-20 lg:w-28 lg:h-24 flip mb-4 md:mb-0"
        />
        <h3 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-500 pl-0 md:pl-6 lg:pl-10 fade-in-delay head2 slide-in-left">
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
      </div>
    </section>
  );
};

export default Welcome;


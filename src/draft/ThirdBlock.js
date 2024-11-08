import React, { useEffect, useRef } from "react";
import mobileScreen from "../assets/mobileScreen.png";
import "./ThirdBlock.css";

export const ThirdBlock = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    
    setTimeout(() => {
      leftColumnRef.current.classList.add("slideInLeft");
      rightColumnRef.current.classList.add("slideInRight");
    }, 100); 
  }, []);

  return (
    <div className="flex h-[500px] bg-rose-900">
    
      <div
        ref={leftColumnRef}
        className="flex-1 p-5 text-white pt-[120px] pl-[140px] opacity-0" 
      >
        <h2 className="text-2xl font-semibold mb-4">
          Innovative solutions simplifying procurement of logistics services
        </h2>
        <p className="text-base block mb-16">
          Cloud-based platform offering digital logistics procurement solutions
          that connects Importers and Exporters with Logistics Service Providers
          and Cargo Insurance brokers.
        </p>
        <span className="block pt-4"> 
          Powered by AI, ML, & Advanced Analytics.
        </span>
        <div className="mt-8">
        <button
                type="button"
                className="focus:outline-none  text-gray-800 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2 mb-2 dark:focus:ring-yellow-900">
                Start your digital journey
              </button>
        </div>
      </div>

     
      <div
        ref={rightColumnRef}
        className="flex-1 flex items-end opacity-0" 
      >
        <img
          src={mobileScreen}
          alt="Logistics Solution"
          className="w-full h-auto max-h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

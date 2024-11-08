import React, { useEffect } from "react";
import "./FirstBlock.css";
import LogisEye from "../assets/Fblock/LogisEye.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FirstBlock = () => {
  useEffect(() => {

    const lines = document.querySelectorAll(".line");
    let currentIndex = 0;

    function animateLine() {
      // Hide all lines initially
      lines.forEach(line => {
        line.style.display = "none";
        line.style.animation = "";
      });

      // Show the current line and apply typing and erasing animation
      const currentLine = lines[currentIndex];
      currentLine.style.display = "inline-block";
      currentLine.style.animation = "typing 2s steps(30, end) forwards, erasing 2s steps(30, end) 5s forwards";

      // Move to the next line after the animation completes
      currentIndex = (currentIndex + 1) % lines.length;
    }

    // Start the animation every 7 seconds (2s typing + 5s erasing)
    const intervalId = setInterval(animateLine, 7000);

    // Start the first animation immediately
    animateLine();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className="backImage">
        <div className="flex">
          <div className="w-1/2 max-w-[1280px] mx-auto pt-[80px] pl-[140px]">
            <div className="text-white text-3xl font-bold">
              <h1>Driving Digital Transformation</h1>
              <h2>in Logistics Procurement</h2>
            </div>

            <div className="animated-text text-rose-800	" >
              <span className="line">Route & track shipments</span>
              <span className="line">Live dashboard & analytics</span>
              <span className="line">Marketplace for freight procurement</span>
              <span className="line">Compare instant rates</span>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="focus:outline-none  text-gray-800 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2 mb-2 dark:focus:ring-yellow-900">
                Start your digital journey
              </button>
              <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />
            </div>
          </div>

          <div className="w-1/2 flex justify-end p-4">
            <img src={LogisEye} className="w-4/5" alt="LogisEye" />
          </div>
        </div>
      </div>
    </main>
  );
};

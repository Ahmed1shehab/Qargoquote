import React, { useEffect, useRef } from "react";
import "./SecondBlock.css"; // Import the CSS file

export const SecondBlock = () => {
  const h2Ref = useRef(null);
  const spans = useRef([]);

  useEffect(() => {
    // Apply animation class to the <h2> with a delay
    setTimeout(() => {
      if (h2Ref.current) h2Ref.current.classList.add("slideInLeft");
    }, 100);

    // Apply animation classes to each span with staggered delays
    spans.current.forEach((span, index) => {
      setTimeout(() => {
        if (span) span.classList.add("fadeInRight");
      }, 100 + index * 100); // Increment delay for each span
    });
  }, []);

  return (
    <div className="text-center max-w-[1111px] mx-auto">
      <h2
        ref={h2Ref}
        className="text-xl font-semibold py-6 opacity-0" // Start hidden
        data-id="2"
        data-animation="slideInLeft"
        data-animation-delay="100ms"
        data-animated="true"
      >
        Your Imports & Exports Made Easy
      </h2>
      <div className="flex justify-between py-4">
        {[
          { text1: "Instant quotes in", text2: "30", text3: "Seconds" },
          { text1: "Save", text2: "5% -15%", text3: "in costs" },
          { text1: "Access to", text2: "1200+", text3: "trade lanes" },
          { text1: "Ship to", text2: "40+", text3: "countries" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 text-slate-700 text-base">
            <span ref={(el) => (spans.current[index * 3] = el)} className="opacity-0">
              {item.text1}
            </span>
            <span ref={(el) => (spans.current[index * 3 + 1] = el)} className="font-bold text-3xl opacity-0">
              {item.text2}
            </span>
            <span ref={(el) => (spans.current[index * 3 + 2] = el)} className="opacity-0">
              {item.text3}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

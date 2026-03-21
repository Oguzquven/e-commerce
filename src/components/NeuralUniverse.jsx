// src/components/NeuralUniverse.jsx
import React, { useEffect, useRef, useState } from "react";
import images2 from "../assets/images/images2.png";

const NeuralUniverse = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white overflow-hidden lg:h-screen lg:min-h-[600px]"
    >
      <div className="flex flex-col-reverse lg:flex-row h-full">
        {/* Sol taraf - Görsel */}
        <div
          className={`w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden flex items-end transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 lg:translate-x-0"
              : "opacity-0 translate-y-10 lg:-translate-x-20"
          }`}
        >
          <img
            src={images2}
            alt="Neural Universe"
            className="w-full h-full object-cover object-top lg:object-cover transition-transform duration-700 hover:scale-105 lg:hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Sağ taraf - İçerik */}
        <div
          className={`w-full lg:w-1/2 min-h-[50vh] lg:h-full flex items-center justify-center px-6 py-12 lg:py-0 lg:px-16 transition-all duration-1000 delay-300 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 lg:translate-x-0"
              : "opacity-0 -translate-y-10 lg:translate-x-20"
          }`}
        >
          <div className="flex flex-col gap-4 max-w-md text-center lg:text-left items-center lg:items-start">
            {/* Tag */}
            <span
              className="text-[#BDBDBD] font-bold uppercase tracking-wide"
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "0.1px",
              }}
            >
              SUMMER 2020
            </span>

            {/* Başlık */}
            <h2
              className="text-[#252B42] font-bold"
              style={{
                fontSize: "clamp(24px, 6vw, 40px)",
                lineHeight: "1.25",
                letterSpacing: "0.2px",
              }}
            >
              Part of the Neural Universe
            </h2>

            {/* Açıklama */}
            <p
              className="text-[#737373]"
              style={{
                fontSize: "clamp(14px, 4vw, 20px)",
                lineHeight: "1.5",
                letterSpacing: "0.2px",
              }}
            >
              We know how large objects will act, but things on a small scale.
            </p>

            {/* Butonlar */}
            <div className="flex flex-col w-full sm:flex-row gap-3 mt-6 sm:w-auto">
              {/* BUY NOW */}
              <button
                className="w-full sm:w-auto group relative px-10 py-4 bg-[#2DC071] text-white font-bold rounded overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "0.2px",
                }}
              >
                <span className="relative z-10">BUY NOW</span>
                <div className="absolute inset-0 bg-[#25a060] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              {/* READ MORE */}
              <button
                className="w-full sm:w-auto group px-10 py-4 border-2 border-[#2DC071] text-[#2DC071] font-bold rounded transition-all duration-300 hover:bg-[#2DC071] hover:text-white hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "0.2px",
                }}
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniverse;

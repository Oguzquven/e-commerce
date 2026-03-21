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
      <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-0 lg:h-full">
        {/* Üst kısım (Mobil) / Sol taraf (Desktop) - Görsel */}
        <div
          className={`w-full lg:w-1/2 h-[44vh] lg:h-full relative overflow-hidden flex items-center justify-center transition-all duration-1000 ease-out order-2 lg:order-1 ${
            isVisible
              ? "opacity-100 translate-y-0 lg:translate-x-0"
              : "opacity-0 translate-y-10 lg:-translate-x-20"
          }`}
        >
          <img
            src={images2}
            alt="Neural Universe"
            className="w-full h-full object-cover object-[70%_top] lg:object-cover transition-transform duration-700 hover:scale-105 lg:hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Alt kısım (Mobil) / Sağ taraf (Desktop) - İçerik */}
        <div
          className={`w-full lg:w-1/2 flex-none lg:h-full flex items-center justify-center px-6 pt-16 pb-8 lg:py-0 lg:px-16 transition-all duration-1000 delay-300 ease-out order-1 lg:order-2 ${
            isVisible
              ? "opacity-100 translate-y-0 lg:translate-x-0"
              : "opacity-0 -translate-y-10 lg:translate-x-20"
          }`}
        >
          <div className="flex flex-col gap-5 text-center items-center lg:text-left lg:items-start lg:max-w-md">
            {/* Tag */}
            <span
              className="text-[#BDBDBD] font-bold uppercase tracking-wide"
              style={{
                fontSize: "clamp(14px, 4vw, 14px)",
                lineHeight: "24px",
                letterSpacing: "0.1px",
              }}
            >
              SUMMER 2020
            </span>

            {/* Başlık - Mobil: 3 satır, Desktop: 1 satır */}
            <h2
              className="text-[#252B42] font-bold"
              style={{
                fontSize: "clamp(32px, 8vw, 40px)",
                lineHeight: "1.15",
                letterSpacing: "0.2px",
              }}
            >
              <span className="lg:hidden">
                Part of the
                <br />
                Neural
                <br />
                Universe
              </span>
              <span className="hidden lg:inline">
                Part of the Neural Universe
              </span>
            </h2>

            {/* Açıklama - Mobil: 3 satır, Desktop: 2 satır (will act, den sonra) */}
            <p
              className="text-[#737373]"
              style={{
                fontSize: "clamp(18px, 5vw, 20px)",
                lineHeight: "1.5",
                letterSpacing: "0.2px",
              }}
            >
              <span className="lg:hidden">
                We know how large
                <br />
                objects will act, but
                <br />
                things on a small scale.
              </span>
              <span className="hidden lg:inline">
                We know how large objects will act,
                <br />
                but things on a small scale.
              </span>
            </p>

            {/* Butonlar - Mobil: Dar ortalı, Desktop: Geniş yatay */}
            <div className="flex flex-col items-center gap-3 mt-6 lg:flex-row lg:items-start lg:gap-3">
              {/* BUY NOW */}
              <button
                className="w-full sm:w-auto group relative px-10 py-4 bg-[#23A6F0] lg:bg-[#2DC071] text-white font-bold rounded overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "0.2px",
                }}
              >
                <span className="relative z-10">BUY NOW</span>
                <div className="absolute inset-0 bg-[#1a8ad4] lg:bg-[#25a060] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              {/* Learn More / READ MORE */}
              <button
                className="w-auto px-10 py-3 lg:w-auto lg:px-10 lg:py-4 border-2 border-[#23A6F0] lg:border-[#2DC071] text-[#23A6F0] lg:text-[#2DC071] font-bold rounded transition-all duration-300 hover:bg-[#23A6F0] lg:hover:bg-[#2DC071] hover:text-white hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "0.2px",
                }}
              >
                <span className="lg:hidden">Learn More</span>
                <span className="hidden lg:inline">READ MORE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniverse;

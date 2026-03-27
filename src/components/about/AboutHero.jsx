// src/components/about/AboutHero.jsx
import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="w-full bg-white min-h-[calc(100vh-108px)] lg:h-[calc(100vh-108px)] flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-8 h-full py-8 lg:py-0">
          {/* Left Content */}
          <div className="w-full lg:w-[45%] text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            <span className="text-[#252B42] text-sm font-bold uppercase tracking-wider mb-4 block">
              ABOUT COMPANY
            </span>
            <h1 className="text-[#252B42] text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              ABOUT US
            </h1>
            <p className="text-[#737373] text-sm leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#23A6F0] text-white text-sm font-bold rounded hover:bg-[#1a8cd4] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer transform"
            >
              Get Quote Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%] relative flex items-end justify-center h-[400px] sm:h-[500px] lg:h-full order-1 lg:order-2">
            <div className="relative flex justify-center items-end w-full h-full">
              {/* Büyük pembe daire arka plan */}
              <div className="absolute bottom-[10%] lg:bottom-[15%] w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[480px] lg:h-[480px] bg-[#FFE9EA] rounded-full animate-scale-in" />

              {/* Dekoratif küçük daireler */}
              <div className="absolute top-[25%] lg:top-[30%] right-[5%] lg:right-[1%] w-4 h-4 lg:w-5 lg:h-5 bg-[#8B5CF6] rounded-full animate-pop-in delay-100" />
              <div className="absolute top-[10%] lg:bottom-[80%] left-[5%] lg:left-[1%] w-16 h-16 lg:w-20 lg:h-20 bg-[#FFE9EA] rounded-full animate-pop-in delay-200" />
              <div className="absolute bottom-[30%] lg:bottom-[20%] left-[5%] lg:left-[1%] w-4 h-4 lg:w-5 lg:h-5 bg-[#8B5CF6] rounded-full animate-pop-in delay-300" />
              <div className="absolute top-[50%] lg:top-[55%] right-[3%] lg:right-[0%] w-8 h-8 lg:w-10 lg:h-10 bg-[#FFE9EA] rounded-full animate-pop-in delay-400" />
              
              {/* Ana görsel */}
              <img
                src="/images/images.png"
                alt="About us"
                className="relative z-10 w-auto max-w-[260px] sm:max-w-[320px] lg:max-w-[450px] h-auto max-h-[70vh] lg:max-h-[85vh] object-contain drop-shadow-lg animate-slide-up hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
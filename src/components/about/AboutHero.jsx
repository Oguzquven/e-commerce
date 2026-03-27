// src/components/about/AboutHero.jsx
import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-[#252B42] text-sm font-bold uppercase tracking-wider mb-4 block">
              About Company
            </span>
            <h1 className="text-[#252B42] text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              ABOUT US
            </h1>
            <p className="text-[#737373] text-sm leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#23A6F0] text-white text-sm font-bold rounded hover:bg-[#1a8cd4] transition-colors"
            >
              Get Quote Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Pembe daire arka plan */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#FFE9EA] rounded-full -z-10" />
              <img
                src="/images/about-hero.png"
                alt="Shopping woman"
                className="w-full max-w-md mx-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

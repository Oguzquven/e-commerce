// src/components/WorkWithUs.jsx
import React from "react";

const WorkWithUs = () => {
  return (
    <section className="w-full bg-[#2A7CC7]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content - Mavi arka plan */}
          <div className="w-full lg:w-1/2 py-16 lg:py-24 px-6 sm:px-12 lg:px-20 xl:px-28">
            <div className="max-w-md">
              {/* Label */}
              <span className="text-white text-sm font-bold uppercase tracking-wider mb-4 block">
                WORK WITH US
              </span>

              {/* Title */}
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Now Let's grow Yours
              </h2>

              {/* Description */}
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>

              {/* Button */}
              <button className="px-8 py-3 border border-white text-white text-sm font-bold rounded hover:bg-white hover:text-[#2A7CC7] transition-all duration-300">
                Button
              </button>
            </div>
          </div>

          {/* Right Image - Pembe arka planlı görsel */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[636px]">
            <img
              src="/images/contact.jpg"
              alt="Work with us"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;

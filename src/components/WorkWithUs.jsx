// src/components/WorkWithUs.jsx
import React from "react";

const WorkWithUs = () => {
  return (
    <section className="w-full bg-[#2A7CC7] h-[calc(100vh-108px)]">
      <div className="h-full flex flex-col lg:flex-row items-stretch">
        {/* Left Content - Masaüstünde solda, Mobilde altta */}
        <div
          className="w-full lg:w-1/2 h-[50vh] lg:h-full py-12 sm:py-16 lg:py-24 px-6 sm:px-12 lg:px-20 xl:px-28 
                        flex items-center justify-center order-2 lg:order-1 relative overflow-hidden group"
        >
          {/* Arkaplan animasyonu */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#2A7CC7] via-[#3b8fd9] to-[#2A7CC7] 
                          bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 
                          transition-opacity duration-500"
          />

          <div className="max-w-md relative z-10 text-center lg:text-left">
            {/* Label */}
            <span
              className="text-white text-sm font-bold uppercase tracking-wider mb-4 block 
                             transform translate-y-2 opacity-0 group-hover:translate-y-0 
                             group-hover:opacity-100 transition-all duration-500 delay-100"
            >
              WORK WITH US
            </span>

            {/* Title */}
            <h2
              className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight
                           transform transition-all duration-500 group-hover:translate-x-2"
            >
              Now Let's grow Yours
            </h2>

            {/* Description */}
            <p
              className="text-white/80 text-sm leading-relaxed mb-6 lg:mb-8
                          transform transition-all duration-500 delay-75 group-hover:translate-x-2"
            >
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>

            {/* Button */}
            <button
              className="px-6 sm:px-8 py-3 border border-white text-white text-sm font-bold rounded 
                               relative overflow-hidden group/btn transition-all duration-300
                               hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 cursor-pointer"
            >
              <span className="relative z-10 group-hover/btn:text-[#2A7CC7] transition-colors duration-300">
                Button
              </span>
              <div
                className="absolute inset-0 bg-white transform -translate-x-full 
                              group-hover/btn:translate-x-0 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Right Image - Masaüstünde sağda, Mobilde üstte */}
        <div
          className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden group 
                        order-1 lg:order-2"
        >
          <img
            src="/images/contact.jpg"
            alt="Work with us"
            className="w-full h-full object-cover object-[65%_center] lg:object-[65%_center] 
                       transition-transform duration-700 ease-out 
                       group-hover:scale-110 cursor-pointer"
          />
          {/* Overlay gradient hover efekti */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#2A7CC7]/30 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default WorkWithUs;

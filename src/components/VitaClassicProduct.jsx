// src/components/VitaClassicProduct.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vitaImage from "../assets/images/images.png";

const VitaClassicProducts = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [0, 1];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setSectionHeight(`${window.innerHeight}px`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section
      className="w-full relative bg-[#23856D] flex items-center overflow-hidden"
      style={{
        height: sectionHeight,
        minHeight: "600px",
      }}
    >
      {/* Slides Container */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            {/* Desktop Layout */}
            <div className="hidden md:flex w-full h-full relative max-w-[1440px] mx-auto">
              <div
                className={`w-[45%] flex items-center pl-[80px] lg:pl-[120px] transition-all duration-700 delay-300 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="max-w-[550px]">
                  <p className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-6">
                    SUMMER 2020
                  </p>
                  <h2 className="text-white text-5xl lg:text-[64px] font-bold mb-8 leading-[1.1]">
                    Vita Classic
                    <br />
                    Product
                  </h2>
                  <p className="text-white/80 text-base mb-10 leading-relaxed max-w-[400px]">
                    We know how large objects will act, We know how are objects
                    will act, We know
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="text-white text-3xl font-bold">
                      $16.48
                    </span>
                    <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold px-10 py-4 rounded transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[55%] relative h-full flex items-end justify-center pr-[60px]">
                <img
                  src={vitaImage}
                  alt="Vita Classic Product"
                  className={`h-[90%] w-auto object-contain transition-all duration-1000 ${
                    index === currentSlide
                      ? "scale-100 opacity-100"
                      : "scale-110 opacity-0"
                  }`}
                />
              </div>
            </div>

            {/* Mobile Layout - Son görseldeki gibi BİREBİR */}
            <div className="flex md:hidden flex-col items-center text-center w-full h-full">
              {/* Yazılar üstte - 3 paragraf birebir */}
              <div
                className={`flex flex-col items-center justify-center pt-12 px-6 transition-all duration-700 delay-200 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <p className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  SUMMER 2020
                </p>
                <h2 className="text-white text-3xl font-bold mb-4 leading-tight">
                  Vita Classic
                  <br />
                  Product
                </h2>
                <p className="text-white/80 text-sm mb-2 leading-relaxed max-w-[260px]">
                  We know how large objects
                </p>
                <p className="text-white/80 text-sm mb-2 leading-relaxed max-w-[260px]">
                  will act, but things on a
                </p>
                <p className="text-white/80 text-sm mb-4 leading-relaxed max-w-[260px]">
                  small scale.
                </p>

                {/* Fiyat ortada */}
                <span className="text-white text-xl font-bold mb-3 block">
                  $16.48
                </span>
              </div>

              {/* Oklar ve Buton - Bitişik çubukların yerine */}
              <div
                className={`flex items-center justify-center gap-4 mb-4 transition-all duration-700 delay-300 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <button
                  onClick={prevSlide}
                  className="text-white/60 hover:text-white transition-colors duration-300 p-2"
                >
                  <ChevronLeft size={28} strokeWidth={1.5} />
                </button>

                <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold px-8 py-3 rounded transition-all duration-300 hover:scale-105 cursor-pointer text-xs">
                  ADD TO CART
                </button>

                <button
                  onClick={nextSlide}
                  className="text-white/60 hover:text-white transition-colors duration-300 p-2"
                >
                  <ChevronRight size={28} strokeWidth={1.5} />
                </button>
              </div>

              {/* Görsel - Kalan tüm alanı kaplasın */}
              <div
                className={`flex-1 w-full flex items-end justify-center transition-all duration-1000 ${index === currentSlide ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
              >
                <img
                  src={vitaImage}
                  alt="Vita Classic Product"
                  className="object-cover w-full h-full object-top"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Desktop Navigation */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 z-20 hover:scale-110"
      >
        <ChevronLeft size={40} strokeWidth={1.5} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 z-20 hover:scale-110"
      >
        <ChevronRight size={40} strokeWidth={1.5} />
      </button>
      {/* Desktop Pagination - Bitişik çubuklar, ortada */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-0 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all duration-500 ${
              index === currentSlide
                ? "w-16 bg-white"
                : "w-16 bg-white/40 hover:bg-white/60"
            }`} // rounded-l-full ve rounded-r-full kaldırıldı
          />
        ))}
      </div>
    </section>
  );
};

export default VitaClassicProducts;

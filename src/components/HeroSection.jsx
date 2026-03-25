import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heroHeight, setHeroHeight] = useState("600px");

  const slides = [0, 1];

  useEffect(() => {
    const calculateHeight = () => {
      const header = document.getElementById("main-header");
      const headerHeight = header ? header.offsetHeight : 0;
      const windowHeight = window.innerHeight;
      setHeroHeight(`${windowHeight - headerHeight}px`);
    };
    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    const timeout = setTimeout(calculateHeight, 100);
    return () => {
      window.removeEventListener("resize", calculateHeight);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setProgress(0);
    const duration = 5000;
    const progressInterval = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 100 : prev + 100 / (duration / 100),
      );
    }, 100);
    const interval = setInterval(() => nextSlide(), duration);
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
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
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#00BCD4",
        minHeight: isMobile ? "600px" : "500px",
        height: heroHeight,
      }}
    >
      <div className="absolute inset-0 w-full h-full">
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
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src="/images/hero-woman.jpg"
                alt="New Collection"
                className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
                  index === currentSlide ? "scale-100" : "scale-110"
                }`}
                style={{
                  objectPosition: isMobile ? "75% center" : "center top",
                }}
              />
            </div>

            {isMobile && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/70 via-cyan-500/50 to-transparent z-[1]" />
            )}

            <div className="relative z-10 w-full h-full flex items-center">
              <div
                className={`transition-all duration-700 delay-300 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-100 translate-y-8"
                }`}
                style={{
                  marginLeft: isMobile ? "auto" : "clamp(40px, 10vw, 197px)",
                  marginRight: isMobile ? "auto" : "0",
                  paddingLeft: isMobile ? "20px" : "0",
                  paddingRight: isMobile ? "20px" : "0",
                  textAlign: isMobile ? "center" : "left",
                  maxWidth: isMobile ? "100%" : "600px",
                }}
              >
                <p
                  className="text-white font-bold uppercase tracking-wider mb-4"
                  style={{
                    fontSize: isMobile ? "14px" : "16px",
                    lineHeight: "24px",
                    textShadow: isMobile ? "0 1px 3px rgba(0,0,0,0.3)" : "none",
                  }}
                >
                  Summer 2020
                </p>
                <h2
                  className="text-white font-bold mb-6 leading-tight"
                  style={{
                    fontSize: isMobile ? "40px" : "clamp(40px, 5vw, 58px)",
                    lineHeight: isMobile ? "48px" : "1.2",
                    textShadow: isMobile ? "0 2px 6px rgba(0,0,0,0.3)" : "none",
                  }}
                >
                  {isMobile ? (
                    <>
                      NEW
                      <br />
                      COLLECTION
                    </>
                  ) : (
                    "NEW COLLECTION"
                  )}
                </h2>
                <p
                  className="text-white mb-8 leading-relaxed"
                  style={{
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "24px" : "30px",
                    textShadow: isMobile ? "0 1px 3px rgba(0,0,0,0.3)" : "none",
                  }}
                >
                  We know how large objects will act,
                  {isMobile ? " " : <br />}
                  but things on a small scale.
                </p>
                <button
                  className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold rounded transition-all duration-300 hover:scale-105 hover:shadow-lg uppercase tracking-wider"
                  style={{
                    padding: "15px 40px",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-200 transition-all duration-300 hover:scale-110 hover:-translate-x-1"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-200 transition-all duration-300 hover:scale-110 hover:translate-x-1"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-16 transition-all duration-500 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-20">
        <div
          className="h-full bg-white/50 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;

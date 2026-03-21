import { useEffect, useState, useRef } from "react";
import heroImage from "../assets/images/hero-woman.jpg";
import menImage from "../assets/images/MEN.jpg";
import womenImage from "../assets/images/WOMEN.jpg";
import accessoriesImage from "../assets/images/ACCESSORIES.jpg";
import kidsImage from "../assets/images/KIDS.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BestsellerProducts from "../components/BestsellerProducts";
import VitaClassicProduct from "../components/VitaClassicProduct";
import NeuralUniverse from "../components/NeuralUniverse";
import FeaturedPosts from "../components/FeaturedPosts";

function HomePage() {
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
      const newHeight = windowHeight - headerHeight;
      setHeroHeight(`${newHeight}px`);
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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setProgress(0);
    const duration = 5000;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (duration / 100);
      });
    }, 100);

    const interval = setInterval(() => {
      nextSlide();
    }, duration);

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
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
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
                  src={heroImage}
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
                      textShadow: isMobile
                        ? "0 1px 3px rgba(0,0,0,0.3)"
                        : "none",
                    }}
                  >
                    Summer 2020
                  </p>
                  <h2
                    className="text-white font-bold mb-6 leading-tight"
                    style={{
                      fontSize: isMobile ? "40px" : "clamp(40px, 5vw, 58px)",
                      lineHeight: isMobile ? "48px" : "1.2",
                      textShadow: isMobile
                        ? "0 2px 6px rgba(0,0,0,0.3)"
                        : "none",
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
                      textShadow: isMobile
                        ? "0 1px 3px rgba(0,0,0,0.3)"
                        : "none",
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

      {/* EDITOR'S PICK SECTION */}
      <section className="bg-white">
        <div
          className="mx-auto px-4"
          style={{
            maxWidth: "1050px",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#252B42] mb-2 tracking-wide">
              EDITOR'S PICK
            </h3>
            <p className="text-[#737373] text-sm">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="hidden lg:flex gap-4 justify-center">
            <div
              className="relative group cursor-pointer overflow-hidden flex-shrink-0"
              style={{ width: "510px", height: "500px" }}
            >
              <img
                src={menImage}
                alt="MEN"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <button className="absolute bottom-6 left-6 bg-white px-8 py-3 text-sm font-bold text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors duration-300">
                MEN
              </button>
            </div>

            <div
              className="relative group cursor-pointer overflow-hidden flex-shrink-0"
              style={{ width: "240px", height: "500px" }}
            >
              <img
                src={womenImage}
                alt="WOMEN"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <button className="absolute bottom-6 left-6 bg-white px-8 py-3 text-sm font-bold text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors duration-300">
                WOMEN
              </button>
            </div>

            <div
              className="flex flex-col gap-4 flex-shrink-0"
              style={{ width: "240px", height: "500px" }}
            >
              <div
                className="relative group cursor-pointer overflow-hidden"
                style={{ width: "240px", height: "242px" }}
              >
                <img
                  src={accessoriesImage}
                  alt="ACCESSORIES"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <button className="absolute bottom-4 left-4 bg-white px-6 py-2 text-xs font-bold text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors duration-300">
                  ACCESSORIES
                </button>
              </div>

              <div
                className="relative group cursor-pointer overflow-hidden"
                style={{ width: "240px", height: "242px" }}
              >
                <img
                  src={kidsImage}
                  alt="KIDS"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <button className="absolute bottom-4 left-4 bg-white px-6 py-2 text-xs font-bold text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors duration-300">
                  KIDS
                </button>
              </div>
            </div>
          </div>

          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group cursor-pointer overflow-hidden h-[300px] sm:h-[400px]">
              <img
                src={menImage}
                alt="MEN"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <button className="absolute bottom-6 left-6 bg-white px-8 py-3 text-sm font-bold text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors duration-300">
                MEN
              </button>
            </div>

            <div className="relative group cursor-pointer overflow-hidden h-[300px] sm:h-[400px]">
              <img
                src={womenImage}
                alt="WOMEN"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <button className="absolute bottom-6 left-6 bg-white px-8 py-3 text-sm font-bold text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors duration-300">
                WOMEN
              </button>
            </div>

            <div className="relative group cursor-pointer overflow-hidden h-[200px] sm:h-[250px]">
              <img
                src={accessoriesImage}
                alt="ACCESSORIES"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <button className="absolute bottom-4 left-4 bg-white px-6 py-2 text-xs font-bold text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors duration-300">
                ACCESSORIES
              </button>
            </div>

            <div className="relative group cursor-pointer overflow-hidden h-[200px] sm:h-[250px]">
              <img
                src={kidsImage}
                alt="KIDS"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <button className="absolute bottom-4 left-4 bg-white px-6 py-2 text-xs font-bold text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors duration-300">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </section>

      <BestsellerProducts />
      <VitaClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;

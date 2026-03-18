import { useEffect, useState } from "react";
import heroImage from "../assets/images/hero-woman.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const calculateHeight = () => {
      const header = document.getElementById("main-header");
      if (header) {
        const headerHeight = header.offsetHeight;
        setHeroHeight(`calc(100vh - ${headerHeight}px)`);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - Görsel tam alanı kaplıyor */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          height: heroHeight,
          backgroundColor: "#00BCD4",
        }}
      >
        {/* Arka Plan Görseli - Kadının yüzü görünecek şekilde */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImage}
            alt="New Collection"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }} // Görseli aşağı kaydır
          />
        </div>

        {/* Sol Ok */}
        <button className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-200 transition-colors">
          <ChevronLeft size={32} md:size={40} lg:size={48} strokeWidth={1} />
        </button>

        {/* Sağ Ok */}
        <button className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-200 transition-colors">
          <ChevronRight size={32} md:size={40} lg:size={48} strokeWidth={1} />
        </button>

        {/* İçerik Container - Yazılar */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="px-6 lg:px-0 lg:pl-[5vw] xl:pl-[10vw] 2xl:pl-[197px] text-center lg:text-left">
            <p className="text-white text-xs md:text-sm font-medium mb-2 md:mb-4 tracking-wider uppercase">
              Summer 2020
            </p>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-bold mb-4 lg:mb-6 leading-tight">
              NEW COLLECTION
            </h2>
            <p className="text-white text-sm md:text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed opacity-90">
              We know how large objects will act,
              <br className="hidden lg:block" />
              but things on a small scale.
            </p>
            <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-3 lg:py-4 px-8 lg:px-10 rounded text-sm uppercase tracking-wider transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        {/* Slider Noktaları */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          <div className="w-10 md:w-12 lg:w-16 h-1 bg-white rounded-full"></div>
          <div className="w-3 lg:w-4 h-1 bg-white/50 rounded-full"></div>
          <div className="w-3 lg:w-4 h-1 bg-white/50 rounded-full"></div>
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#252B42] mb-2">
            EDITOR'S PICK
          </h3>
          <p className="text-[#737373] text-xs md:text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

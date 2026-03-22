import menImage from "../assets/images/MEN.jpg";
import womenImage from "../assets/images/WOMEN.jpg";
import accessoriesImage from "../assets/images/ACCESSORIES.jpg";
import kidsImage from "../assets/images/KIDS.jpg";

const EditorsPick = () => {
  return (
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

        {/* Desktop */}
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

        {/* Mobile */}
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
  );
};

export default EditorsPick;

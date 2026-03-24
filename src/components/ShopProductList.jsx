import React, { useState } from "react";
import {
  LayoutGrid,
  List,
  ChevronDown,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../data/products";

// Ürün Kartı Componenti - Figma ölçüleri: 238 x 488 Hug
const ProductCard = ({ product, index, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  // Grid görünümü - Figma: 238 x 488 Hug
  if (viewMode === "grid") {
    return (
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col w-[238px] group cursor-pointer"
        style={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container - 238x427px - Figma'daki gibi */}
        <div className="w-[238px] h-[427px] overflow-hidden relative">
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10" />

          {/* Quick Action Buttons - Hover'da görünür */}
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20 transition-all duration-500 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>

          {/* Sale Badge */}
          <div className="absolute top-4 left-4 bg-[#E74C3C] text-white text-xs font-bold px-3 py-1 rounded z-20">
            Sale
          </div>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop";
            }}
          />
        </div>

        {/* Content - Figma'daki gibi ortalanmış */}
        <div className="flex flex-col items-center pt-4 pb-4 transition-all duration-300 group-hover:pt-5">
          <h5 className="text-[#252B42] font-bold text-base mb-1 transition-colors duration-300 group-hover:text-[#23A6F0]">
            {product.title}
          </h5>
          <p className="text-[#737373] text-sm font-bold mb-2">
            {product.department}
          </p>

          {/* Prices */}
          <div className="flex gap-2 mb-3">
            <span className="text-[#BDBDBD] font-bold text-base line-through transition-all duration-300">
              {product.oldPrice}
            </span>
            <span className="text-[#23856D] font-bold text-base group-hover:scale-110 transition-transform duration-300">
              {product.newPrice}
            </span>
          </div>

          {/* Color Dots */}
          <div className="flex gap-2">
            {product.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedColor(colorIndex);
                }}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 ${
                  selectedColor === colorIndex
                    ? "ring-2 ring-offset-2 ring-[#252B42] scale-110"
                    : ""
                }`}
                style={{
                  backgroundColor: color,
                  boxShadow:
                    selectedColor === colorIndex
                      ? `0 0 0 2px white, 0 0 0 4px ${color}`
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
      </Link>
    );
  }

  // Liste görünümü - Yan yana düzen
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - List için küçük */}
      <div className="w-full sm:w-[200px] h-[300px] sm:h-[200px] overflow-hidden relative flex-shrink-0">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10" />

        <div className="absolute top-4 left-4 bg-[#E74C3C] text-white text-xs font-bold px-3 py-1 rounded z-20">
          Sale
        </div>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop";
          }}
        />
      </div>

      {/* Content - List için sola yaslı */}
      <div className="flex flex-col justify-center flex-1 py-2">
        <h5 className="text-[#252B42] font-bold text-lg mb-1 transition-colors duration-300 group-hover:text-[#23A6F0] text-left">
          {product.title}
        </h5>
        <p className="text-[#737373] text-sm font-bold mb-2 text-left">
          {product.department}
        </p>

        <div className="flex gap-2 mb-3 items-start">
          <span className="text-[#BDBDBD] font-bold text-base line-through">
            {product.oldPrice}
          </span>
          <span className="text-[#23856D] font-bold text-base group-hover:scale-110 transition-transform duration-300">
            {product.newPrice}
          </span>
        </div>

        <div className="flex gap-2 justify-start mb-4">
          {product.colors.map((color, colorIndex) => (
            <div
              key={colorIndex}
              className="w-4 h-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-offset-2 hover:ring-[#252B42]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* List için butonlar */}
        <div className="flex gap-3">
          <button
            className="px-6 py-2 bg-[#23A6F0] text-white text-sm font-bold rounded hover:bg-[#1a8cd4] transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            Add to Cart
          </button>
          <button
            className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0] transition-all duration-300 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

const ShopProductList = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Merkezi veri kaynağından tüm ürünleri al
  const allProducts = getAllProducts();

  const itemsPerPage = 15; // Her sayfada 15 ürün (5 x 3 = 15, tam bölünür)
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const currentProducts = allProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Filter Bar - Ürün grid'iyle aynı genişlikte */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] mb-8 pb-6 border-b border-gray-200 items-center"
          style={{ animation: "fadeInUp 0.6s ease-out" }}
        >
          {/* Showing results - Sol hizalı, ürün grid'iyle aynı başlangıç */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <p className="text-[#737373] text-sm font-bold whitespace-nowrap">
              Showing {currentProducts.length} of {allProducts.length} results
            </p>
          </div>

          {/* Boş alan - Ortayı doldur */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Controls - Sağ hizalı, ürün grid'iyle aynı bitiş */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 flex items-center justify-end gap-4">
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-[#737373] text-sm font-bold mr-2">
                Views:
              </span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all duration-300 cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#23A6F0] text-white"
                    : "text-[#737373] hover:text-[#23A6F0]"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-all duration-300 cursor-pointer ${
                  viewMode === "list"
                    ? "bg-[#23A6F0] text-white"
                    : "text-[#737373] hover:text-[#23A6F0]"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select className="appearance-none bg-white border border-[#DEDEDE] rounded px-4 py-2 pr-8 text-sm text-[#737373] focus:outline-none focus:border-[#23A6F0] min-w-[140px] cursor-pointer transition-all duration-300 hover:border-[#23A6F0]">
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373] pointer-events-none" />
            </div>

            {/* Filter Button */}
            <button className="bg-[#23A6F0] hover:bg-[#1a8cd4] text-white px-6 py-2 rounded text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 cursor-pointer">
              <Filter className="w-4 h-4 sm:hidden" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] justify-items-center"
              : "flex flex-col gap-4"
          }`}
        >
          {currentProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded border transition-all duration-300 cursor-pointer ${
                currentPage === 1
                  ? "border-[#E8E8E8] text-[#BDBDBD] cursor-not-allowed"
                  : "border-[#E8E8E8] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0]"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded font-bold text-sm transition-all duration-300 cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-[#23A6F0] text-white"
                    : "border border-[#E8E8E8] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded border transition-all duration-300 cursor-pointer ${
                currentPage === totalPages
                  ? "border-[#E8E8E8] text-[#BDBDBD] cursor-not-allowed"
                  : "border-[#E8E8E8] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0]"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ShopProductList;

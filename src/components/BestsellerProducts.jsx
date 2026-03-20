// src/components/BestsellerProducts.jsx
import React, { useState } from "react";
import pictures1 from "../assets/images/pictures1.jpg";
import pictures2 from "../assets/images/pictures2.jpg";
import pictures3 from "../assets/images/pictures3.jpg";
import pictures4 from "../assets/images/pictures4.jpg";
import pictures5 from "../assets/images/pictures5.jpg";
import pictures6 from "../assets/images/pictures6.jpg";
import pictures7 from "../assets/images/pictures7.jpg";
import pictures8 from "../assets/images/pictures8.jpg";

const products = [
  {
    id: 1,
    image: pictures1,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    image: pictures2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    image: pictures3,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    image: pictures4,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 5,
    image: pictures5,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 6,
    image: pictures6,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 7,
    image: pictures7,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 8,
    image: pictures8,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div
      className="flex flex-col w-[238px] group cursor-pointer"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - 239x427px */}
      <div className="w-[239px] h-[427px] overflow-hidden relative">
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10" />

        {/* Quick Action Buttons - Hover'da görünür */}
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20 transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all duration-300 hover:scale-110">
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
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all duration-300 hover:scale-110">
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
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all duration-300 hover:scale-110">
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
        />
      </div>

      {/* Content */}
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
              onClick={() => setSelectedColor(colorIndex)}
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
    </div>
  );
};

const BestsellerProducts = () => {
  return (
    <section className="w-full bg-white py-20">
      {/* Container - 1124px width, 80px padding */}
      <div className="max-w-[1124px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Header with animation */}
        <div
          className="flex flex-col items-center mb-12"
          style={{ animation: "fadeInUp 0.8s ease-out" }}
        >
          <span className="text-[#737373] text-sm font-bold mb-2 tracking-wide uppercase">
            Featured Products
          </span>
          <h2 className="text-[#252B42] text-2xl font-bold mb-2 relative">
            BESTSELLER PRODUCTS
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#23A6F0] rounded-full transform origin-center transition-all duration-500 hover:w-24"></span>
          </h2>
          <p className="text-[#737373] text-sm mt-4">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Grid - Row with 30px gap */}
        <div className="flex flex-wrap justify-center gap-[30px]">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-10 py-4 border-2 border-[#23A6F0] text-[#23A6F0] font-bold rounded hover:bg-[#23A6F0] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>

      {/* CSS Animations */}
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
    </section>
  );
};

export default BestsellerProducts;

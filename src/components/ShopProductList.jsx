import React, { useState } from "react";
import {
  LayoutGrid,
  List,
  ChevronDown,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Toplam 36 ürün (3 sayfa x 12 ürün)
const allProducts = [
  // Sayfa 1 - pictures1-8 + 4 Unsplash
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image: "/src/assets/images/pictures1.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image: "/src/assets/images/pictures2.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image: "/src/assets/images/pictures3.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image: "/src/assets/images/pictures4.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image: "/src/assets/images/pictures5.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image: "/src/assets/images/pictures6.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image: "/src/assets/images/pictures7.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image: "/src/assets/images/pictures8.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 9,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 10,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 11,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 12,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  // Sayfa 2 - 12 Unsplash
  {
    id: 13,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 14,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 15,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 16,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 17,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 18,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 19,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 20,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 21,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 22,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 23,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 24,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  // Sayfa 3 - 12 Unsplash
  {
    id: 25,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 26,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 27,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 28,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 29,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 30,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 31,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 32,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 33,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 34,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 35,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 36,
    title: "Graphic Design",
    department: "English Department",
    price: "16.48",
    salePrice: "6.48",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];

const ShopProductList = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  const totalPages = 3;

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
        {/* Filter Bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-gray-200"
          style={{ animation: "fadeInUp 0.6s ease-out" }}
        >
          <p className="text-[#737373] text-sm font-bold">
            Showing {currentProducts.length} of {allProducts.length} results
          </p>

          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-[#737373] text-sm font-bold mr-2">
                Views:
              </span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-[#23A6F0] text-white"
                    : "text-[#737373] hover:text-[#23A6F0]"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-all duration-300 ${
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
            <button className="bg-[#23A6F0] hover:bg-[#1a8cd4] text-white px-6 py-2 rounded text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Filter className="w-4 h-4 sm:hidden" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>

        {/* Products Grid / List */}
        <div
          className={`grid gap-4 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                viewMode === "list"
                  ? "flex flex-col sm:flex-row gap-4 p-4"
                  : "flex flex-col"
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden bg-[#f5f5f5] ${
                  viewMode === "list"
                    ? "w-full sm:w-[200px] h-[250px] sm:h-[200px] flex-shrink-0"
                    : "h-[300px] sm:h-[280px] lg:h-[260px]"
                }`}
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10" />

                {/* Quick Action Buttons - Sadece grid'de göster */}
                {viewMode === "grid" && (
                  <div
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20 transition-all duration-500 ${
                      hoveredProduct === product.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
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
                )}

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

              {/* Content */}
              <div
                className={`flex flex-col justify-center ${
                  viewMode === "list"
                    ? "items-start flex-1 py-2"
                    : "items-center pt-4 pb-4"
                }`}
              >
                <h5
                  className={`text-[#252B42] font-bold text-lg mb-1 transition-colors duration-300 group-hover:text-[#23A6F0] ${
                    viewMode === "list" ? "text-left" : "text-center"
                  }`}
                >
                  {product.title}
                </h5>
                <p
                  className={`text-[#737373] text-sm font-bold mb-2 ${
                    viewMode === "list" ? "text-left" : "text-center"
                  }`}
                >
                  {product.department}
                </p>

                {/* Prices */}
                <div
                  className={`flex gap-2 mb-3 ${
                    viewMode === "list" ? "items-start" : "items-center"
                  }`}
                >
                  <span className="text-[#BDBDBD] font-bold text-base line-through">
                    ${product.price}
                  </span>
                  <span className="text-[#23856D] font-bold text-base group-hover:scale-110 transition-transform duration-300">
                    ${product.salePrice}
                  </span>
                </div>

                {/* Color Dots */}
                <div
                  className={`flex gap-2 ${
                    viewMode === "list" ? "justify-start" : "justify-center"
                  }`}
                >
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-4 h-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-offset-2 hover:ring-[#252B42]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Liste görünümünde ekstra butonlar */}
                {viewMode === "list" && (
                  <div className="flex gap-3 mt-4">
                    <button className="px-6 py-2 bg-[#23A6F0] text-white text-sm font-bold rounded hover:bg-[#1a8cd4] transition-all duration-300 hover:scale-105">
                      Add to Cart
                    </button>
                    <button className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0] transition-all duration-300">
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
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded border transition-all duration-300 ${
                currentPage === 1
                  ? "border-[#E8E8E8] text-[#BDBDBD] cursor-not-allowed"
                  : "border-[#E8E8E8] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0]"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded font-bold text-sm transition-all duration-300 ${
                  currentPage === page
                    ? "bg-[#23A6F0] text-white"
                    : "border border-[#E8E8E8] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white hover:border-[#23A6F0]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded border transition-all duration-300 ${
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

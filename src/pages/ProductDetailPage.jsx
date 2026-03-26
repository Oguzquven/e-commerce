// src/components/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../data/products";
import BestsellerProducts from "../components/BestsellerProducts"; // Aynı klasörde olduğu için ./ kullanıyoruz
import ClientsLogo from "../components/ClientLogos";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Eye,
  Star,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
        <h1 className="text-4xl font-bold text-[#252B42] mb-4">
          Product Not Found
        </h1>
        <Link
          to="/shop"
          className="px-8 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd4] transition-all"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const productImages = [product.image, product.image, product.image];

  const colors = [
    { name: "blue", hex: "#23A6F0" },
    { name: "green", hex: "#23856D" },
    { name: "orange", hex: "#E77C40" },
    { name: "dark", hex: "#252B42" },
  ];

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Info" },
    { id: "reviews", label: "Reviews (0)" },
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      {/* Product Detail Section */}
      <div className="min-h-[600px] lg:h-[calc(100vh-110px)] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-8 lg:py-0 flex items-center">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 xl:gap-32 w-full items-center justify-center h-full">
          {/* Left - Images */}
          <div className="w-full lg:w-[45%] xl:w-[40%] flex-shrink-0 flex flex-col justify-center h-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link
                to="/"
                className="text-[#252B42] font-bold hover:text-[#23A6F0] transition-colors"
              >
                Home
              </Link>
              <span className="text-[#BDBDBD]">/</span>
              <Link
                to="/shop"
                className="text-[#BDBDBD] hover:text-[#23A6F0] transition-colors"
              >
                Shop
              </Link>
            </div>

            {/* Main Image Carousel */}
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-[55vh] lg:h-[65vh] bg-white rounded-lg overflow-hidden shadow-sm group">
              <img
                src={productImages[activeImage]}
                alt={product.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#BDBDBD] hover:text-[#252B42] hover:bg-white transition-all bg-white/80 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#BDBDBD] hover:text-[#252B42] hover:bg-white transition-all bg-white/80 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 lg:gap-4 mt-4 justify-start">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded-lg overflow-hidden border-2 transition-all duration-300 bg-white cursor-pointer hover:shadow-md hover:scale-105 ${
                    activeImage === index
                      ? "border-[#23A6F0]"
                      : "border-transparent hover:border-[#BDBDBD]"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="w-full lg:flex-1 lg:w-[45%] xl:w-[40%] lg:max-w-[600px] flex flex-col justify-center lg:h-[55vh] lg:h-[65vh]">
            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold text-[#252B42] mb-2">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#F3CD03] text-[#F3CD03]"
                  />
                ))}
                <Star className="w-4 h-4 text-[#F3CD03]" />
              </div>
              <span className="text-[#737373] text-sm font-bold">
                10 Reviews
              </span>
            </div>

            {/* Price */}
            <div className="text-2xl lg:text-3xl font-bold text-[#252B42] mb-2">
              {product.newPrice || "$1,139.33"}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#737373] text-sm font-bold">
                Availability :
              </span>
              <span className="text-[#23A6F0] text-sm font-bold">In Stock</span>
            </div>

            {/* Description */}
            <p className="text-[#737373] text-sm leading-relaxed mb-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            {/* Color Selection */}
            <div className="flex gap-3 mb-6">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full transition-all duration-200 cursor-pointer hover:scale-110 hover:shadow-md ${
                    selectedColor === index
                      ? "ring-2 ring-offset-2 ring-[#252B42]"
                      : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              <button className="px-6 py-3 bg-[#23A6F0] text-white font-bold text-sm rounded hover:bg-[#1a8cd4] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                Select Options
              </button>

              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#252B42] hover:border-[#23A6F0] hover:text-[#23A6F0] hover:bg-[#23A6F0]/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-white">
                <Heart className="w-5 h-5" />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#252B42] hover:border-[#23A6F0] hover:text-[#23A6F0] hover:bg-[#23A6F0]/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-white">
                <ShoppingCart className="w-5 h-5" />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#252B42] hover:border-[#23A6F0] hover:text-[#23A6F0] hover:bg-[#23A6F0]/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-white">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Headers */}
          <div className="flex justify-between lg:justify-center lg:gap-8 border-b border-[#ECECEC]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-xs lg:text-sm font-bold transition-colors relative cursor-pointer hover:text-[#23A6F0] ${
                  activeTab === tab.id
                    ? "text-[#252B42]"
                    : "text-[#737373] hover:text-[#252B42]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#252B42]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-12">
            {activeTab === "description" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Image */}
                <div className="lg:col-span-1">
                  <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                    <img
                      src={product.image}
                      alt="Product detail"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Middle Content */}
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-bold text-[#252B42] mb-4">
                    the quick fox jumps over
                  </h3>
                  <p className="text-[#737373] text-sm leading-relaxed mb-4">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-[#737373] text-sm leading-relaxed mb-4">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-[#737373] text-sm leading-relaxed">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#252B42] mb-4">
                      the quick fox jumps over
                    </h3>
                    <ul className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-[#737373] text-sm"
                        >
                          <ChevronRight className="w-4 h-4 text-[#737373]" />
                          the quick fox jumps over the lazy dog
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#252B42] mb-4">
                      the quick fox jumps over
                    </h3>
                    <ul className="space-y-2">
                      {[...Array(3)].map((_, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-[#737373] text-sm"
                        >
                          <ChevronRight className="w-4 h-4 text-[#737373]" />
                          the quick fox jumps over the lazy dog
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "additional" && (
              <div className="text-center text-[#737373] py-8">
                Additional information content...
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="text-center text-[#737373] py-8">
                No reviews yet.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bestseller Products - Import edilmiş component */}
      <BestsellerProducts />
      <ClientsLogo />
    </div>
  );
};

export default ProductDetail;

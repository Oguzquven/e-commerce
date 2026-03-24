import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../data/products";
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
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
    { id: "additional", label: "Additional Information" },
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
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#FAFAFA] py-4">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
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
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Images */}
          <div className="lg:w-[506px] flex-shrink-0">
            {/* Main Image Carousel */}
            <div className="relative w-full h-[450px] bg-[#FAFAFA] rounded-lg overflow-hidden">
              <img
                src={productImages[activeImage]}
                alt={product.title}
                className="w-full h-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#BDBDBD] hover:text-[#252B42] transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#BDBDBD] hover:text-[#252B42] transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 mt-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-[100px] h-[100px] rounded-lg overflow-hidden border transition-all ${
                    activeImage === index
                      ? "border-[#23A6F0]"
                      : "border-transparent"
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
          <div className="flex-1 max-w-[500px]">
            {/* Title */}
            <h1 className="text-2xl font-bold text-[#252B42] mb-2">
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
            <div className="text-2xl font-bold text-[#252B42] mb-2">
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
            <p className="text-[#737373] text-sm leading-relaxed mb-6 border-b border-[#ECECEC] pb-6">
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
                  className={`w-8 h-8 rounded-full transition-all ${
                    selectedColor === index
                      ? "ring-2 ring-offset-2 ring-[#252B42]"
                      : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-[#23A6F0] text-white font-bold text-sm rounded hover:bg-[#1a8cd4] transition-all">
                Select Options
              </button>

              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#252B42] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-all">
                <Heart className="w-5 h-5" />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#252B42] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-all">
                <ShoppingCart className="w-5 h-5" />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#252B42] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-all">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-[#ECECEC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Headers */}
          <div className="flex justify-center gap-8 border-b border-[#ECECEC]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-bold transition-colors relative ${
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
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt="Product detail"
                      className="w-full h-[300px] object-cover"
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
    </div>
  );
};

export default ProductDetail;

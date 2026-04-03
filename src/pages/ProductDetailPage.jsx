// src/components/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/actions/productActions";
import { addToCart } from "../store/actions/shoppingCartActions"; // YENİ
import BestsellerProducts from "../components/BestsellerProducts";
import ClientsLogo from "../components/ClientLogos";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Eye,
  Star,
  Check,
} from "lucide-react"; // Check eklendi

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // API'den gelen veriyi al
  const { productDetail, productDetailLoading, productDetailError } =
    useSelector((state) => state.product);

  const [selectedColor, setSelectedColor] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false); // YENİ: Eklendi bildirimi

  // Ürünü çek
  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, dispatch]);

  // Loading state
  if (productDetailLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
      </div>
    );
  }

  // Error state
  if (productDetailError || !productDetail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
        <h1 className="text-4xl font-bold text-[#252B42] mb-4">
          {productDetailError ? "Error Loading Product" : "Product Not Found"}
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd4] transition-all flex items-center gap-2"
        >
          Back
        </button>
      </div>
    );
  }

  // API verisini mevcut yapıya dönüştür
  const product = {
    title: productDetail.name,
    newPrice: `$${productDetail.price}`,
    image: productDetail.images?.[0]?.url || productDetail.image,
    images:
      productDetail.images?.length > 1
        ? productDetail.images.map((img) => img.url)
        : [productDetail.images?.[0]?.url || productDetail.image],
  };

  // Eski yapıya uygun colors
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

  // YENİ: Add to Cart handler
  const handleAddToCart = () => {
    const productToAdd = {
      id: productDetail.id,
      name: productDetail.name,
      price: productDetail.price,
      image: productDetail.images?.[0]?.url || productDetail.image,
    };

    dispatch(addToCart(productToAdd, 1));

    // Eklendi bildirimi göster
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
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
                src={product.images[activeImage] || product.image}
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
              {(product.images.length > 1
                ? product.images
                : [product.image]
              ).map((img, index) => (
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
              {product.newPrice}
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
              {productDetail.description ||
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."}
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

            {/* Actions - GÜNCELLENDİ */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`px-6 py-3 font-bold text-sm rounded transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  addedToCart
                    ? "bg-green-500 text-white"
                    : "bg-[#23A6F0] text-white hover:bg-[#1a8cd4] hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>

              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#252B42] hover:border-[#23A6F0] hover:text-[#23A6F0] hover:bg-[#23A6F0]/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-white">
                <Heart className="w-5 h-5" />
              </button>

              <button
                onClick={handleAddToCart}
                className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#252B42] hover:border-[#23A6F0] hover:text-[#23A6F0] hover:bg-[#23A6F0]/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-white"
              >
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

          <div className="py-12">
            {activeTab === "description" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                    <img
                      src={product.image}
                      alt="Product detail"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-bold text-[#252B42] mb-4">
                    Product Description
                  </h3>
                  <p className="text-[#737373] text-sm leading-relaxed mb-4">
                    {productDetail.description || "No description available."}
                  </p>
                </div>
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#252B42] mb-4">
                      Product Details
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[#737373] text-sm">
                        <ChevronRight className="w-4 h-4" />
                        Stock: {productDetail.stock} units
                      </li>
                      <li className="flex items-center gap-2 text-[#737373] text-sm">
                        <ChevronRight className="w-4 h-4" />
                        Rating: {productDetail.rating || 0}/5
                      </li>
                      <li className="flex items-center gap-2 text-[#737373] text-sm">
                        <ChevronRight className="w-4 h-4" />
                        Sold: {productDetail.sell_count || 0} times
                      </li>
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

      <BestsellerProducts />
      <ClientsLogo />
    </div>
  );
};

export default ProductDetail;

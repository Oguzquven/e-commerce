// src/pages/ShopPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import ShopBanner from "../components/ShopBanner";
import ShopProductList from "../components/ShopProductList";
import ClientLogos from "../components/ClientLogos";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { products, total, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white">
      {/* Shop Breadcrumb */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
            <nav className="flex items-center text-sm text-[#737373]">
              <span className="hover:text-[#252B42] cursor-pointer transition-colors duration-200">
                Home
              </span>
              <span className="mx-2 text-[#BDBDBD]">›</span>
              <span className="text-[#252B42] font-medium">Shop</span>
            </nav>
          </div>
        </div>
      </div>

      <ShopBanner />

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
        </div>
      ) : (
        <ShopProductList products={products} total={total} />
      )}

      <ClientLogos />
    </div>
  );
};

export default ShopPage;

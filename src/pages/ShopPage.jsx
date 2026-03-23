import React from "react";
import ShopBanner from "../components/ShopBanner";
import ShopProductList from "../components/ShopProductList";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Shop Breadcrumb - Banner ile aynı genişlikte */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto py-6">
          <div className="flex items-center justify-between">
            {/* Shop - Sol taraf (banner başlangıcı) */}
            <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>

            {/* Breadcrumb - Sağ taraf (banner bitişi) */}
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
      <ShopProductList />
    </div>
  );
};

export default ShopPage;

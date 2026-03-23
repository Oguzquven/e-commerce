import React from "react";
import { ChevronRight } from "lucide-react";

const ShopBreadcrumb = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Shop</h1>
          <nav className="flex items-center text-sm text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Shop</span>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ShopBreadcrumb;

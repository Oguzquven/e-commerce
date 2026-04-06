// src/pages/OrderSuccessPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-md w-full text-center">
        {/* Başarı İkonu */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#252B42] mb-4">
          Siparişiniz Alındı!
        </h1>

        <p className="text-[#737373] mb-8">
          Siparişiniz başarıyla oluşturuldu. En kısa sürede kargoya
          verilecektir. Bizi tercih ettiğiniz için teşekkür ederiz.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/shop")}
            className="w-full py-3 bg-[#23A6F0] text-white font-bold rounded-lg hover:bg-[#1a8cd4] transition-colors cursor-pointer"
          >
            Alışverişe Devam Et
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;

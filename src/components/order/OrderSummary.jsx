// src/components/order/OrderSummary.jsx
import React from "react";

const OrderSummary = ({
  cart,
  selectedAddress,
  selectedCard,
  currentStep,
  onContinue,
  cvv,
}) => {
  const total = cart.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );

  const canContinue =
    currentStep === 1 ? selectedAddress : selectedCard && cvv?.length === 3;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
      <h2 className="text-xl font-bold text-[#252B42] mb-6">Sipariş Özeti</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-[#737373]">
          <span>Ürün Toplamı ({cart.length})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[#737373]">
          <span>Kargo Toplamı</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-[#737373]">
          <span>150 TL ve Üzeri Kargo Bedava</span>
          <span className="text-green-500">-$0.00</span>
        </div>
        <div className="flex justify-between text-[#737373]">
          <span>İndirim</span>
          <span className="text-red-500">-$0.00</span>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-[#252B42] text-lg">Toplam</span>
          <span className="text-2xl font-bold text-[#23A6F0]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        disabled={!canContinue}
        onClick={onContinue}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
          canContinue
            ? "bg-[#23A6F0] text-white hover:bg-[#1a8cd4] cursor-pointer"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {currentStep === 1 ? "Kaydet ve Devam Et" : "Ödeme Yap"}
      </button>

      {!canContinue && (
        <p className="text-xs text-red-500 text-center mt-2">
          {currentStep === 1
            ? "Lütfen bir adres seçin"
            : "Lütfen kart ve CVV girin"}
        </p>
      )}
    </div>
  );
};

export default OrderSummary;

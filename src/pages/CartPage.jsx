// src/pages/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  updateCartItem,
} from "../store/actions/shoppingCartActions";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  // Sadece seçili ürünlerin toplamı
  const selectedItems = cart.filter((item) => item.checked);
  const selectedTotal = selectedItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );
  const selectedCount = selectedItems.reduce(
    (total, item) => total + item.count,
    0,
  );

  // Tüm ürünlerin toplamı
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );

  const handleUpdateCount = (productId, newCount) => {
    if (newCount <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, newCount));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleToggleCheck = (productId, currentChecked) => {
    // checked durumunu değiştir - reducer'a yeni action eklememiz gerekir
    // Şimdilik local state kullanalım, istersen reducer'a ekleriz
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-8 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/shop"
            className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Alışverişe Devam Et</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-[#252B42] mb-2">
          Sepetim ({cart.length} Ürün)
        </h1>
        <p className="text-[#737373] mb-8">
          Sepetinizdeki ürünleri görüntüleyin ve düzenleyin
        </p>

        {cart.length === 0 ? (
          // Boş Sepet
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <ShoppingCart className="w-20 h-20 mx-auto text-gray-200 mb-4" />
            <h2 className="text-xl font-bold text-[#252B42] mb-2">
              Sepetiniz Boş
            </h2>
            <p className="text-[#737373] mb-6">
              Sepetinizde henüz ürün bulunmuyor
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 bg-[#23A6F0] text-white font-bold rounded-lg hover:bg-[#1a8cd4] transition-colors"
            >
              Alışverişe Başla
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ürün Listesi */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-xl shadow-sm p-4 flex gap-4 hover:shadow-md transition-shadow"
                >
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {
                        // Toggle checked - reducer'a SET_CART_ITEM_CHECKED action'i eklenmeli
                        // Şimdilik sadece görsel
                      }}
                      className="w-5 h-5 rounded border-gray-300 text-[#23A6F0] focus:ring-[#23A6F0] cursor-pointer"
                    />
                  </div>

                  {/* Ürün Görseli */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg bg-gray-100"
                  />

                  {/* Ürün Bilgileri */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#252B42] text-lg truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-[#737373] mt-1">
                      Ürün Kodu: {item.product.id}
                    </p>

                    {/* Miktar Kontrolleri */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          handleUpdateCount(item.product.id, item.count - 1)
                        }
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors cursor-pointer"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg font-medium text-[#252B42] w-8 text-center">
                        {item.count}
                      </span>
                      <button
                        onClick={() =>
                          handleUpdateCount(item.product.id, item.count + 1)
                        }
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors cursor-pointer"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Fiyat ve Silme */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => handleRemove(item.product.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer p-1"
                    >
                      <Trash2 size={20} />
                    </button>
                    <div className="text-right">
                      <p className="text-sm text-[#737373] line-through">
                        ${(item.product.price * 1.2).toFixed(2)}
                      </p>
                      <p className="text-xl font-bold text-[#23A6F0]">
                        ${(item.product.price * item.count).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sipariş Özeti - T19 Format */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24 border border-gray-100">
                <h2 className="text-xl font-bold text-[#252B42] mb-6">
                  Sipariş Özeti
                </h2>

                {/* Detaylı Özet */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[#737373]">
                    <span>Ürün Toplamı</span>
                    <span className="font-medium text-[#252B42]">
                      ${selectedTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#737373]">
                    <span>Kargo Toplamı</span>
                    <span className="font-medium text-[#252B42]">$0.00</span>
                  </div>

                  <div className="flex justify-between text-[#737373]">
                    <span>150 TL ve Üzeri Kargo Bedava</span>
                    <span className="text-green-500 font-medium">-$0.00</span>
                  </div>

                  <div className="flex justify-between text-[#737373]">
                    <span>İndirim</span>
                    <span className="text-red-500 font-medium">-$0.00</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#252B42] text-lg">
                      Toplam
                    </span>
                    <span className="text-2xl font-bold text-[#23A6F0]">
                      ${selectedTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Sepeti Onayla Butonu */}
                <button
                  onClick={() => alert("Sipariş onaylama yakında!")}
                  disabled={selectedCount === 0}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    selectedCount > 0
                      ? "bg-[#23A6F0] text-white hover:bg-[#1a8cd4] cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Sepeti Onayla ›
                </button>

                <p className="text-xs text-[#737373] text-center mt-4">
                  Ödeme işlemleri güvenle gerçekleştirilir
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

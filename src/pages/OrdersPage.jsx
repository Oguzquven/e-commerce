// src/pages/OrdersPage.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOrders } from "../store/actions/orderActions";
import {
  ChevronDown,
  ChevronUp,
  Package,
  Calendar,
  CreditCard,
} from "lucide-react";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading } = useSelector((state) => state.order || {});
  const { user } = useSelector((state) => state.client);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    if (!user.token) {
      navigate("/login");
      return;
    }
    dispatch(fetchOrders());
  }, [dispatch, user.token, navigate]);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-8 pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#252B42] mb-8">Siparişlerim</h1>

        {orders?.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Package size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-bold text-[#252B42] mb-2">
              Henüz siparişiniz yok
            </h2>
            <p className="text-[#737373] mb-6">
              Siparişleriniz burada görünecek
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="px-6 py-3 bg-[#23A6F0] text-white font-bold rounded-lg hover:bg-[#1a8cd4] transition-colors cursor-pointer"
            >
              Alışverişe Başla
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders?.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                {/* Sipariş Özeti Header */}
                <div
                  onClick={() => toggleOrderDetails(order.id)}
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#23A6F0]/10 rounded-lg flex items-center justify-center">
                        <Package className="text-[#23A6F0]" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-[#737373]">Sipariş No</p>
                        <p className="font-bold text-[#252B42]">#{order.id}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-[#737373]">
                        <Calendar size={16} />
                        <span>{formatDate(order.order_date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#737373]">
                        <CreditCard size={16} />
                        <span>**** {order.card_no?.toString().slice(-4)}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-[#737373]">Toplam</p>
                        <p className="font-bold text-[#23A6F0] text-lg">
                          {formatPrice(order.price)}
                        </p>
                      </div>
                      <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                        {expandedOrder === order.id ? (
                          <ChevronUp size={20} className="text-[#737373]" />
                        ) : (
                          <ChevronDown size={20} className="text-[#737373]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Detaylar (Collapsible) */}
                {expandedOrder === order.id && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50 animate-fade-in">
                    {/* Ürünler */}
                    <div>
                      <h3 className="font-bold text-[#252B42] mb-3">
                        Sipariş Edilen Ürünler
                      </h3>
                      <div className="space-y-3">
                        {order.products?.map((product, index) => (
                          <div
                            key={index}
                            className="bg-white p-4 rounded-lg flex items-center justify-between"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                {product.images && product.images[0] ? (
                                  <img
                                    src={product.images[0].url}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <Package
                                    size={24}
                                    className="text-gray-400"
                                  />
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-[#252B42]">
                                  {product.name ||
                                    `Ürün #${product.product_id}`}
                                </p>
                                <p className="text-sm text-[#737373]">
                                  {product.description || product.detail}
                                </p>
                                <p className="text-sm text-[#737373]">
                                  Adet: {product.count}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-[#23A6F0]">
                                {formatPrice(product.price * product.count)}
                              </p>
                              <p className="text-sm text-[#737373]">
                                {formatPrice(product.price)} / adet
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ödeme Özeti */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-[#737373]">Sipariş Durumu</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Onaylandı
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;

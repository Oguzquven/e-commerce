// src/pages/CreateOrderPage.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../store/actions/orderActions";
import AddressStep from "../components/order/AddressStep";
import PaymentStep from "../components/order/PaymentStep";
import OrderSummary from "../components/order/OrderSummary";

const CreateOrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.shoppingCart);
  const { addresses } = useSelector((state) => state.address || {});
  const { cards } = useSelector((state) => state.card || {});

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    if (cart.length === 0 && currentStep === 1) {
      navigate("/cart");
    }
  }, [cart, navigate, currentStep]);

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      handleCreateOrder();
    }
  };

  const handleCreateOrder = async () => {
    const selectedCardData = cards.find((c) => c.id === selectedCard);
    const selectedAddressData = addresses.find((a) => a.id === selectedAddress);

    if (!selectedCardData || !selectedAddressData) {
      alert("Lütfen adres ve kart seçin");
      return;
    }

    if (!cvv || cvv.length !== 3) {
      alert("Lütfen CVV kodunu girin (3 haneli)");
      return;
    }

    const total = cart.reduce(
      (total, item) => total + item.product.price * item.count,
      0,
    );

    const orderData = {
      address_id: selectedAddress,
      order_date: new Date().toISOString(),
      card_no: parseInt(selectedCardData.card_no),
      card_name: selectedCardData.name_on_card,
      card_expire_month: parseInt(selectedCardData.expire_month),
      card_expire_year: parseInt(selectedCardData.expire_year),
      card_ccv: parseInt(cvv),
      price: total,
      products: cart.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: `${item.product.name} - ${item.count} adet`,
      })),
    };

    const result = await dispatch(createOrder(orderData));

    // ✅ DEĞİŞİKLİK BURADA
    if (result.success) {
      navigate("/order-success"); // Yönlendirme değişti
    } else {
      alert("Sipariş oluşturulurken hata oluştu: " + result.error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-8 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#252B42] mb-8">
          Sipariş Oluştur
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentStep(1)}
          >
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                currentStep >= 1
                  ? "bg-[#23A6F0] text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              1
            </span>
            <span
              className={`font-medium ${currentStep >= 1 ? "text-[#23A6F0]" : "text-gray-500"}`}
            >
              Adres Bilgileri
            </span>
          </div>
          <div className="w-16 h-0.5 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                currentStep >= 2
                  ? "bg-[#23A6F0] text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              2
            </span>
            <span
              className={`font-medium ${currentStep >= 2 ? "text-[#23A6F0]" : "text-gray-500"}`}
            >
              Ödeme Seçenekleri
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {currentStep === 1 ? (
              <AddressStep
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
            ) : (
              <PaymentStep
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
                cvv={cvv}
                setCvv={setCvv}
              />
            )}
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              cart={cart}
              selectedAddress={selectedAddress}
              selectedCard={selectedCard}
              currentStep={currentStep}
              onContinue={handleContinue}
              cvv={cvv}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;

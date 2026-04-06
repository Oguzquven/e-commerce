// src/components/order/PaymentStep.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  createCard,
  editCard,
  removeCard,
} from "../../store/actions/cardActions";

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const PaymentStep = ({ selectedCard, setSelectedCard, cvv, setCvv }) => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.card || {});

  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [showCvvModal, setShowCvvModal] = useState(false);
  const [tempCvv, setTempCvv] = useState("");
  const [pendingCardId, setPendingCardId] = useState(null);

  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
    cvv: "",
  });

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i,
  );

  const maskCard = (cardNo) => {
    if (!cardNo) return "";
    return "**** **** **** " + cardNo.slice(-4);
  };

  // Kart seçildiğinde CVV modalı aç
  const handleCardSelect = (cardId) => {
    if (selectedCard === cardId) return; // Zaten seçiliyse tekrar açma

    setPendingCardId(cardId);
    setTempCvv("");
    setShowCvvModal(true);
  };

  // CVV onaylandı
  const handleCvvConfirm = () => {
    if (tempCvv.length !== 3) {
      alert("Lütfen 3 haneli CVV kodunu girin");
      return;
    }
    setCvv(tempCvv);
    setSelectedCard(pendingCardId);
    setShowCvvModal(false);
  };

  // Modal'ı kapat ve seçimi iptal et
  const handleCvvCancel = () => {
    setShowCvvModal(false);
    setTempCvv("");
    setPendingCardId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { cvv: formCvv, ...cardData } = formData;
    const success = editingCard
      ? await dispatch(editCard(editingCard.id, cardData))
      : await dispatch(createCard(cardData));
    if (success) resetForm();
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingCard(null);
    setFormData({
      card_no: "",
      expire_month: "",
      expire_year: "",
      name_on_card: "",
      cvv: "",
    });
  };

  const handleEdit = (card) => {
    setEditingCard(card);
    setFormData({
      card_no: card.card_no,
      expire_month: card.expire_month,
      expire_year: card.expire_year,
      name_on_card: card.name_on_card,
      cvv: "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bu kartı silmek istediğinize emin misiniz?")) {
      const success = await dispatch(removeCard(id));
      if (success && selectedCard === id) {
        setSelectedCard(null);
        setCvv("");
      }
    }
  };

  return (
    <div className="space-y-6 relative">
      {/* CVV MODAL */}
      {showCvvModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm mx-4 shadow-2xl">
            <h3 className="text-xl font-bold text-[#252B42] mb-2">
              Güvenlik Kodu (CVV)
            </h3>
            <p className="text-sm text-[#737373] mb-4">
              Seçtiğiniz kart için CVV kodunu girin
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-[#737373] mb-1">
                CVV Kodu
              </label>
              <input
                type="password"
                value={tempCvv}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d{0,3}$/.test(val)) setTempCvv(val);
                }}
                placeholder="•••"
                maxLength="3"
                autoFocus
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0] text-center text-2xl tracking-widest"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCvvCancel}
                className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                onClick={handleCvvConfirm}
                disabled={tempCvv.length !== 3}
                className="flex-1 py-3 bg-[#23A6F0] text-white font-bold rounded-lg hover:bg-[#1a8cd4] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Onayla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Kayıtlı Kartlar */}
      {cards?.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-[#252B42] mb-4">
            Kayıtlı Kartlarım
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardSelect(card.id)}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all relative group ${
                  selectedCard === card.id
                    ? "border-[#23A6F0] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(card);
                    }}
                    className="p-2 text-blue-500 hover:bg-blue-100 rounded-full cursor-pointer"
                  >
                    <EditIcon />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(card.id);
                    }}
                    className="p-2 text-red-500 hover:bg-red-100 rounded-full cursor-pointer"
                  >
                    <TrashIcon />
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded"></div>
                  <span className="font-bold text-[#252B42]">
                    {card.name_on_card}
                  </span>
                </div>
                <p className="text-lg font-mono text-[#252B42] tracking-wider">
                  {maskCard(card.card_no)}
                </p>
                <p className="text-sm text-[#737373] mt-1">
                  {card.expire_month}/{card.expire_year}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-4 border-2 border-dashed border-[#23A6F0] text-[#23A6F0] rounded-xl font-bold hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <PlusIcon /> Yeni Kart Ekle
        </button>
      )}

      {showForm && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-[#252B42] mb-4">
            {editingCard ? "Kartı Düzenle" : "Yeni Kart Ekle"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#737373] mb-1">
                Kart Numarası
              </label>
              <input
                type="text"
                value={formData.card_no}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    card_no: e.target.value.replace(/\D/g, "").slice(0, 16),
                  })
                }
                placeholder="1234 1234 1234 1234"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#737373] mb-1">
                  Ay
                </label>
                <select
                  value={formData.expire_month}
                  onChange={(e) =>
                    setFormData({ ...formData, expire_month: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                  required
                >
                  <option value="">Ay</option>
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#737373] mb-1">
                  Yıl
                </label>
                <select
                  value={formData.expire_year}
                  onChange={(e) =>
                    setFormData({ ...formData, expire_year: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                  required
                >
                  <option value="">Yıl</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#737373] mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  value={formData.cvv}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                    })
                  }
                  placeholder="123"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#737373] mb-1">
                Kart Üzerindeki İsim
              </label>
              <input
                type="text"
                value={formData.name_on_card}
                onChange={(e) =>
                  setFormData({ ...formData, name_on_card: e.target.value })
                }
                placeholder="Ad Soyad"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                required
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 py-3 bg-[#23A6F0] text-white font-bold rounded-lg hover:bg-[#1a8cd4] cursor-pointer"
              >
                {editingCard ? "Güncelle" : "Kaydet"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                İptal
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentStep;

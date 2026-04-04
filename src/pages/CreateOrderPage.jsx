// src/pages/CreateOrderPage.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddresses,
  createAddress,
  editAddress,
  removeAddress,
} from "../store/actions/addressActions";
import { useNavigate } from "react-router-dom";

// SVG İkonlar
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

const CreateOrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { addresses, loading } = useSelector((state) => state.address || {});
  const { cart } = useSelector((state) => state.shoppingCart);

  const [showForm, setShowForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [editingAddress, setEditingAddress] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let success;
    if (editingAddress) {
      success = await dispatch(editAddress(editingAddress.id, formData));
    } else {
      success = await dispatch(createAddress(formData));
    }
    if (success) {
      resetForm();
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingAddress(null);
    setFormData({
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    });
  };

  const handleEdit = (addr) => {
    setEditingAddress(addr);
    setFormData({
      title: addr.title,
      name: addr.name,
      surname: addr.surname,
      phone: addr.phone,
      city: addr.city,
      district: addr.district,
      neighborhood: addr.neighborhood,
      address: addr.address,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bu adresi silmek istediğinize emin misiniz?")) {
      const success = await dispatch(removeAddress(id));
      if (success && selectedAddress === id) {
        setSelectedAddress(null);
      }
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const cities = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-8 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#252B42] mb-8">
          Sipariş Oluştur
        </h1>

        {/* Step Indicator */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#23A6F0] text-white flex items-center justify-center font-bold">
              1
            </span>
            <span className="font-medium text-[#23A6F0]">Adres Bilgileri</span>
          </div>
          <div className="w-16 h-0.5 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center font-bold">
              2
            </span>
            <span className="font-medium text-gray-500">Ödeme Seçenekleri</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Taraf - Adresler */}
          <div className="lg:col-span-2">
            {/* Kayıtlı Adresler */}
            {addresses && addresses.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-[#252B42] mb-4">
                  Kayıtlı Adreslerim
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      onClick={() => setSelectedAddress(addr.id)}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all relative group ${
                        selectedAddress === addr.id
                          ? "border-[#23A6F0] bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {/* İkonlar - Sağ Üst Köşe */}
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(addr);
                          }}
                          className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors cursor-pointer"
                          title="Düzenle"
                        >
                          <EditIcon />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(addr.id);
                          }}
                          className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors cursor-pointer"
                          title="Sil"
                        >
                          <TrashIcon />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mb-2 pr-16">
                        <span className="font-bold text-[#252B42]">
                          {addr.title}
                        </span>
                        {selectedAddress === addr.id && (
                          <span className="text-[#23A6F0] text-xl">✓</span>
                        )}
                      </div>
                      <p className="text-sm text-[#737373]">
                        {addr.name} {addr.surname}
                      </p>
                      <p className="text-sm text-[#737373]">{addr.phone}</p>
                      <p className="text-sm text-[#737373] mt-2">
                        {addr.neighborhood}, {addr.district}, {addr.city}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Yeni Adres Ekle Butonu */}
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="w-full py-4 border-2 border-dashed border-[#23A6F0] text-[#23A6F0] rounded-xl font-bold hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <PlusIcon />
                Yeni Adres Ekle
              </button>
            )}

            {/* Adres Formu */}
            {showForm && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#252B42] mb-4">
                  {editingAddress ? "Adresi Düzenle" : "Yeni Adres Ekle"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#737373] mb-1">
                        Adres Başlığı
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Ev, İş, vb."
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#737373] mb-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="05xx xxx xx xx"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#737373] mb-1">
                        Ad
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#737373] mb-1">
                        Soyad
                      </label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#737373] mb-1">
                        İl
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                        required
                      >
                        <option value="">Seçiniz</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#737373] mb-1">
                        İlçe
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#737373] mb-1">
                        Mahalle
                      </label>
                      <input
                        type="text"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#737373] mb-1">
                      Açık Adres
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Sokak, bina ve kapı numarası..."
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#23A6F0]"
                      required
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#23A6F0] text-white font-bold rounded-lg hover:bg-[#1a8cd4] transition-colors cursor-pointer"
                    >
                      {editingAddress ? "Güncelle" : "Kaydet"}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      İptal
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sağ Taraf - Sipariş Özeti */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#252B42] mb-6">
                Sipariş Özeti
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#737373]">
                  <span>Ürün Toplamı ({cart.length})</span>
                  <span>
                    $
                    {cart
                      .reduce(
                        (total, item) =>
                          total + item.product.price * item.count,
                        0,
                      )
                      .toFixed(2)}
                  </span>
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
                  <span className="font-bold text-[#252B42] text-lg">
                    Toplam
                  </span>
                  <span className="text-2xl font-bold text-[#23A6F0]">
                    $
                    {cart
                      .reduce(
                        (total, item) =>
                          total + item.product.price * item.count,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                disabled={!selectedAddress}
                onClick={() => alert("Ödeme sayfasına yönlendiriliyor...")}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  selectedAddress
                    ? "bg-[#23A6F0] text-white hover:bg-[#1a8cd4] cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Kaydet ve Devam Et ›
              </button>

              {!selectedAddress && (
                <p className="text-xs text-red-500 text-center mt-2">
                  Lütfen bir adres seçin
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;

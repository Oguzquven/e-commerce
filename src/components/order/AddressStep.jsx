// src/components/order/AddressStep.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddresses,
  createAddress,
  editAddress,
  removeAddress,
} from "../../store/actions/addressActions";

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

const AddressStep = ({ selectedAddress, setSelectedAddress }) => {
  const dispatch = useDispatch();
  const { addresses } = useSelector((state) => state.address || {});

  // Form görünürlüğü için state
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  // Form verileri için state
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
      // Güncelleme
      success = await dispatch(editAddress(editingAddress.id, formData));
    } else {
      // Yeni ekleme
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
      title: addr.title || "",
      name: addr.name || "",
      surname: addr.surname || "",
      phone: addr.phone || "",
      city: addr.city || "",
      district: addr.district || "",
      neighborhood: addr.neighborhood || "",
      address: addr.address || "",
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

  const handleAddNew = () => {
    resetForm();
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      {/* Kayıtlı Adresler */}
      {addresses?.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6">
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
                  <span className="font-bold text-[#252B42]">{addr.title}</span>
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
          onClick={handleAddNew}
          className="w-full py-4 border-2 border-dashed border-[#23A6F0] text-[#23A6F0] rounded-xl font-bold hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <PlusIcon /> Yeni Adres Ekle
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
                onClick={resetForm}
                className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
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

export default AddressStep;

// src/layout/Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  Menu,
  X,
  LogOut,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";
import { setUser } from "../store/actions/clientActions";
import {
  removeFromCart,
  updateCartItem,
} from "../store/actions/shoppingCartActions";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileUserOpen, setMobileUserOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false); // YENİ: Cart dropdown
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const pagesRef = useRef(null);
  const authRef = useRef(null);
  const shopRef = useRef(null);
  const cartRef = useRef(null); // YENİ: Cart ref

  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.client.categories);
  const { cart } = useSelector((state) => state.shoppingCart); // YENİ: Cart state
  const dispatch = useDispatch();

  const kadinCategories = categories.filter((cat) => cat.gender === "k");
  const erkekCategories = categories.filter((cat) => cat.gender === "e");

  // Sepet hesaplamaları
  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ı/g, "i")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
      if (authRef.current && !authRef.current.contains(event.target)) {
        setAuthDropdownOpen(false);
      }
      if (shopRef.current && !shopRef.current.contains(event.target)) {
        setShopDropdownOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartDropdownOpen(false);
      }
    };

    if (
      pagesDropdownOpen ||
      authDropdownOpen ||
      shopDropdownOpen ||
      cartDropdownOpen
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pagesDropdownOpen, authDropdownOpen, shopDropdownOpen, cartDropdownOpen]);

  useEffect(() => {
    setPagesDropdownOpen(false);
    setAuthDropdownOpen(false);
    setShopDropdownOpen(false);
    setCartDropdownOpen(false); // YENİ
    setMobileMenuOpen(false);
    setMobileShopOpen(false);
    setMobileUserOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setUser({}));
    setMobileUserOpen(false);
  };

  // Sepet item güncelleme
  const handleUpdateCount = (productId, newCount) => {
    if (newCount <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, newCount));
    }
  };

  // Sepetten kaldırma
  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <header
      id="main-header"
      className={`w-full transition-all duration-300 ${scrolled ? "shadow-lg bg-white" : ""}`}
    >
      {/* Üst Bar */}
      <div className="hidden md:block bg-[#252B42] text-white py-3">
        <div className="flex justify-between items-center px-6 lg:px-12">
          <div className="flex items-center gap-6 text-sm shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap hover:text-[#23A6F0] transition-colors cursor-pointer group">
              <Phone size={14} className="group-hover:animate-pulse" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap hover:text-[#23A6F0] transition-colors cursor-pointer">
              <Mail size={14} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          <div className="text-sm font-medium text-center px-4 flex-1">
            Follow Us and get a chance to win 80% off
          </div>

          <div className="flex items-center gap-4 text-sm shrink-0">
            <span className="hidden sm:inline whitespace-nowrap">
              Follow Us :
            </span>
            <div className="flex items-center gap-3">
              {[Instagram, Youtube, Facebook, Twitter].map((Icon, index) => (
                <Icon
                  key={index}
                  size={16}
                  className="cursor-pointer hover:text-[#23A6F0] hover:scale-110 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div
        className={`bg-white py-4 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="flex justify-between items-center px-6 lg:px-12">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-[#252B42] hover:scale-105 transition-transform duration-300"
          >
            Bandage
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#737373]">
            {/* ... mevcut nav linkleri (Home, Shop, About, Blog, Contact, Pages) ... */}
            <Link
              to="/"
              className="relative hover:text-[#252B42] transition-colors duration-300 group"
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23A6F0] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            {/* Shop Dropdown */}
            <div className="relative" ref={shopRef}>
              <button
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                className="flex items-center gap-1 hover:text-[#252B42] transition-colors cursor-pointer group"
              >
                <span className="relative">
                  Shop
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23A6F0] transition-all duration-300 group-hover:w-full" />
                </span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${shopDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                  shopDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2 gap-6 p-6">
                  <div>
                    <h3 className="font-bold text-[#252B42] mb-4 pb-2 border-b border-gray-200">
                      Kadın
                    </h3>
                    <div className="space-y-2">
                      {kadinCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/shop/kadin/${createSlug(category.title)}/${category.id}`}
                          className="block text-sm text-[#737373] hover:text-[#23A6F0] hover:pl-2 transition-all duration-300"
                          onClick={() => setShopDropdownOpen(false)}
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#252B42] mb-4 pb-2 border-b border-gray-200">
                      Erkek
                    </h3>
                    <div className="space-y-2">
                      {erkekCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/shop/erkek/${createSlug(category.title)}/${category.id}`}
                          className="block text-sm text-[#737373] hover:text-[#23A6F0] hover:pl-2 transition-all duration-300"
                          onClick={() => setShopDropdownOpen(false)}
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="relative hover:text-[#252B42] transition-colors duration-300 group"
            >
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23A6F0] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            <Link
              to="#"
              className="relative hover:text-[#252B42] transition-colors duration-300 group"
            >
              <span className="relative">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23A6F0] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="relative hover:text-[#252B42] transition-colors duration-300 group"
            >
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23A6F0] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            {/* Pages Dropdown */}
            <div className="relative" ref={pagesRef}>
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className="flex items-center gap-1 hover:text-[#252B42] transition-colors cursor-pointer group"
              >
                <span className="relative">
                  Pages
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23A6F0] transition-all duration-300 group-hover:w-full" />
                </span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${pagesDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                  pagesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                {[
                  { to: "/team", label: "Team" },
                  { to: "#", label: "Pricing" },
                  { to: "#", label: "FAQ" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block px-4 py-3 text-sm text-[#737373] hover:text-[#23A6F0] hover:bg-gray-50 hover:pl-6 transition-all duration-300"
                    onClick={() => setPagesDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
            {user.email ? (
              <div className="flex items-center gap-3 group/user">
                <div className="relative cursor-pointer">
                  <img
                    src={
                      user.gravatarUrl || "https://gravatar.com/avatar/?d=mp"
                    }
                    alt={user.name}
                    className="w-9 h-9 rounded-full border-2 border-[#23A6F0] transition-all duration-300 group-hover/user:scale-110 group-hover/user:border-[#1a8fd4] object-cover"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/user:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-50">
                    {user.email}
                  </div>
                </div>

                <span className="text-sm font-semibold text-[#252B42] group-hover/user:text-[#23A6F0] transition-colors duration-300 cursor-default">
                  {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="relative text-sm font-medium text-red-500 px-4 py-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer group/logout"
                >
                  <span className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover/logout:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/logout:text-white">
                    <LogOut
                      size={14}
                      className="transition-all duration-300 group-hover/logout:rotate-180"
                    />
                    Logout
                  </span>
                </button>
              </div>
            ) : (
              <div className="relative" ref={authRef}>
                <button
                  onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium hover:text-[#1a8fd4] transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <User
                    size={16}
                    className="hover:rotate-12 transition-transform duration-300"
                  />
                  <span>Login / Register</span>
                </button>

                <div
                  className={`absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                    authDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-sm text-[#737373] hover:text-[#23A6F0] hover:bg-gray-50 hover:pl-6 transition-all duration-300"
                    onClick={() => setAuthDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-3 text-sm text-[#737373] hover:text-[#23A6F0] hover:bg-gray-50 hover:pl-6 transition-all duration-300"
                    onClick={() => setAuthDropdownOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <Search
                size={18}
                className="cursor-pointer hover:text-[#1a8fd4] hover:scale-110 hover:rotate-6 transition-all duration-300"
              />

              {/* YENİ: ShoppingCart with Dropdown */}
              <div className="relative" ref={cartRef}>
                <button
                  onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
                  className="relative cursor-pointer hover:text-[#1a8fd4] hover:scale-110 transition-all duration-300"
                >
                  <ShoppingCart size={18} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#E77C40] text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                      {cartItemCount}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                <div
                  className={`absolute top-full right-0 mt-3 w-[380px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                    cartDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-[#23A6F0]/5 to-transparent">
                    <h3 className="font-bold text-[#252B42] flex items-center gap-2">
                      <ShoppingCart size={18} className="text-[#23A6F0]" />
                      Sepetim ({cartItemCount} Ürün)
                    </h3>
                    <button
                      onClick={() => setCartDropdownOpen(false)}
                      className="text-[#737373] hover:text-[#252B42] hover:rotate-90 transition-all duration-300 cursor-pointer"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Items */}
                  <div className="max-h-[320px] overflow-y-auto">
                    {cart.length === 0 ? (
                      <div className="p-8 text-center">
                        <ShoppingCart
                          size={48}
                          className="mx-auto text-gray-200 mb-3"
                        />
                        <p className="text-[#737373] text-sm">Sepetiniz boş</p>
                        <Link
                          to="/shop"
                          onClick={() => setCartDropdownOpen(false)}
                          className="inline-block mt-3 text-[#23A6F0] text-sm font-medium hover:underline"
                        >
                          Alışverişe Başla
                        </Link>
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex gap-3 p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors group"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-[#252B42] truncate group-hover:text-[#23A6F0] transition-colors">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-[#737373] mt-1">
                              ${item.product.price} x {item.count}
                            </p>

                            {/* Count Controls */}
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() =>
                                  handleUpdateCount(
                                    item.product.id,
                                    item.count - 1,
                                  )
                                }
                                className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors cursor-pointer"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-sm font-medium text-[#252B42] w-6 text-center">
                                {item.count}
                              </span>
                              <button
                                onClick={() =>
                                  handleUpdateCount(
                                    item.product.id,
                                    item.count + 1,
                                  )
                                }
                                className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors cursor-pointer"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>

                          {/* Price & Remove */}
                          <div className="flex flex-col items-end justify-between">
                            <button
                              onClick={() => handleRemoveItem(item.product.id)}
                              className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                            >
                              <Trash2 size={16} />
                            </button>
                            <span className="text-sm font-bold text-[#23A6F0]">
                              ${(item.product.price * item.count).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Footer */}
                  {cart.length > 0 && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#737373] text-sm">Toplam:</span>
                        <span className="text-xl font-bold text-[#252B42]">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          to="/cart"
                          onClick={() => setCartDropdownOpen(false)}
                          className="py-2.5 border-2 border-[#23A6F0] text-[#23A6F0] font-bold text-center rounded-lg hover:bg-[#23A6F0] hover:text-white transition-all duration-300 text-sm"
                        >
                          Sepete Git
                        </Link>
                        <Link
                          to="/checkout"
                          onClick={() => setCartDropdownOpen(false)}
                          className="py-2.5 bg-[#23A6F0] text-white font-bold text-center rounded-lg hover:bg-[#1a8cd4] transition-all duration-300 text-sm"
                        >
                          Satın Al
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Heart
                size={18}
                className="cursor-pointer hover:text-[#1a8fd4] hover:scale-110 hover:rotate-6 transition-all duration-300"
              />
            </div>
          </div>

          {/* Mobile Icons */}
          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4 text-[#252B42]">
            <Search
              size={20}
              className="cursor-pointer hover:scale-110 transition-transform"
            />

            {/* Mobil Sepet - Dropdown */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
                className="relative cursor-pointer hover:scale-110 transition-transform"
              >
                <ShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#E77C40] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobil Cart Dropdown */}
              <div
                className={`fixed top-[60px] left-0 right-0 bg-white shadow-xl border-b border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                  cartDropdownOpen
                    ? "max-h-[70vh] opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-[#23A6F0]/5 to-transparent">
                  <h3 className="font-bold text-[#252B42] flex items-center gap-2 text-sm">
                    <ShoppingCart size={16} className="text-[#23A6F0]" />
                    Sepetim ({cartItemCount} Ürün)
                  </h3>
                  <button
                    onClick={() => setCartDropdownOpen(false)}
                    className="text-[#737373] hover:text-[#252B42] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Items */}
                <div className="max-h-[50vh] overflow-y-auto p-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart
                        size={48}
                        className="mx-auto text-gray-200 mb-3"
                      />
                      <p className="text-[#737373] text-sm">Sepetiniz boş</p>
                      <button
                        onClick={() => {
                          setCartDropdownOpen(false);
                          window.location.href = "/shop";
                        }}
                        className="mt-3 text-[#23A6F0] text-sm font-medium"
                      >
                        Alışverişe Başla
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex gap-3 pb-4 border-b border-gray-50"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-[#252B42] truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-[#737373] mt-1">
                              ${item.product.price}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() =>
                                  handleUpdateCount(
                                    item.product.id,
                                    item.count - 1,
                                  )
                                }
                                className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#737373]"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-sm font-medium w-6 text-center">
                                {item.count}
                              </span>
                              <button
                                onClick={() =>
                                  handleUpdateCount(
                                    item.product.id,
                                    item.count + 1,
                                  )
                                }
                                className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[#737373]"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-between">
                            <button
                              onClick={() => handleRemoveItem(item.product.id)}
                              className="text-gray-300 hover:text-red-500"
                            >
                              <Trash2 size={16} />
                            </button>
                            <span className="text-sm font-bold text-[#23A6F0]">
                              ${(item.product.price * item.count).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#737373] text-sm">Toplam:</span>
                      <span className="text-lg font-bold text-[#252B42]">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setCartDropdownOpen(false);
                        alert("Sipariş özelliği yakında!");
                      }}
                      className="w-full py-3 bg-[#23A6F0] text-white font-bold rounded-lg"
                    >
                      Satın Al
                    </button>
                  </div>
                )}
              </div>
            </div>

            {user.email ? (
              <button
                onClick={() => setMobileUserOpen(!mobileUserOpen)}
                className="relative"
              >
                <img
                  src={user.gravatarUrl || "https://gravatar.com/avatar/?d=mp"}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-[#23A6F0] object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
              </button>
            ) : null}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 hover:rotate-90 transition-transform duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile User Dropdown */}
        {mobileUserOpen && user.email && (
          <div className="md:hidden absolute top-full right-4 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-[#23A6F0] to-[#1a8fd4] text-white">
              <div className="flex items-center gap-3">
                <img
                  src={user.gravatarUrl || "https://gravatar.com/avatar/?d=mp"}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs opacity-90">{user.email}</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-3 text-sm text-[#737373] hover:text-[#23A6F0] hover:bg-blue-50 rounded-lg transition-all duration-300"
                onClick={() => setMobileUserOpen(false)}
              >
                <User size={16} />
                Profilim
              </Link>
              <Link
                to="/orders"
                className="flex items-center gap-2 px-4 py-3 text-sm text-[#737373] hover:text-[#23A6F0] hover:bg-blue-50 rounded-lg transition-all duration-300"
                onClick={() => setMobileUserOpen(false)}
              >
                <ShoppingCart size={16} />
                Siparişlerim
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300"
              >
                <LogOut size={16} />
                Çıkış Yap
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-full bg-white border-t border-gray-100 transition-all duration-500 overflow-hidden ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center py-6 gap-4 text-xl font-medium text-[#737373]">
            <Link
              to="/"
              className="hover:text-[#252B42] hover:scale-105 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <button
              onClick={() => setMobileShopOpen(!mobileShopOpen)}
              className="hover:text-[#252B42] hover:scale-105 transition-all duration-300"
            >
              Shop
            </button>

            {mobileShopOpen && (
              <div className="w-full px-6 animate-fade-in">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-left text-base">
                    <div>
                      <h4 className="font-bold text-[#252B42] mb-3 text-base border-b border-gray-200 pb-2">
                        Kadın
                      </h4>
                      <div className="space-y-2">
                        {kadinCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/shop/kadin/${createSlug(category.title)}/${category.id}`}
                            className="block text-[#737373] hover:text-[#23A6F0] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#252B42] mb-3 text-base border-b border-gray-200 pb-2">
                        Erkek
                      </h4>
                      <div className="space-y-2">
                        {erkekCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/shop/erkek/${createSlug(category.title)}/${category.id}`}
                            className="block text-[#737373] hover:text-[#23A6F0] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Link
              to="/about"
              className="hover:text-[#252B42] hover:scale-105 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/team"
              className="hover:text-[#252B42] hover:scale-105 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#252B42] hover:scale-105 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {!user.email ? (
              <div className="flex flex-col items-center gap-4 mt-2">
                <Link
                  to="/login"
                  className="text-[#23A6F0] hover:scale-105 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-[#23A6F0] hover:scale-105 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

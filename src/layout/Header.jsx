// src/layout/Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
} from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const pagesRef = useRef(null);
  const authRef = useRef(null);

  // Scroll animasyonu
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown dışına tıklayınca kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
      if (authRef.current && !authRef.current.contains(event.target)) {
        setAuthDropdownOpen(false);
      }
    };

    if (pagesDropdownOpen || authDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pagesDropdownOpen, authDropdownOpen]);

  // Sayfa değişince dropdown'ları kapat
  useEffect(() => {
    setPagesDropdownOpen(false);
    setAuthDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      id="main-header"
      className={`w-full transition-all duration-300 ${scrolled ? "shadow-lg bg-white" : ""}`}
    >
      {/* Üst Bar - Koyu Lacivert */}
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

      {/* Ana Header - Beyaz */}
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
            {[
              { to: "/", label: "Home" },
              { to: "/shop", label: "Shop", hasDropdown: true },
              { to: "/about", label: "About" },
              { to: "#", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="relative hover:text-[#252B42] transition-colors duration-300 group"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23A6F0] transition-all duration-300 group-hover:w-full" />
                </span>
                {item.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="inline ml-1 transition-transform group-hover:rotate-180"
                  />
                )}
              </Link>
            ))}

            {/* Pages Dropdown - Dışına tıklayınca kapanır */}
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
                    ? "opacity-100 visible translate-y-0 animate-fade-in-down"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                {[
                  { to: "/team", label: "Team" },
                  { to: "#", label: "Pricing" },
                  { to: "#", label: "FAQ" },
                ].map((item, index) => (
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
            {/* Auth Dropdown - Dışına tıklayınca kapanır */}
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
                    ? "opacity-100 visible translate-y-0 animate-fade-in-down"
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

            <div className="flex items-center gap-4">
              {[Search, ShoppingCart, Heart].map((Icon, index) => (
                <Icon
                  key={index}
                  size={18}
                  className="cursor-pointer hover:text-[#1a8fd4] hover:scale-110 hover:rotate-6 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Mobile Icons + Hamburger */}
          <div className="flex md:hidden items-center gap-4 text-[#252B42]">
            <Search
              size={20}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <ShoppingCart
              size={20}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 hover:rotate-90 transition-transform duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-full bg-white border-t border-gray-100 transition-all duration-500 overflow-hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center py-6 gap-4 text-lg font-medium text-[#737373]">
            {[
              { to: "/", label: "Home" },
              { to: "/shop", label: "Product" },
              { to: "/about", label: "About" },
              { to: "/team", label: "Team" },
              { to: "/contact", label: "Contact" },
            ].map((item, index) => (
              <Link
                key={item.label}
                to={item.to}
                className="hover:text-[#252B42] hover:scale-105 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(-10px)",
                  transition: `all 0.3s ease ${index * 100}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="w-full border-t border-gray-200 my-2" />
            <Link
              to="/login"
              className="hover:text-[#23A6F0] text-[#23A6F0] hover:scale-105 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-[#23A6F0] text-[#23A6F0] hover:scale-105 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

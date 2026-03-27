import { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <header id="main-header" className="w-full">
      {/* Üst Bar - Koyu Lacivert (Mobilde gizli) */}
      <div className="hidden md:block bg-[#252B42] text-white py-3">
        <div className="flex justify-between items-center px-6 lg:px-12">
          <div className="flex items-center gap-6 text-sm shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone size={14} />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
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
              <Instagram
                size={16}
                className="cursor-pointer hover:text-gray-300"
              />
              <Youtube
                size={16}
                className="cursor-pointer hover:text-gray-300"
              />
              <Facebook
                size={16}
                className="cursor-pointer hover:text-gray-300"
              />
              <Twitter
                size={16}
                className="cursor-pointer hover:text-gray-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ana Header - Beyaz */}
      <div className="bg-white py-4">
        <div className="flex justify-between items-center px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#737373]">
            <Link to="/" className="hover:text-[#252B42]">
              Home
            </Link>
            <Link
              to="/shop"
              className="flex items-center gap-1 hover:text-[#252B42]"
            >
              Shop <ChevronDown size={14} />
            </Link>
            <a href="#" className="hover:text-[#252B42]">
              About
            </a>
            <a href="#" className="hover:text-[#252B42]">
              Blog
            </a>
            <Link to="/contact" className="hover:text-[#252B42]">
              Contact
            </Link>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className="flex items-center gap-1 hover:text-[#252B42] transition-colors"
              >
                Pages{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${pagesDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 z-50 ${pagesDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
              >
                <Link
                  to="/team"
                  className="block px-4 py-3 text-sm text-[#737373] hover:text-[#23A6F0] hover:bg-gray-50 transition-colors"
                  onClick={() => setPagesDropdownOpen(false)}
                >
                  Team
                </Link>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-[#737373] hover:text-[#23A6F0] hover:bg-gray-50 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-[#737373] hover:text-[#23A6F0] hover:bg-gray-50 transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:text-[#1a8fd4]"
            >
              <User size={16} />
              <span>Login / Register</span>
            </a>
            <div className="flex items-center gap-4">
              <Search
                size={18}
                className="cursor-pointer hover:text-[#1a8fd4]"
              />
              <ShoppingCart
                size={18}
                className="cursor-pointer hover:text-[#1a8fd4]"
              />
              <Heart
                size={18}
                className="cursor-pointer hover:text-[#1a8fd4]"
              />
            </div>
          </div>

          {/* Mobile Icons + Hamburger */}
          <div className="flex md:hidden items-center gap-4 text-[#252B42]">
            <Search size={20} className="cursor-pointer" />
            <ShoppingCart size={20} className="cursor-pointer" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-full bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center py-6 gap-4 text-lg font-medium text-[#737373]">
            <Link
              to="/"
              className="hover:text-[#252B42]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:text-[#252B42]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              to="/team"
              className="hover:text-[#252B42]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#252B42]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

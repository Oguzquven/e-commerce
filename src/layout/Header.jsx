import { useState } from "react";
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

      {/* Ana Header - Beyaz (relative kaldırıldı) */}
      <div className="bg-white py-4">
        <div className="flex justify-between items-center px-6 lg:px-12">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#737373]">
            <a href="#" className="hover:text-[#252B42]">
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#252B42]"
            >
              Shop <ChevronDown size={14} />
            </a>
            <a href="#" className="hover:text-[#252B42]">
              About
            </a>
            <a href="#" className="hover:text-[#252B42]">
              Blog
            </a>
            <a href="#" className="hover:text-[#252B42]">
              Contact
            </a>
            <a href="#" className="hover:text-[#252B42]">
              Pages
            </a>
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

        {/* Mobile Menu - Static, hero'yu iter (absolute değil) */}
        <div
          className={`md:hidden w-full bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center py-6 gap-4 text-lg font-medium text-[#737373]">
            <a
              href="#"
              className="hover:text-[#252B42]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#252B42]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </a>
            <a
              href="#"
              className="hover:text-[#252B42]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-[#252B42]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

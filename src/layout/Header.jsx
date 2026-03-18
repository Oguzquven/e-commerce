import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
} from "lucide-react";

function Header() {
  return (
    <header id="main-header" className="w-full">
      {/* Üst Bar - Koyu Lacivert */}
      <div className="bg-[#252B42] text-white py-3">
        <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          <div className="text-sm font-medium hidden lg:block">
            Follow Us and get a chance to win 80% off
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="hidden sm:inline">Follow Us :</span>
            <div className="flex items-center gap-3">
              <Instagram
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
        <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>

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

          <div className="flex items-center gap-6 text-[#23A6F0]">
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:text-[#1a8fd4]"
            >
              <User size={16} />
              <span className="hidden sm:inline">Login / Register</span>
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
        </div>
      </div>
    </header>
  );
}

export default Header;

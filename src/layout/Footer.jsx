// src/layout/Footer.jsx
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Carrier", href: "#" },
    { name: "We are hiring", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const legalLinks = [
    { name: "About Us", href: "#" },
    { name: "Carrier", href: "#" },
    { name: "We are hiring", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const featuresLinks = [
    { name: "Business Marketing", href: "#" },
    { name: "User Analytic", href: "#" },
    { name: "Live Chat", href: "#" },
    { name: "Unlimited Support", href: "#" },
  ];

  const resourcesLinks = [
    { name: "IOS & Android", href: "#" },
    { name: "Watch a Demo", href: "#" },
    { name: "Customers", href: "#" },
    { name: "API", href: "#" },
  ];

  return (
    <footer className="w-full bg-white">
      {/* Üst kısım - Bandage ve sosyal medya - Sadece desktop'ta görünür */}
      <div className="hidden md:block w-full bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-[#252B42] text-2xl font-bold">Bandage</h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[#23A6F0] hover:text-[#1a94d8] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#23A6F0] hover:text-[#1a94d8] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#23A6F0] hover:text-[#1a94d8] transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ana içerik - Linkler */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12">
        {/* Flex ile sıkıştırılmış hizalama */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
          {/* Company Info */}
          <div className="md:w-auto">
            <h4 className="text-[#252B42] font-bold text-lg md:text-base mb-5 md:mb-4">
              Company Info
            </h4>
            <ul className="space-y-4 md:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#737373] text-base md:text-sm hover:text-[#23A6F0] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:w-auto">
            <h4 className="text-[#252B42] font-bold text-lg md:text-base mb-5 md:mb-4">
              Legal
            </h4>
            <ul className="space-y-4 md:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#737373] text-base md:text-sm hover:text-[#23A6F0] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="md:w-auto">
            <h4 className="text-[#252B42] font-bold text-lg md:text-base mb-5 md:mb-4">
              Features
            </h4>
            <ul className="space-y-4 md:space-y-3">
              {featuresLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#737373] text-base md:text-sm hover:text-[#23A6F0] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:w-auto">
            <h4 className="text-[#252B42] font-bold text-lg md:text-base mb-5 md:mb-4">
              Resources
            </h4>
            <ul className="space-y-4 md:space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#737373] text-base md:text-sm hover:text-[#23A6F0] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch - En sağda ve geniş */}
          <div className="md:w-auto md:min-w-[200px] lg:min-w-[240px]">
            <h4 className="text-[#252B42] font-bold text-lg md:text-base mb-5 md:mb-4">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4 md:gap-3">
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 min-w-0 px-4 py-3 bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-md text-sm text-[#737373] focus:outline-none focus:border-[#23A6F0]"
                />
                <button className="px-6 py-3 bg-[#23A6F0] text-white text-sm font-bold rounded-r-md hover:bg-[#1a94d8] transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-[#737373] text-sm md:text-xs">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alt kısım - Copyright */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-[#737373] text-sm font-bold text-center md:text-left">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/ClientLogos.jsx
import React from "react";

const ClientLogos = () => {
  const logos = [
    {
      name: "hooli",
      src: "/images/fa-brands-1.png",
    },
    {
      name: "lyft",
      src: "/images/fa-brands-2.png",
    },
    {
      name: "leaf",
      src: "/images/fa-brands-3.png",
    },
    {
      name: "stripe",
      src: "/images/fa-brands-4.png",
    },
    {
      name: "aws",
      src: "/images/fa-brands-5.png",
    },
    {
      name: "reddit",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg",
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-12">
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  if (logo.name === "reddit") {
                    e.target.src =
                      "https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png";
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;

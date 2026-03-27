// src/components/TeamMember.jsx
import React from "react";

const TeamMember = ({ name, role, company, image }) => {
  return (
    <div className="flex flex-col text-left group cursor-pointer">
      {/* Image Container - Figma'daki gibi 240x333 */}
      <div className="w-full aspect-[240/333] overflow-hidden mb-5 relative rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center 
                     transition-transform duration-500 ease-out
                     group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-[#23A6F0]/0 group-hover:bg-[#23A6F0]/10 
                        transition-colors duration-300 rounded-lg"
        />
      </div>

      {/* Info - Sol hizalı */}
      <h3 className="text-[#252B42] text-base font-bold mb-1">{name}</h3>
      <p className="text-[#737373] text-sm font-medium">{role}</p>
      <p className="text-[#737373] text-xs mt-0.5">{company}</p>
    </div>
  );
};

export default TeamMember;
// src/components/about/AboutTeam.jsx
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Gökhan Özdemir",
    role: "Project Manager",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1635783306921?e=1776297600&v=beta&t=GSgqV997xk_MaY0yAm4fDv9BFiaBtMs_sr_TMh9weTU",
  },
  {
    id: 2,
    name: "Oğuz Güven",
    role: "Full Stack Developer",
    image: "/images/team/oguz.jpg",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    role: "UI Designer",
    image: "/images/team/team1.jpg",
  },
];

const AboutTeam = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#252B42] text-3xl lg:text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#737373] text-sm max-w-md mx-auto leading-relaxed">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Team Grid - Sadece 3 kişi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-[240/280] overflow-hidden mb-4 relative rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[#252B42] text-base font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-[#737373] text-sm font-medium mb-3">
                {member.role}
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-[#23A6F0] hover:text-[#1a8cd4] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-[#23A6F0] hover:text-[#1a8cd4] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-[#23A6F0] hover:text-[#1a8cd4] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

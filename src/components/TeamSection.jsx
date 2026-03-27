// src/components/TeamSection.jsx
import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    id: 1,
    name: "Gökhan Özdemir",
    role: "Project Manager",
    company: "Bandage",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1635783306921?e=1776297600&v=beta&t=GSgqV997xk_MaY0yAm4fDv9BFiaBtMs_sr_TMh9weTU",
  },
  {
    id: 2,
    name: "Oğuz Güven",
    role: "Full Stack Developer",
    company: "Bandage",
    image: "/images/team/oguz.jpg", // Kendi fotoğrafını eklersin hocam
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    role: "UI Designer",
    company: "Bandage",
    image: "/images/team/team1.jpg",
  },
  {
    id: 4,
    name: "Ronald Richards",
    role: "UX Researcher",
    company: "Bandage",
    image: "/images/team/team2.jpg",
  },
  {
    id: 5,
    name: "Floyd Miles",
    role: "Frontend Developer",
    company: "Bandage",
    image: "/images/team/team3.jpg",
  },
  {
    id: 6,
    name: "Robert Fox",
    role: "Backend Developer",
    company: "Bandage",
    image: "/images/team/team4.jpg",
  },
  {
    id: 7,
    name: "Jane Cooper",
    role: "Product Designer",
    company: "Bandage",
    image: "/images/team/team5.jpg",
  },
  {
    id: 8,
    name: "Jabos Jones",
    role: "DevOps Engineer",
    company: "Bandage",
    image: "/images/team/team6.jpg",
  },
];

const TeamSection = () => {
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

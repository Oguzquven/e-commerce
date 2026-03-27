// src/pages/AboutPage.jsx
import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutVideo from "../components/about/AboutVideo";
import AboutTeam from "../components/about/AboutTeam";
import AboutPartners from "../components/about/AboutPartners";
import AboutWorkWithUs from "../components/about/AboutWorkWithUs";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <AboutHero />
      <AboutStats />
      <AboutVideo />
      <AboutTeam />
      <AboutPartners />
      <AboutWorkWithUs />
    </div>
  );
};

export default AboutPage;

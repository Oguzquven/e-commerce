// src/components/about/AboutPartners.jsx
import React from "react";
import ClientLogos from "../ClientLogos";

const AboutPartners = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 px-6 lg:px-0">
          {/* Başlık - Mobilde 3 satır, Desktop 1 satır */}
          <h2 className="text-[#252B42] text-4xl lg:text-3xl font-bold mb-6 lg:mb-4">
            <span className="block lg:inline">Big</span>{" "}
            <span className="block lg:inline">Companies</span>{" "}
            <span className="block lg:inline">Are Here</span>
          </h2>

          {/* Paragraf - Mobilde 3 satır, Desktop 2 satır */}
          <p className="text-[#737373] text-lg lg:text-sm max-w-sm lg:max-w-md mx-auto leading-relaxed">
            <span className="block lg:hidden">
              Problems trying to resolve the conflict
              <br />
              between the two major realms of
              <br />
              Classical physics: Newtonian mechanics
            </span>
            <span className="hidden lg:block">
              Problems trying to resolve the conflict between
              <br />
              the two major realms of Classical physics: Newtonian mechanics
            </span>
          </p>
        </div>

        <ClientLogos />
      </div>
    </section>
  );
};

export default AboutPartners;

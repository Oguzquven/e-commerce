// src/components/about/AboutPartners.jsx
import React from "react";

const partners = [
  { name: "Hooli", logo: "/images/partners/hooli.svg" },
  { name: "Lyft", logo: "/images/partners/lyft.svg" },
  { name: "Stripe", logo: "/images/partners/stripe.svg" },
  { name: "AWS", logo: "/images/partners/aws.svg" },
  { name: "Reddit", logo: "/images/partners/reddit.svg" },
];

const AboutPartners = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-[#252B42] text-2xl lg:text-3xl font-bold mb-2">
            Big Companies Are Here
          </h2>
          <p className="text-[#737373] text-sm">
            Problems trying to resolve the conflict between the two major realms
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 lg:h-10 w-auto"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/100x40?text=${partner.name}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;

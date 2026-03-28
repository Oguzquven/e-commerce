// src/components/about/AboutStats.jsx
import React, { useState, useEffect, useRef } from "react";

const stats = [
  { value: 15, suffix: "K", label: "Happy Customers" },
  { value: 150, suffix: "K", label: "Monthly Visitors" },
  { value: 15, suffix: "", label: "Countries Worldwide" },
  { value: 100, suffix: "+", label: "Top Partners" },
];

const AboutStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            animateValue(index, 0, stat.value, 2000);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = (index, start, end, duration) => {
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);

      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = current;
        return newCounts;
      });

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[#252B42] text-3xl lg:text-4xl font-bold mb-2 tabular-nums">
                {counts[index]}
                {stat.suffix}
              </span>
              <span className="text-[#737373] text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

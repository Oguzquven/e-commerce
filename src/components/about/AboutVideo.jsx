// src/components/about/AboutVideo.jsx
import React, { useState } from "react";
import { Play } from "lucide-react";

const AboutVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer">
          {!isPlaying ? (
            <>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#23A6F0] rounded-full flex items-center justify-center hover:bg-[#1a8cd4] transition-colors"
              >
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              </button>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="About Video"
              className="w-full h-full"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;

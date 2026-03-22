// src/components/FeaturedPosts.jsx
import React from "react";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";

const posts = [
  {
    id: 1,
    image: pic1,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 2,
    image: pic2,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 3,
    image: pic3,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="w-full bg-white py-16 md:py-0 md:min-h-screen md:flex md:items-center md:justify-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16 px-4 sm:px-8">
          <span className="text-[#23A6F0] font-bold text-sm uppercase tracking-wide block mb-4">
            Practice Advice
          </span>
          <h2 className="text-[#252B42] text-4xl sm:text-5xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Featured
            <br className="md:hidden" /> Posts
          </h2>
          <p className="text-[#737373] max-w-[340px] sm:max-w-[450px] md:max-w-lg mx-auto text-sm md:text-base px-2 sm:px-4 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Tüm kartlar - Mobilde dikey, Desktop'ta yatay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col max-w-sm mx-auto md:max-w-none w-full cursor-pointer group"
            >
              {/* Görsel */}
              <div className="relative h-56 md:h-40 lg:h-48 overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                {/* NEW Badge */}
                <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded group-hover:animate-pulse">
                  NEW
                </span>
              </div>

              {/* İçerik */}
              <div className="p-5 md:p-4 lg:p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3 md:mb-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs ${
                        index === 0 ? "text-[#8EC2F2]" : "text-[#737373]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Başlık */}
                <h3 className="text-[#252B42] text-lg md:text-base lg:text-xl font-bold mb-2 md:mb-2 leading-tight group-hover:text-[#23A6F0] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Açıklama */}
                <p className="text-[#737373] text-sm mb-4 md:mb-3 leading-relaxed flex-grow">
                  {post.description}
                </p>

                {/* Tarih ve Yorum */}
                <div className="flex items-center justify-between text-xs text-[#737373] mb-4 md:mb-3">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    {post.comments}
                  </div>
                </div>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-[#737373] text-sm font-bold hover:text-[#23A6F0] transition-colors mt-auto group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;

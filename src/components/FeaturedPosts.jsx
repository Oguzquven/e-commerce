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
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <span className="text-[#23A6F0] font-bold text-sm uppercase tracking-wide">
            Practice Advice
          </span>
          <h2 className="text-[#252B42] text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured Posts
          </h2>
          <p className="text-[#737373] max-w-md mx-auto">
            Problems trying to resolve the conflict between
            <br className="hidden sm:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Görsel */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* NEW Badge */}
                <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded">
                  NEW
                </span>
              </div>

              {/* İçerik */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex gap-3 mb-3">
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
                <h3 className="text-[#252B42] text-xl font-bold mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Açıklama */}
                <p className="text-[#737373] text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>

                {/* Tarih ve Yorum */}
                <div className="flex items-center justify-between text-xs text-[#737373] mb-4">
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
                  className="inline-flex items-center text-[#737373] text-sm font-bold hover:text-[#23A6F0] transition-colors"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
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

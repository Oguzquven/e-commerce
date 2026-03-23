import React from "react";

const categories = [
  {
    id: 1,
    name: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    name: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    name: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    name: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
  },
];

const ShopBanner = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
      {/* Ürünlerle aynı max-width ve padding */}
      <div className="max-w-[1440px] mx-auto">
        {/* 
          Mobil: 1 sütun
          Tablet: 2 sütun
          Desktop: 5 sütun (gap-4 ile ürünlerle aynı)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-[300px] sm:h-[350px] lg:h-[320px] overflow-hidden group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop";
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-bold tracking-wider">
                  {category.name}
                </h3>
                <p className="text-sm mt-1">{category.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;

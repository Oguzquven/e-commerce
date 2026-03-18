function ProductCard({ image, title, department, price, salePrice, colors }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-1 px-1">
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-400">{department}</p>
        <div className="flex gap-2 text-sm">
          <span className="text-gray-400 line-through">${price}</span>
          <span className="text-green-500 font-semibold">${salePrice}</span>
        </div>
        {colors && (
          <div className="flex gap-1 mt-1">
            {colors.map((color, i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import productimage1 from "../assets/product1.png"; 

export default function ProductCard({ productimage, name, rating, price, originalPrice, inStock }) {
  const [isWishlist, setIsWishlist] = useState(false);
  
  // Default props if not provided
  name = name || "";
  rating = rating || 0;
  price = price || 0;
  originalPrice = originalPrice || 0;
  inStock = inStock !== undefined ? inStock : true;
  
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <div className="group relative flex flex-col rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        </div>
      )}
      
      
      {/* Product Image */}
      <div className="relative pt-4 px-4 flex items-center justify-center h-48 overflow-hidden">
        <img 
          src={productimage1} 
          alt={name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product name */}
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-12 mb-1">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14}
              className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="text-lg font-semibold text-purple-700">${price.toFixed(2)}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-400 line-through ml-2">${originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Stock status & Add to cart */}
        <div className="mt-auto flex items-center justify-between">
          <span className={`text-xs font-medium ${inStock ? 'text-green-600' : 'text-red-500'}`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          
          <button 
            className={`flex items-center justify-center px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
              inStock 
                ? 'bg-purple-100 text-purple-700 hover:bg-purple-700 hover:text-white' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!inStock}
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} className="mr-1" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
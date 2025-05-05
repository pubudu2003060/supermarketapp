import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState, useContext } from "react";
import productimage1 from "../assets/product1.png";
import { ThemeContext } from "./ThemeContext.component";


export default function ProductCard({ productimage, name, rating, price, originalPrice, inStock }) {
    const { darkMode } = useContext(ThemeContext);
    const [isWishlist, setIsWishlist] = useState(false);

    // Default props if not provided
    name = name || "";
    rating = rating || 0;
    price = price || 0;
    originalPrice = originalPrice || 0;
    inStock = inStock !== undefined ? inStock : true;

    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    return (
        <div className={`group w-64 md:w-70 mx-2 relative flex flex-col rounded-lg transition-all duration-300 overflow-hidden border ${
            darkMode 
                ? 'bg-gray-700 border-gray-700 shadow-md hover:shadow-purple-900/30' 
                : 'bg-white border-gray-300 shadow-sm hover:shadow-lg'
        }`}>
            {/* Discount badge */}
            {discount > 0 && (
                <div className="absolute top-2 left-2 z-10">
                    <span className={`${
                        darkMode 
                            ? 'bg-[#FF6EC7]' 
                            : 'bg-red-500'
                        } text-white text-xs font-medium px-2 py-1 rounded-full`}>
                        {discount}% OFF
                    </span>
                </div>
            )}

            {/* Wishlist button */}
            <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`absolute top-2 right-2 z-10 p-1.5 rounded-full transition-colors duration-200 ${
                    darkMode
                        ? isWishlist 
                            ? 'bg-[#BD33A4] text-white' 
                            : 'bg-gray-700 text-gray-300 hover:bg-[#BD33A4] hover:text-white'
                        : isWishlist 
                            ? 'bg-[#9966CC] text-white' 
                            : 'bg-gray-100 text-gray-400 hover:bg-[#9966CC] hover:text-white'
                }`}
                aria-label="Add to wishlist"
            >
                <Heart size={16} className={isWishlist ? 'fill-current' : ''} />
            </button>

            {/* Product Image */}
            <div className={`relative pt-4 px-4 flex items-center justify-center h-48 overflow-hidden ${
                darkMode ? 'bg-[#2A0A29]/50' : 'bg-[#E6E6FA]/30'
            }`}>
                <img
                    src={productimage1}
                    alt={name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Product name */}
                <h3 className={`text-sm font-medium line-clamp-2 min-h-12 mb-1 ${
                    darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                    {name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-1.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={`${
                                i < rating 
                                    ? darkMode ? 'text-[#B8860B] fill-[#B8860B]' : 'text-yellow-400 fill-yellow-400' 
                                    : darkMode ? 'text-gray-500' : 'text-gray-300'
                            }`}
                        />
                    ))}
                    <span className={`text-xs ml-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>({rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center mb-3">
                    <span className={`text-lg font-semibold ${
                        darkMode ? 'text-[#DA70D6]' : 'text-[#7851A9]'
                    }`}>${price.toFixed(2)}</span>
                    {originalPrice && originalPrice > price &&
                        <span className={`text-sm line-through ml-2 ${
                            darkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}>${originalPrice.toFixed(2)}</span>
                    }
                </div>

                {/* Stock status & Add to cart */}
                <div className="mt-auto flex items-center justify-between">
                    <span className={`text-xs font-medium ${
                        inStock 
                            ? darkMode ? 'text-[#50C878]' : 'text-green-600' 
                            : darkMode ? 'text-[#FF6EC7]' : 'text-red-500'
                    }`}>
                        {inStock ? 'In Stock' : 'Out of Stock'}
                    </span>

                    <button
                        className={`flex items-center justify-center px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                            inStock
                                ? darkMode 
                                    ? 'bg-[#483248] text-[#DA70D6] hover:bg-[#BD33A4] hover:text-white'
                                    : 'bg-purple-100 text-purple-700 hover:bg-[#7851A9] hover:text-white'
                                : darkMode 
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
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
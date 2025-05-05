import { MoveRight } from "lucide-react";
import { useRef, useContext } from "react";
import ProductCard from "../ProductCard";
import { ThemeContext } from "../ThemeContext.component";

const sampleProducts = [
    {
        id: 1,
        name: "Great Value Rising Crust Frozen Pizza, Supreme",
        rating: 2.5,
        price: 10.99,
        originalPrice: 11.99,
        inStock: true,
        image: "/api/placeholder/200/200"
    },
    {
        id: 2,
        name: "Organic Avocados, Bag of 5",
        rating: 4.8,
        price: 7.99,
        originalPrice: 7.99,
        inStock: true,
        image: "/api/placeholder/200/200"
    },
    {
        id: 3,
        name: "Fresh Ground Coffee, Medium Roast, 12oz",
        rating: 4.9,
        price: 9.49,
        originalPrice: 10.99,
        inStock: true,
        image: "/api/placeholder/200/200"
    },
    {
        id: 4,
        name: "Whole Grain Bread, 24oz Loaf",
        rating: 4.7,
        price: 4.49,
        originalPrice: 4.29,
        inStock: true,
        image: "/api/placeholder/200/200"
    },
    {
        id: 5,
        name: "Free-Range Large Eggs, Dozen",
        rating: 4.6,
        price: 5.99,
        originalPrice: 5.99,
        inStock: false,
        image: "/api/placeholder/200/200"
    },
    {
        id: 6,
        name: "Organic Honeycrisp Apples, 3lb Bag",
        rating: 4.8,
        price: 9.99,
        originalPrice: 8.49,
        inStock: true,
        image: "/api/placeholder/200/200"
    },
];
export default function DiscountProducts() {
    const scrollRef = useRef(null);
    const { darkMode } = useContext(ThemeContext);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className={`py-8 md:py-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                            Best Selling Items
                        </h2>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>
                            Our most selling products based on sales
                        </p>
                    </div>

                    <a
                        href="/products/best-selling"
                        className={`hidden md:flex items-center ${darkMode ? 'text-purple-300 hover:text-purple-400' : 'text-purple-700 hover:text-purple-800'} font-medium transition duration-200`}
                    >
                        View All
                        <MoveRight size={18} className="ml-1" />
                    </a>
                </div>

                {/* Products Scroll Controls - Desktop */}
                <div className="hidden md:flex justify-end mb-4">
                    <button
                        onClick={scrollLeft}
                        className={`p-2 rounded-full ${darkMode 
                            ? 'bg-gray-800 border-gray-700 hover:border-purple-500 text-gray-200' 
                            : 'bg-white border border-gray-200 hover:border-purple-300 text-gray-800'
                        } shadow-sm hover:bg-purple-50 mr-2 transition duration-200`}
                        aria-label="Scroll left"
                    >
                        <MoveRight size={20} className="transform rotate-180" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className={`p-2 rounded-full ${darkMode 
                            ? 'bg-gray-800 border-gray-700 hover:border-purple-500 text-gray-200' 
                            : 'bg-white border border-gray-200 hover:border-purple-300 text-gray-800'
                        } shadow-sm hover:bg-purple-50 transition duration-200`}
                        aria-label="Scroll right"
                    >
                        <MoveRight size={20} />
                    </button>
                </div>

                {/* Products Horizontal Scroll */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scroll-px-4 scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {sampleProducts.map((product) => (
                        <div 
                            key={product.id}
                            
                        >
                            <ProductCard
                                productimage={product.image}
                                name={product.name}
                                rating={product.rating}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                inStock={product.inStock}
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="flex justify-center mt-4 md:hidden">
                    <a
                        href="/products/best-selling"
                        className={`flex items-center justify-center w-full py-3 rounded-lg ${
                            darkMode
                            ? 'bg-gray-800 border border-purple-500 text-purple-300 hover:bg-gray-750'
                            : 'border border-purple-700 text-purple-700 hover:bg-purple-50'
                        } font-medium transition duration-200`}
                    >
                        View All Products
                        <MoveRight size={18} className="ml-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}
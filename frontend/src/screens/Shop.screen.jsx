import { ShoppingBag, Home, User, Globe, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../components/ThemeContext.component.jsx";
import ProductCard from "../components/ProductCard.jsx";

const Shop = () => {
    const { darkMode } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(false);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
    const [showFilters, setShowFilters] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Featured");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setShowFilters(true);
            } else {
                setShowFilters(false);
            }
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const categories = [
        { icon: <ShoppingBag size={isMobile ? 20 : 24} />, name: "Grocery" },
        { icon: <Home size={isMobile ? 20 : 24} />, name: "Household" },
        { icon: <User size={isMobile ? 20 : 24} />, name: "Personal Care" },
        { icon: <Globe size={isMobile ? 20 : 24} />, name: "Specialty Items" }
    ];

    const productCategories = ['Fruits & Vegetables', 'Dairy & Eggs', 'Bakery', 'Meat & Seafood', 'Frozen Foods'];
    const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Customer Rating', 'New Arrivals'];

    return (
        <section className={`${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'} min-h-screen transition-colors duration-300`}>
            <div className="w-full mx-auto px-4 md:px-6 lg:px-8 ">
                {/* Header Section */}
                <div className="text-center py-12">
                    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                        Grocery Store with Different Treasures
                    </h2>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        We have prepared special discounts for you on grocery products.
                        Explore our selection of high-quality items at competitive prices.
                    </p>
                </div>

                {/* Categories Section */}
                <div className="mb-12">
                    <h3 className={`text-xl md:text-2xl font-semibold text-center mb-8 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                        Browse Categories
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {categories.map((category, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`flex flex-col items-center p-6 rounded-lg border transition-all duration-300 ${darkMode
                                        ? 'bg-gray-800 border-gray-700 hover:border-purple-500 hover:bg-gray-750'
                                        : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md'
                                    } group`}
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${darkMode
                                        ? 'bg-gray-700 text-purple-400 group-hover:bg-purple-600 group-hover:text-white'
                                        : 'bg-purple-100 text-purple-700 group-hover:bg-purple-200 group-hover:text-purple-800'
                                    }`}>
                                    {category.icon}
                                </div>
                                <span className={`font-medium transition-colors duration-300 ${darkMode
                                        ? 'text-gray-200 group-hover:text-purple-400'
                                        : 'text-gray-800 group-hover:text-purple-700'
                                    }`}>
                                    {category.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Filter Toggle for Mobile */}
                <div className="md:hidden mb-6">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center justify-between w-full p-4 rounded-lg ${darkMode
                                ? 'bg-gray-800 text-gray-200 border border-gray-700 hover:border-purple-500'
                                : 'bg-white text-gray-800 border border-gray-200 hover:border-purple-300'
                            }`}
                    >
                        <div className="flex items-center">
                            <SlidersHorizontal size={18} className="mr-2" />
                            <span>Filter Products</span>
                        </div>
                        <ChevronDown size={18} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {/* Sort Dropdown */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                    <div className={`text-sm mb-4 md:mb-0 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Showing 10 out of 20 Results
                    </div>

                    <div className="relative w-full md:w-64">
                        <select
                            value={selectedSort}
                            onChange={(e) => setSelectedSort(e.target.value)}
                            className={`appearance-none w-full p-3 pr-8 rounded-lg border ${darkMode
                                    ? 'bg-gray-800 text-gray-200 border-gray-700'
                                    : 'bg-white text-gray-800 border-gray-200'
                                }`}
                        >
                            {sortOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <ChevronDown size={18} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        </div>
                    </div>
                </div>

                {/* Filter + Product Section */}
                <div className="grid md:grid-cols-4 gap-8 mb-16">
                    {/* Sidebar Filters */}
                    {showFilters && (
                        <aside className={`p-6 rounded-lg shadow-sm space-y-8 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                            {/* Price Range */}
                            <div>
                                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                                    Price Range
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="minprice" className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            Min Price
                                        </label>
                                        <input
                                            type="number"
                                            id="minprice"
                                            value={priceRange.min}
                                            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                                            className={`px-3 py-2 border rounded-md ${darkMode
                                                    ? 'bg-gray-700 border-gray-600 text-white'
                                                    : 'bg-gray-50 border-gray-200 text-gray-800'
                                                }`}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="maxprice" className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            Max Price
                                        </label>
                                        <input
                                            type="number"
                                            id="maxprice"
                                            value={priceRange.max}
                                            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                                            className={`px-3 py-2 border rounded-md ${darkMode
                                                    ? 'bg-gray-700 border-gray-600 text-white'
                                                    : 'bg-gray-50 border-gray-200 text-gray-800'
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Product Categories */}
                            <div>
                                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                                    Product Category
                                </h3>
                                <ul className="space-y-3">
                                    {productCategories.map((category, index) => (
                                        <li key={index} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={`cat-${index}`}
                                                className={`w-4 h-4 rounded ${darkMode ? 'accent-purple-400' : 'accent-purple-700'}`}
                                            />
                                            <label htmlFor={`cat-${index}`} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {category}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Product Status */}
                            <div>
                                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                                    Product Status
                                </h3>
                                <ul className="space-y-3">
                                    {['On Sale', 'In Stock', 'Top Rated'].map((status, index) => (
                                        <li key={index} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={`status-${index}`}
                                                className={`w-4 h-4 rounded ${darkMode ? 'accent-purple-400' : 'accent-purple-700'}`}
                                            />
                                            <label htmlFor={`status-${index}`} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {status}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Clear Filters Button */}
                            <div className="pt-2">
                                <button className={`w-full py-2 px-4 rounded-lg border text-sm font-medium transition-colors duration-200 ${darkMode
                                        ? 'border-gray-700 text-gray-300 hover:bg-gray-700'
                                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}>
                                    Clear All Filters
                                </button>
                            </div>
                        </aside>
                    )}

                    {/* Product Listing */}
                    <main className="md:col-span-3 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {[...Array(12)].map((_, index) => (
                                <div key={index}>
                                    <ProductCard
                                        productImage="/api/placeholder/200/200"
                                        name="Sample Product"
                                        rating={4.5}
                                        price={9.99}
                                        originalPrice={12.99}
                                        inStock={true}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12">
                            <div className="flex space-x-2">
                                {['1', '2', '3', '...', '10'].map((page, index) => (
                                    <button
                                        key={index}
                                        className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${page === '1'
                                                ? darkMode
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-purple-700 text-white'
                                                : darkMode
                                                    ? 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white'
                                                    : 'bg-white text-gray-700 hover:bg-purple-100 border border-gray-200'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default Shop;
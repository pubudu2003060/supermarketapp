import { ShoppingBag, Home, User, Globe, ChevronDown, Sliders, SlidersHorizontal, Search } from "lucide-react";
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
        <section className={`${
            darkMode ? 'bg-[#2A0A29] text-gray-200' : 'bg-[#E6E6FA] text-gray-800'
        } min-h-screen transition-colors duration-300`}>
            <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Header Section with improved styling */}
                <div className="text-center py-12">
                    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
                        darkMode ? 'text-[#DA70D6]' : 'text-[#7851A9]'
                    }`}>
                        Grocery Store with Different Treasures
                    </h2>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        We have prepared special discounts for you on grocery products. 
                        Explore our selection of high-quality items at competitive prices.
                    </p>
                </div>

                {/* Search Bar - New Addition */}
                <div className="mb-8">
                    <div className={`flex items-center max-w-lg mx-auto rounded-full overflow-hidden border ${
                        darkMode ? 'bg-[#483248] border-gray-700' : 'bg-white border-purple-200'
                    }`}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`flex-grow px-4 py-3 focus:outline-none ${
                                darkMode ? 'bg-[#483248] text-white placeholder-gray-400' : 'bg-white text-gray-800 placeholder-gray-500'
                            }`}
                        />
                        <button className={`px-4 py-3 ${
                            darkMode ? 'text-[#DA70D6] hover:text-[#BF40BF]' : 'text-[#7851A9] hover:text-[#9966CC]'
                        }`}>
                            <Search size={20} />
                        </button>
                    </div>
                </div>

                {/* Categories Section with updated styling */}
                <div className="mb-12">
                    <h3 className={`text-xl md:text-2xl font-semibold text-center mb-8 ${
                        darkMode ? 'text-[#DA70D6]' : 'text-[#7851A9]'
                    }`}>
                        Browse Categories
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {categories.map((category, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`flex flex-col items-center p-6 rounded-lg border transition-all duration-300 ${
                                    darkMode
                                        ? 'bg-[#483248] border-gray-700 hover:border-[#BD33A4] hover:shadow-lg hover:shadow-purple-900/20'
                                        : 'bg-white border-purple-100 hover:border-[#9966CC] hover:shadow-lg hover:shadow-purple-200/50'
                                } group`}
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                                    darkMode
                                        ? 'bg-[#2A0A29] text-[#DA70D6] group-hover:bg-[#BD33A4] group-hover:text-white'
                                        : 'bg-[#E6E6FA] text-[#7851A9] group-hover:bg-[#9966CC] group-hover:text-white'
                                }`}>
                                    {category.icon}
                                </div>
                                <span className={`font-medium transition-colors duration-300 ${
                                    darkMode
                                        ? 'text-gray-200 group-hover:text-[#DA70D6]'
                                        : 'text-gray-800 group-hover:text-[#7851A9]'
                                }`}>
                                    {category.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Filter Toggle for Mobile - New Addition */}
                <div className="md:hidden mb-6">
                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center justify-between w-full p-4 rounded-lg ${
                            darkMode 
                                ? 'bg-[#483248] text-white border border-gray-700' 
                                : 'bg-white text-gray-800 border border-purple-200'
                        }`}
                    >
                        <div className="flex items-center">
                            <SlidersHorizontal size={18} className="mr-2" />
                            <span>Filter Products</span>
                        </div>
                        <ChevronDown size={18} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {/* Sort Dropdown - New Addition */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                    <div className={`text-sm mb-4 md:mb-0 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        Showing 10 out of 20 Results
                    </div>
                    
                    <div className="relative w-full md:w-64">
                        <select
                            value={selectedSort}
                            onChange={(e) => setSelectedSort(e.target.value)}
                            className={`appearance-none w-full p-3 pr-8 rounded-lg border ${
                                darkMode 
                                    ? 'bg-[#483248] text-white border-gray-700' 
                                    : 'bg-white text-gray-800 border-purple-200'
                            }`}
                        >
                            {sortOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <ChevronDown size={18} className={
                                darkMode ? 'text-gray-400' : 'text-gray-500'
                            } />
                        </div>
                    </div>
                </div>

                {/* Filter + Product Section */}
                <div className="grid md:grid-cols-4 gap-8 mb-16">
                    {/* Sidebar Filters with improved styling */}
                    {showFilters && (
                        <aside className={`p-6 rounded-lg shadow-sm space-y-8 ${
                            darkMode ? 'bg-[#483248] border border-gray-700' : 'bg-white border border-purple-100'
                        }`}>
                            {/* Price Range */}
                            <div>
                                <h3 className={`text-lg font-semibold mb-4 ${
                                    darkMode ? 'text-[#DA70D6]' : 'text-[#7851A9]'
                                }`}>
                                    Price Range
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="minprice" className={`text-sm mb-1 ${
                                            darkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Min Price
                                        </label>
                                        <input 
                                            type="number" 
                                            id="minprice" 
                                            value={priceRange.min}
                                            onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                                            className={`px-3 py-2 border rounded-md ${
                                                darkMode 
                                                    ? 'bg-[#2A0A29] border-gray-700 text-white' 
                                                    : 'bg-[#E6E6FA]/50 border-purple-200 text-gray-800'
                                            }`} 
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="maxprice" className={`text-sm mb-1 ${
                                            darkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            Max Price
                                        </label>
                                        <input 
                                            type="number" 
                                            id="maxprice" 
                                            value={priceRange.max}
                                            onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                                            className={`px-3 py-2 border rounded-md ${
                                                darkMode 
                                                    ? 'bg-[#2A0A29] border-gray-700 text-white' 
                                                    : 'bg-[#E6E6FA]/50 border-purple-200 text-gray-800'
                                            }`} 
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Product Categories */}
                            <div>
                                <h3 className={`text-lg font-semibold mb-4 ${
                                    darkMode ? 'text-[#DA70D6]' : 'text-[#7851A9]'
                                }`}>
                                    Product Category
                                </h3>
                                <ul className="space-y-3">
                                    {productCategories.map((category, index) => (
                                        <li key={index} className="flex items-center space-x-2">
                                            <input 
                                                type="checkbox" 
                                                id={`cat-${index}`} 
                                                className={`w-4 h-4 rounded ${
                                                    darkMode ? 'accent-[#BD33A4]' : 'accent-[#7851A9]'
                                                }`} 
                                            />
                                            <label htmlFor={`cat-${index}`} className={`text-sm ${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                {category}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Product Status */}
                            <div>
                                <h3 className={`text-lg font-semibold mb-4 ${
                                    darkMode ? 'text-[#DA70D6]' : 'text-[#7851A9]'
                                }`}>
                                    Product Status
                                </h3>
                                <ul className="space-y-3">
                                    {['On Sale', 'In Stock', 'Top Rated'].map((status, index) => (
                                        <li key={index} className="flex items-center space-x-2">
                                            <input 
                                                type="checkbox" 
                                                id={`status-${index}`} 
                                                className={`w-4 h-4 rounded ${
                                                    darkMode ? 'accent-[#BD33A4]' : 'accent-[#7851A9]'
                                                }`} 
                                            />
                                            <label htmlFor={`status-${index}`} className={`text-sm ${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                {status}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Clear Filters Button - New Addition */}
                            <div className="pt-2">
                                <button className={`w-full py-2 px-4 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                                    darkMode 
                                    ? 'border-gray-700 text-gray-300 hover:bg-gray-700' 
                                    : 'border-purple-200 text-gray-600 hover:bg-purple-50'
                                }`}>
                                    Clear All Filters
                                </button>
                            </div>
                        </aside>
                    )}

                    {/* Product Listing with improved grid */}
                    <main className="md:col-span-3 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {[...Array(12)].map((_, index) => (
                                <div key={index}>
                                    <ProductCard
                                        productimage={"image"}
                                        name={"product"}
                                        rating={3} 
                                        price={6}
                                        originalPrice={4}
                                        inStock={true} 
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Pagination - New Addition */}
                        <div className="flex justify-center mt-12">
                            <div className="flex space-x-2">
                                {['1', '2', '3', '...', '10'].map((page, index) => (
                                    <button 
                                        key={index}
                                        className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                                            page === '1' 
                                                ? darkMode
                                                    ? 'bg-[#BD33A4] text-white'
                                                    : 'bg-[#7851A9] text-white'
                                                : darkMode
                                                    ? 'bg-[#483248] text-gray-300 hover:bg-[#BD33A4]/70 hover:text-white'
                                                    : 'bg-white text-gray-700 hover:bg-[#9966CC]/20 border border-purple-200'
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
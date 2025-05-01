import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <header className="w-full">
            {/* Top bar */}
            <div className="bg-purple-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:justify-between items-center py-2 text-sm">
                        <p className="hidden md:block">Welcome to Shopping.lk</p>
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="#" className="hover:text-purple-200 transition duration-200">About Us</a>
                            <a href="#" className="hover:text-purple-200 transition duration-200">Contact Us</a>
                            <a href="#" className="hover:text-purple-200 transition duration-200">Blog</a>
                        </div>
                        <p className="text-center py-1 md:py-0">We deliver to you every day from 7am to 11pm</p>
                        <a href="#" className="hidden md:block hover:text-purple-200 transition duration-200">Order Tracking</a>
                    </div>
                </div>
            </div>

            {/* Logo & Search bar */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-700 p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-purple-700">LOGO</h1>
                    </div>

                    {/* Search on desktop */}
                    <div className="hidden md:flex flex-1 mx-10">
                        <div className="relative w-full max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-700">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* User actions */}
                    <div className="flex items-center space-x-6">
                        {/* Search button mobile */}
                        <button
                            className="md:hidden text-gray-700"
                            onClick={toggleSearch}
                            aria-label="Toggle search"
                        >
                            <Search size={24} />
                        </button>

                        <a href="#" className="text-gray-700 hover:text-purple-700 transition duration-200">
                            <User size={24} />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-purple-700 transition duration-200 relative">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </a>
                    </div>
                </div>

                {/* Mobile search bar */}
                {isSearchOpen && (
                    <div className="mt-4 md:hidden">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="bg-gray-100 shadow-sm">
                <div className="container mx-auto px-4">
                    {/* Mobile menu */}
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="py-2">
                            <li><a href="/" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">Home</a></li>
                            <li><a href="#" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">Shop</a></li>
                            <li><a href="#" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">Fruits and Vegetables</a></li>
                            <li><a href="#" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">Beverages</a></li>
                            <li><a href="#" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">Household</a></li>
                            <li><a href="#" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">About Us</a></li>
                            <li><a href="#" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">Contact Us</a></li>
                            <li><a href="#" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">Blog</a></li>
                            <li><a href="#" className="block py-3 px-4 hover:bg-purple-100 text-gray-800">Order Tracking</a></li>
                        </ul>
                    </div>

                    {/* Desktop menu */}
                    <ul className="hidden md:flex items-center justify-center py-3 space-x-8">
                        <li><a href="/" className="text-gray-800 hover:text-purple-700 font-medium transition duration-200">Home</a></li>
                        <li>
                            <div className="relative group">
                                <a href="#" className="text-gray-800 hover:text-purple-700 font-medium transition duration-200 flex items-center">
                                    Shop
                                </a>
                            </div>
                        </li>
                        <li><a href="#" className="text-gray-800 hover:text-purple-700 font-medium transition duration-200">Fruits and Vegetables</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-purple-700 font-medium transition duration-200">Beverages</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-purple-700 font-medium transition duration-200">Household</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
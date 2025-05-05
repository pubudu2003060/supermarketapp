import { Search, User, ShoppingCart, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import logo from "../assets/logo.png";
import { ThemeContext } from "./ThemeContext.component";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    // Check user's preferred color scheme on mount
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }

        // Add listener for changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const toggleTheme = () => setDarkMode(!darkMode);

    // Apply theme to document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className={`w-full transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
            {/* Top bar */}
            <div className="bg-purple-600 dark:bg-purple-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:justify-between items-center py-2 text-sm">
                        <p className="hidden md:block font-medium">Welcome to Shopping.lk</p>
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#" className="hover:text-purple-200 transition duration-200">About Us</a>
                            <a href="#" className="hover:text-purple-200 transition duration-200">Contact Us</a>
                        </div>
                        <p className="text-center py-1 md:py-0">We deliver to you every day from 7am to 11pm</p>
                        <a href="#" className="hidden md:block hover:text-purple-200 transition duration-200">Order Tracking</a>
                    </div>
                </div>
            </div>

            {/* Logo & Search bar */}
            <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} transition-colors duration-300`}>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Mobile menu button */}
                        <button
                            className={`md:hidden p-2 rounded-md ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img
                                src={logo}
                                alt="Company Logo"
                                className="h-12 w-auto"
                            />
                        </div>

                        {/* Search on desktop */}
                        <div className="hidden md:flex flex-1 mx-10">
                            <div className="relative w-full max-w-2xl mx-auto">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className={`w-full py-2 px-4 pr-10 rounded-lg ${darkMode
                                            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500'
                                            : 'bg-white border-gray-300 focus:ring-purple-600'
                                        } focus:outline-none focus:ring-2 focus:border-transparent`}
                                />
                                <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-700'
                                    }`}>
                                    <Search size={20} />
                                </button>
                            </div>
                        </div>

                        {/* User actions */}
                        <div className="flex items-center space-x-6">
                            {/* Theme toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-700'} transition duration-200`}
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                            </button>

                            {/* Search button mobile */}
                            <button
                                className={`md:hidden ${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-700'}`}
                                onClick={toggleSearch}
                                aria-label="Toggle search"
                            >
                                <Search size={24} />
                            </button>

                            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-700'} transition duration-200`}>
                                <User size={24} />
                            </a>

                            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-700'} transition duration-200 relative`}>
                                <ShoppingCart size={24} />
                                <span className="absolute -top-2 -right-2 bg-red-600 dark:bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
                                    className={`w-full py-2 px-4 pr-10 rounded-lg ${darkMode
                                            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500'
                                            : 'bg-white border-gray-300 focus:ring-purple-600'
                                        } focus:outline-none focus:ring-2 focus:border-transparent`}
                                />
                                <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-700'
                                    }`}>
                                    <Search size={20} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className={`shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
                <div className="container mx-auto px-4">
                    {/* Mobile menu */}
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="py-2">
                            <li>
                                <a href="/" className={`block py-3 px-4 ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-purple-100'
                                    }`}>Home</a>
                            </li>
                            <li>
                                <a href="#" className={`block py-3 px-4 ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-purple-100'
                                    }`}>Shop</a>
                            </li>
                            <li>
                                <a href="#" className={`block py-3 px-4 ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-purple-100'
                                    }`}>Fruits and Vegetables</a>
                            </li>
                            <li>
                                <a href="#" className={`block py-3 px-4 ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-purple-100'
                                    }`}>Beverages</a>
                            </li>
                            <li>
                                <a href="#" className={`block py-3 px-4 ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-purple-100'
                                    }`}>Household</a>
                            </li>
                            <li>
                                <a href="#" className={`block py-3 px-4 ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-purple-100'
                                    }`}>About Us</a>
                            </li>
                            <li>
                                <a href="#" className={`block py-3 px-4 ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-purple-100'
                                    }`}>Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className={`block py-3 px-4 ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-purple-100'
                                    }`}>Order Tracking</a>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center justify-center py-3 space-x-8">
                            <li>
                                <a href="/" className={`font-medium text-lg ${darkMode
                                        ? 'text-gray-200 hover:text-purple-400'
                                        : 'text-gray-800 hover:text-purple-700'
                                    } transition duration-200`}>Home</a>
                            </li>
                            <li>
                                <a href="#" className={`font-medium text-lg ${darkMode
                                        ? 'text-gray-200 hover:text-purple-400'
                                        : 'text-gray-800 hover:text-purple-700'
                                    } transition duration-200`}>Shop</a>
                            </li>
                            <li>
                                <a href="#" className={`font-medium text-lg ${darkMode
                                        ? 'text-gray-200 hover:text-purple-400'
                                        : 'text-gray-800 hover:text-purple-700'
                                    } transition duration-200`}>Fruits & Vegetables</a>
                            </li>
                            <li>
                                <a href="#" className={`font-medium text-lg ${darkMode
                                        ? 'text-gray-200 hover:text-purple-400'
                                        : 'text-gray-800 hover:text-purple-700'
                                    } transition duration-200`}>Beverages</a>
                            </li>
                            <li>
                                <a href="#" className={`font-medium text-lg ${darkMode
                                        ? 'text-gray-200 hover:text-purple-400'
                                        : 'text-gray-800 hover:text-purple-700'
                                    } transition duration-200`}>Household</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
import { ShoppingBag, Home, User, Globe } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import heroimage1 from "../../assets/heroimage1.png";
import heroimage2 from "../../assets/heroimage2.png";
import heroimage3 from "../../assets/heroimage3.png";
import { ThemeContext } from "../ThemeContext.component";

export default function HeroSection() {

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const [isMobile, setIsMobile] = useState(false);
    const [heroHeight, setHeroHeight] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);

    const images = [heroimage1, heroimage2, heroimage3];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate hero height after header is loaded
    useEffect(() => {
        const calculateHeight = () => {
            const header = document.querySelector('header');
            if (header) {
                const height = header.offsetHeight;
                setHeaderHeight(height);
                setHeroHeight(`calc(100vh - ${height}px)`);
            }
        };

        // Initial calculation
        calculateHeight();

        // Recalculate on window resize
        window.addEventListener('resize', calculateHeight);

        // Also try after a short delay to ensure header is fully rendered
        const timer = setTimeout(calculateHeight, 300);

        return () => {
            window.removeEventListener('resize', calculateHeight);
            clearTimeout(timer);
        };
    }, []);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // change slide every 5s for better readability

        return () => clearInterval(interval); // cleanup
    }, []);

    // Check if mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
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
        { icon: <Globe size={isMobile ? 20 : 24} />, name: "Specialty Sections" }
    ];

    return (
        <div className={` w-full flex flex-col justify-start transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {/* Hero Image with Overlay Text */}
            <div
                className="relative overflow-hidden shadow-lg w-full"
                style={{ height: heroHeight }}
            >

                <div className="w-full h-full overflow-hidden">
                    <div
                        className="flex h-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Hero ${index + 1}`}
                                className="min-w-full h-full object-cover object-right-top"
                            />
                        ))}
                    </div>

                    {/* Dot indicators */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 w-3 rounded-full transition-all ${currentIndex === index
                                    ? 'bg-purple-600'
                                    : 'bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Overlay text on the hero image */}
                <div className="absolute  inset-0 z-20 flex flex-col justify-center items-start p-6 md:p-16 lg:p-24">
                    <div className={`backdrop-blur-2xl transition-all duration-300 ${darkMode ? 'bg-black/40 bg-opacity-70 border border-white/10' : 'bg-white/40 bg-opacity-75 border border-black/10'} p-4 md:p-8 rounded-lg max-w-lg`}>
                        <h2 className={`${darkMode ? 'text-purple-300' : 'text-purple-800'
                            } text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6`}>
                            Shopping with us for better quality and the best price
                        </h2>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'
                            } text-sm md:text-lg mb-4 max-w-md`}>
                            We have prepared special discounts for you on grocery products.
                            Don't miss these opportunities...
                        </p>
                        <button className={`${darkMode
                            ? 'bg-purple-600 hover:bg-purple-500'
                            : 'bg-purple-700 hover:bg-purple-800'
                            } text-white px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105`}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className={`py-12 px-4 md:px-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="container mx-auto">
                    <h3 className={`text-xl md:text-2xl font-semibold text-center mb-8 ${darkMode ? 'text-gray-100' : 'text-gray-800'
                        }`}>
                        Browse Categories
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {categories.map((category, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`flex flex-col items-center p-6 rounded-lg border transition duration-300 ${darkMode
                                    ? 'bg-gray-800 border-gray-700 hover:border-purple-500 hover:bg-gray-750'
                                    : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md'
                                    } group`}
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 ${darkMode
                                    ? 'bg-gray-700 text-purple-400 group-hover:bg-purple-900 group-hover:text-purple-300'
                                    : 'bg-purple-100 text-purple-700 group-hover:bg-purple-200'
                                    } transition duration-300`}>
                                    {category.icon}
                                </div>
                                <span className={`font-medium ${darkMode
                                    ? 'text-gray-200 group-hover:text-purple-400'
                                    : 'text-gray-800 group-hover:text-purple-700'
                                    } transition duration-300`}>
                                    {category.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
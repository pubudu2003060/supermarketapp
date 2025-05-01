import { ShoppingBag, Home, User, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import heroimage1 from "../assets/heroimage1.png";

export default function HeroSection({ heroimage }) {
    const [isMobile, setIsMobile] = useState(false);

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
        <div className="w-full flex flex-col justify-center align-center">
            {/* Hero Image with Overlay Text */}
            <div className="relative overflow-hidden shadow-lg w-full">
                <img
                    src={heroimage1}
                    alt="Hero Banner"
                    className="w-full h-auto object-cover"
                />

                {/* Optional: Add overlay text on the hero image */}
                <div className="absolute inset-0 md:inset-50  flex flex-col  justify-center items-start p-6 md:p-12">
                    <h2 className="text-purple-900 text-1xl md:text-5xl font-bold mb-3 md:mb-10 max-w-50 md:max-w-lg">Shopping with us for
                        better quality and the
                        best price</h2>
                    <p className="text-purple-500 hidden md:block text-sm md:text-lg mb-4 max-w-md">We have prepared special discounts for you on grocery products.
                        Don't miss these opportunities...</p>
                    <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Categories Section */}
            <div className="my-8 mx-4 md:my-12 md:mx-12 ">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-gray-800">Browse Categories</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            href="#"
                            className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300 hover:border-purple-300 group"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3 group-hover:bg-purple-200 transition duration-300 text-purple-700">
                                {category.icon}
                            </div>
                            <span className="font-medium text-gray-800 group-hover:text-purple-700 transition duration-300">{category.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
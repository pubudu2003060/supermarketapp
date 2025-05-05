import React, { useContext } from 'react';
import magic from "../../assets/magic.jpg";
import ceylon from "../../assets/ceylon.png";
import goldi from "../../assets/goldi.jpg";
import goldifinest from "../../assets/goldifinest.jpg";
import kist from "../../assets/kist.jpg";
import kothmale from "../../assets/kothmale.jpg";
import marvel from "../../assets/marvel.jpg";
import munchee from "../../assets/munchee.jpg";
import pepsi from "../../assets/pepsi.jpg";
import { ThemeContext } from "../ThemeContext.component";

const ShopByBrand = () => {
    // Get dark mode state from ThemeContext
    const { darkMode } = useContext(ThemeContext);

    const brands = [
        { image: magic, name: "Magic" },
        { image: ceylon, name: "Ceylon" },
        { image: goldi, name: "Goldi" },
        { image: goldifinest, name: "Goldi Finest" },
        { image: kist, name: "Kist" },
        { image: kothmale, name: "Kothmale" },
        { image: marvel, name: "Marvel" },
        { image: munchee, name: "Munchee" },
        { image: pepsi, name: "Pepsi" },
    ];

    return (
        <section className={`py-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-8 flex flex-col items-center text-center">
                    <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        Shop By Brand
                    </h2>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Our most popular brands
                    </p>
                </div>
                
                {/* Brands Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {brands.map((brand, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`flex flex-col items-center p-4 rounded-lg border transition duration-300 ${
                                darkMode
                                ? 'bg-gray-800 border-gray-700 hover:border-purple-500 hover:bg-gray-750'
                                : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md'
                            } group`}
                        >
                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 overflow-hidden ${
                                darkMode
                                ? 'bg-gray-700 group-hover:bg-gray-600'
                                : 'bg-purple-50 group-hover:bg-purple-100'
                            } transition duration-300`}>
                                <img 
                                    src={brand.image} 
                                    alt={brand.name}
                                    className="w-full h-full object-contain p-1" 
                                />
                            </div>
                            <span className={`font-medium text-center ${
                                darkMode
                                ? 'text-gray-200 group-hover:text-purple-400'
                                : 'text-gray-800 group-hover:text-purple-700'
                            } transition duration-300`}>
                                {brand.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByBrand;
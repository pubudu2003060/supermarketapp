import { useState, useContext } from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ShieldCheck
} from "lucide-react";

import logo from "../assets/logo.png";
import visa from "../assets/payment/visa.png";
import mastercard from "../assets/payment/mastercard.png";
import paypal from "../assets/payment/paypal.png";
import applepay from "../assets/payment/applepay.png";

import { ThemeContext } from "./ThemeContext.component";

export default function Footer() {
    const { darkMode } = useContext(ThemeContext);

    const paymentMethods = [
        { name: "Visa", icon: visa },
        { name: "Mastercard", icon: mastercard },
        { name: "PayPal", icon: paypal },
        { name: "Apple Pay", icon: applepay },
    ];

    return (
        <footer className={`w-full transition-colors duration-300 ${darkMode ? 'bg-black/90 text-white' : 'bg-black/10 text-gray-800'}`}>

            {/* Main footer content */}
            <div className="container mx-auto py-10 px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div>
                        <div className="mb-4">
                            <img src={logo} alt="Company Logo" className="h-12" />
                        </div>
                        <p className={`text-sm mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            We're dedicated to providing high-quality products at the best prices.
                            Our mission is to make your shopping experience exceptional with
                            top-notch customer service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-[#DA70D6]' : 'text-gray-600 hover:text-[#7851A9]'
                                }`}>
                                <Facebook size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-[#DA70D6]' : 'text-gray-600 hover:text-[#7851A9]'
                                }`}>
                                <Twitter size={20} />
                            </a>
                            <a href="#" aria-label="Instagram" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-[#DA70D6]' : 'text-gray-600 hover:text-[#7851A9]'
                                }`}>
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="YouTube" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-[#DA70D6]' : 'text-gray-600 hover:text-[#7851A9]'
                                }`}>
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Shop Categories */}
                    <div>
                        <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-800'
                            }`}>Shop Categories</h4>
                        <ul className="space-y-2">
                            {["Grocery", "Household", "Personal Care",  "Specialty Items"].map((category, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className={`text-sm transition-colors ${darkMode
                                            ? 'text-gray-300 hover:text-[#DA70D6]'
                                            : 'text-gray-600 hover:text-[#7851A9]'
                                            }`}
                                    >
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Customer Service */}
                    <div>
                        <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-800'
                            }`}>Customer Service</h4>
                        <ul className="space-y-2">
                            {[
                                "My Account",
                                "Order History",
                                "Shipping Policy",
                                "Returns & Refunds",
                                "FAQs",
                                "Privacy Policy",
                                "Terms & Conditions"
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className={`text-sm transition-colors ${darkMode
                                            ? 'text-gray-300 hover:text-[#DA70D6]'
                                            : 'text-gray-600 hover:text-[#7851A9]'
                                            }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h4 className={`font-semibold text-lg mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-800'
                            }`}>Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin size={18} className={`mr-2 flex-shrink-0 mt-0.5 ${darkMode ? 'text-purple-300' : 'text-purple-800'
                            }`} />
                                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    123 Shopping Ave, <br />
                                    Retail District, City 12345
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className={`mr-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'
                            }`} />
                                <a
                                    href="tel:+11234567890"
                                    className={`text-sm transition-colors ${darkMode
                                        ? 'text-gray-300 hover:text-[#DA70D6]'
                                        : 'text-gray-600 hover:text-[#7851A9]'
                                        }`}
                                >
                                    +1 (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className={`mr-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'
                            }`} />
                                <a
                                    href="mailto:support@yourstore.com"
                                    className={`text-sm transition-colors ${darkMode
                                        ? 'text-gray-300 hover:text-[#DA70D6]'
                                        : 'text-gray-600 hover:text-[#7851A9]'
                                        }`}
                                >
                                    shoppinglk@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Store Hours */}
                        <div className="mt-6">
                            <h5 className={`font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'
                            }`}>Store Hours</h5>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                Monday - Friday: 9AM - 8PM<br />
                                Saturday: 10AM - 6PM<br />
                                Sunday: 11AM - 5PM
                            </p>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className={`mt-10 pt-6 border-t ${darkMode ? 'text-gray-400' : 'border-gray-500'
                    }`}>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h5 className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>Accepted Payment Methods</h5>
                            <div className="flex space-x-3">
                                {paymentMethods.map((method, index) => (
                                    <img
                                        key={index}
                                        src={method.icon}
                                        alt={method.name}
                                        className="h-8 w-auto"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <ShieldCheck size={20} className={`mr-2 ${darkMode ? 'text-purple-300' : 'text-purple-800'
                            }`} />
                            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                Secure Payment Processing
                            </span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={`mt-6 pt-4 border-t text-center ${darkMode ? 'text-gray-400 text-gray-400' : 'border-gray-500 text-gray-500'
                    }`}>
                    <p className="text-sm">
                        © {new Date().getFullYear()} Shopping.lk | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
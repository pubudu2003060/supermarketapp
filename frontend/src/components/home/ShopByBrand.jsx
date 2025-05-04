import React, { useState, useEffect } from 'react';
import magic from "../../assets/magic.jpg";
import ceylon from "../../assets/ceylon.png";
import goldi from "../../assets/goldi.jpg";
import goldifinest from "../../assets/goldifinest.jpg";
import kist from "../../assets/kist.jpg";
import kothmale from "../../assets/kothmale.jpg";
import marvel from "../../assets/marvel.jpg";
import munchee from "../../assets/munchee.jpg";
import pepsi from "../../assets/pepsi.jpg";

const ShopByBrand = () => {


    const categories = [
        { image: magic, name: "magic" },
        { image: ceylon, name: "ceylon" },
        { image: goldi, name: "goldi" },
        { image: goldifinest, name: "goldifinest" },
        { image: kist, name: "kist" },
        { image: kothmale, name: "kothmale" },
        { image: marvel, name: "marvel" },
        { image: munchee, name: "munchee" },
        { image: pepsi, name: "pepsi" },

    ];

    return (
        <div className="mb-12">
            <div class="container mx-auto px-4">
                <div class="mb-6 flex flex-col items-center text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Shop By Brand</h2>
                    <p className="text-gray-600 mt-1">Our most popular brands</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            href="#"
                            className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300 hover:border-purple-300 group"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3 group-hover:bg-purple-200 transition duration-300 text-purple-700">
                                <img src={category.image} alt="" />
                            </div>
                            <span className="font-medium text-gray-800 group-hover:text-purple-700 transition duration-300">
                                {category.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByBrand;

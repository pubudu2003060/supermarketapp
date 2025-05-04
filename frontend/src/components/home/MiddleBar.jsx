import React from 'react';
import middlebar from '../../assets/middlebar.png';

const MiddleBar = () => {
  return (
    <div className="relative mb-10 ">
      <img src={middlebar} alt="Health & Safety Banner" className="w-full object-right object-cover  md:object-cover h-30 md:h-auto" />
      
      <div className=" absolute inset-0 flex flex-col justify-center  px-4 sm:px-8">
        <p className= "text-orange-600 font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
          In store or online, your health & safety is our top priority
        </p>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2 max-w-2xl">
          The only supermarket that makes your life easier, makes you enjoy life, and makes it better.
        </p>
      </div>
    </div>
  );
};

export default MiddleBar;

import React from 'react';
import middlebar from '../../assets/middlebar.png';
import { ThemeContext } from '../ThemeContext.component';
import { useContext } from 'react';


const MiddleBar = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`relative py-8 md:py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} `} >
      <img src={middlebar} alt="Health & Safety Banner" className={`${darkMode ? 'filter brightness-75' : 'filter brightness-100'} w-full object-right object-cover  md:object-cover h-30 md:h-auto`} />
      
      <div className=" absolute inset-10 flex flex-col justify-center  ">
        <p className= "text-orange-600 font-bold text-xl md:text-3xl">
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

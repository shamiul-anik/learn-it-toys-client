import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/images/banner2.png';
import { FaArrowRight } from 'react-icons/fa';

const HomeBanner = () => {
  
  return (
    // <div className="bg-[#0D0A25] mt-1">
    <div className="bg-gradient-to-br from-blue-900 to-[#0D0A25] mt-1">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto py-4 lg:py-12">
        <div className="max-w-xl p-4">
          <header>
            <h1 className="banner-title">Welcome to<span className="banner-highlighted-text"> LearnitToys!</span></h1>
          </header>
          <p className="banner-description mt-4 mb-8 lg:mb-12">Unleash the Power of Learning with LearnitToys!</p>
          {/* <Link to="/" className="flex gap-3 mx-auto md:mx-0 items-center w-48 justify-center primary-button-lg">Explore <FaArrowRight /></Link> */}
          <Link to="/">
            <button type="button" className="flex gap-3 mx-auto md:mx-0 items-center justify-center text-white w-48 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-xl px-5 py-4 text-center">Explore <FaArrowRight /></button>
          </Link>
        </div>
        <div className="p-4 pb-0">
          <img className="max-w-xl image-full" src={BannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
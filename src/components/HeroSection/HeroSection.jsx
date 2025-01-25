import styles from './HeroSection.module.css';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function HeroSection() {
  return (
    <>
      <div className={`${styles["hero-bg"]} min-h-screen relative`}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Extraordinary natural and
            <br />
            cultural charm
          </h1>
          <p className="text-xl text-white mb-8">
            Exploring Indonesia is an unforgettable adventure.
          </p>

            {/* Search Panel */}
          <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md p-4 rounded-full flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">

        
              <button className="w-full  text-white p-3 rounded-lg flex items-center justify-between">
                <span><CalendarMonthIcon/> Date</span>
                <div className="w-[2px] bg-white h-full" />
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                
              </button>
              <div className="w-[2px] bg-white h-full" />

            </div>
            <div className="flex-1 relative">
              <button className="w-full text-white p-3 rounded-lg flex items-center justify-between">
                <span><AccountBalanceWalletIcon/> Budget</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="search-dropdown"></div>
            </div>
            <div className="flex-1 relative">
              <button className="w-full text-white p-3 rounded-lg flex items-center justify-between">
                <span><PersonOutlineIcon/> Guest</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="search-dropdown"></div>
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-lg transform hover:scale-105">
              Search
            </button>
          </div>

          {/* stat cards */}
          <div className={`${styles["stats-container"]} grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl`}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-3xl font-bold text-gray-900">10M+</div>
              <div className="text-gray-500">Total Customers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-3xl font-bold text-gray-900">09+</div>
              <div className="text-gray-500">Years Of Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-3xl font-bold text-gray-900">12K</div>
              <div className="text-gray-500">Total Destinations</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-3xl font-bold text-gray-900">5.0</div>
              <div className="text-gray-500">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

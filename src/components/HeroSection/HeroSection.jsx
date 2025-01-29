import styles from './HeroSection.module.css';
import React from 'react';
import SearchComponent from '../SearchComponent/SearchComponent';


function HeroSection() {

  return (
    <>
      <div className={`${styles["hero-bg"]} relative min-h-[700px] bg-gray-100`}>
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        <div className="relative mx-auto px-4 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-24 leading-tight">
            Extraordinary natural and
            <br />
            cultural charm
          </h1>
          <p className="text-xl text-white mb-8">
            Exploring Indonesia is an unforgettable adventure.
          </p>

            <SearchComponent/>

          <div className={`${styles["stats-container"]} grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-12 z-50`}>

            <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
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

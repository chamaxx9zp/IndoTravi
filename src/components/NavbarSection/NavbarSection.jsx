import React, { useState, useEffect } from 'react';

function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 pt-4 pb-5 mt-2">

          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            } hover:scale-105`}>
              INDOTRAVI
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block flex-1 px-8 md:text-center">
            <div className={`inline-flex items-center justify-center space-x-8 mx-auto rounded-4xl py-2 px-6 ${
              isScrolled ? 'bg-gray-100' : 'bg-white/10 backdrop-blur-md'
             }`}>
              <a href="#" className={`transition-all duration-300 ease-in-out ${isScrolled ? 'text-gray-400 hover:text-black' : 'text-slate-300 hover:text-white'}`}>Home</a>
              <a href="#" className={`transition-all duration-300 ease-in-out ${isScrolled ? 'text-gray-400 hover:text-black' : 'text-slate-300 hover:text-white'}`}>Services</a>
              <a href="#" className={`transition-all duration-300 ease-in-out ${isScrolled ? 'text-gray-400 hover:text-black' : 'text-slate-300 hover:text-white'}`}>Tour</a>
              <a href="#" className={`transition-all duration-300 ease-in-out ${isScrolled ? 'text-gray-400 hover:text-black' : 'text-slate-300 hover:text-white'}`}>About</a>
              <a href="#" className={`transition-all duration-300 ease-in-out ${isScrolled ? 'text-gray-400 hover:text-black' : 'text-slate-300 hover:text-white'}`}>Contact</a>
            </div>
          </div>

          {/* Language and Login */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <div className={`rounded-4xl flex items-center space-x-2`}>
              <button className={`py-2${
                isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'
              } px-2 transition-colors duration-200`}>De</button>
              <button className={`py-2${
                isScrolled ? 'text-black hover:text-gray-700 ' : 'text-black bg-white rounded-4xl'
              } px-2 transition-colors duration-200`}>En</button>
            </div> */}
            <button className={`px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
              isScrolled 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-white text-black hover:bg-gray-200'
            }`}>
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
              <svg
                className="h-8 w-8 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke={isMenuOpen ? "black" : "currentColor"}
                style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'none' }}>
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Close button for mobile menu */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              className="h-8 w-8 transition-transform duration-300 hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className={`h-full flex flex-col justify-center items-center transition-transform duration-300 backdrop-blur-md bg-gray-100 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-8'}`}>
              
            <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 hover:text-black" onClick={toggleMenu}>About</a>
            <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 hover:text-black" onClick={toggleMenu}>Services</a>
            <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 hover:text-black" onClick={toggleMenu}>Tour</a>
            <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 hover:text-black" onClick={toggleMenu}>About</a>
            <a href="#" className="transition-all duration-300 ease-in-out text-gray-400 hover:text-black" onClick={toggleMenu}>Contact</a>
            
            <div className="mt-8 flex flex-col items-center space-y-4">
              <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Login
              </button>
            </div>
            
          </div>
        </div>
      </nav>
  );
}

export default NavbarSection;

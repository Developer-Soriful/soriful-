import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={` navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* Desktop Logo */}
        <a href="#hero" className="logo ">
          Soriful Islam
        </a>

        {/* Mobile Logo */}
        

        {/* Desktop Navigation */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60] cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Desktop Contact Button */}
        <a href="#contact" className="contact-btn group hidden lg:flex">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation Menu */}
      <nav 
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl border-l border-slate-600/30 z-[80] transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white">Menu</h3>
            <button
              onClick={closeMobileMenu}
              className="text-white hover:text-blue-50 transition-colors duration-200 cursor-pointer hover:scale-110 p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 p-6 backdrop-blur-2xl bg-black/70">
            <ul className="space-y-6">
              {navLinks.map(({ link, name }, index) => (
                <li key={name}>
                  <a 
                    href={link}
                    onClick={closeMobileMenu}
                    className="block text-lg font-medium text-white hover:text-blue-50 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 cursor-pointer py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 backdrop-blur-sm"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Contact Button */}
          <div className="p-6 border-t border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm">
            <a 
              href="#contact"
              onClick={closeMobileMenu}
              className="block w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
            >
              Contact me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

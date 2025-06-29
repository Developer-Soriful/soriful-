import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Set loaded state after a short delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  useGSAP(() => {
    if (!isLoaded || isMobile) return;
    
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  }, [isLoaded, isMobile]);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Optimized background image */}
      <div className="absolute top-0 left-0 z-10">
        <img 
          src="/images/bg.png" 
          alt="" 
          loading="eager"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 py-6 md:py-0">
          <div className="flex flex-col gap-5 md:gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          loading="lazy"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl text-lg relative z-10 pointer-events-none">
              Hi, I'm Soriful, a developer based in Bangladesh with a passion
              for Creation.
            </p>

            <Button
              text="Download Resume"
              className="md:w-80 md:h-16 w-60 h-12"
              download={true}
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual - Only on desktop */}
        <figure className="hidden lg:block">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      
      {/* Optimized Mobile and Tablet Image */}
      <div className="lg:hidden flex justify-center items-center mt-8 md:mt-12 mb-8 md:mb-12 px-4">
        <div className="relative w-full max-w-sm md:max-w-md group">
          {/* Simplified background glow for better performance */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
          
          {/* Main image container with optimized styling */}
          <div className="relative z-10 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 professional-image">
            {/* Simplified card border effect */}
            <div className="absolute inset-0 rounded-3xl border border-black-50 bg-black-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <img 
              src="/profassional_me.png" 
              alt="Soriful - Professional Portrait" 
              className="relative z-10 w-full h-auto object-contain rounded-3xl shadow-xl border border-white/10 backdrop-blur-sm"
              loading="eager"
              style={{
                filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3))',
                transform: 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            
            {/* Simplified border gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Reduced floating particles for better performance */}
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 floating-particle"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 floating-particle"></div>
          
          {/* Simplified professional status badge */}
          <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg transform -rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-0 border border-white/20">
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              Available
            </span>
          </div>
          
          {/* Simplified tech stack indicator */}
          <div className="absolute -top-2 -right-2 bg-black-200 text-white-50 text-xs px-2 py-1 rounded-full font-medium shadow-lg transform rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-0 border border-black-50">
            MERN Stack
          </div>
          
          {/* Simplified bottom accent line */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-24"></div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero; 
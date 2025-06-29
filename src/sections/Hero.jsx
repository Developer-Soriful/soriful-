import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
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

        {/* RIGHT: 3D Model or Visual */}
        <figure className="hidden lg:block">
          <div className="hero-3d-layout ">
            <HeroExperience />
          </div>
        </figure>
      </div>
      
      {/* Mobile and Tablet Image */}
      <div className="lg:hidden flex justify-center items-center mt-8 md:mt-12 mb-8 md:mb-12 px-4">
        <div className="relative w-full max-w-sm md:max-w-md group">
          {/* Enhanced background glow with project's color scheme */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>
          
          {/* Main image container with enhanced styling */}
          <div className="relative z-10 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 professional-image">
            {/* Card border effect similar to GlowCard */}
            <div className="absolute inset-0 rounded-3xl border border-black-50 bg-black-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <img 
              src="/profassional_me.png" 
              alt="Soriful - Professional Portrait" 
              className="relative z-10 w-full h-auto object-contain rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
                transform: 'translateY(0)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            
            {/* Professional border gradient with project colors */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Inner glow effect */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Enhanced floating particles with project theme */}
          <div className="absolute -top-4 -right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 floating-particle shadow-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 floating-particle shadow-lg"></div>
          <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60 floating-particle shadow-lg"></div>
          
          {/* Professional status badge with tech stack styling */}
          <div className="absolute -top-3 -left-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg transform -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 border border-white/20 professional-badge">
            <span className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              Available
            </span>
          </div>
          
          {/* Tech stack indicator badge */}
          <div className="absolute -top-3 -right-3 bg-black-200 text-white-50 text-xs px-3 py-1 rounded-full font-medium shadow-lg transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 border border-black-50 professional-badge">
            MERN Stack
          </div>
          
          {/* Bottom accent line with project gradient */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32 shadow-lg"></div>
          
          {/* Corner accent elements */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 corner-accent"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 corner-accent"></div>
          
          {/* Professional experience indicator */}
          <div className="absolute bottom-4 right-4 bg-black-200/80 backdrop-blur-sm text-white-50 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 border border-black-50">
            2+ Years Exp
          </div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero; 
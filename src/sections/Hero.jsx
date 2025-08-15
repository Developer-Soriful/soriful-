import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words, socialImgs } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    // Check device capabilities
    const checkDeviceCapabilities = () => {
      const width = window.innerWidth;
      const isMobileDevice = width < 768;
      const isMediumDevice = width < 1024;
      const isSmallDevice = width < 480;

      setIsMobile(isMobileDevice);

      // Don't render 3D on small, mobile, or medium devices
      if (isSmallDevice || isMobileDevice || isMediumDevice) {
        setShouldRender3D(false);
        return;
      }

      // Check for WebGL support
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        setShouldRender3D(false);
        return;
      }

      // Check for low memory devices
      const memoryInfo = navigator.deviceMemory || 4;
      const cores = navigator.hardwareConcurrency || 4;

      if (memoryInfo < 2 || cores < 2) {
        setShouldRender3D(false);
        return;
      }

      setShouldRender3D(true);
    };

    checkDeviceCapabilities();
    window.addEventListener("resize", checkDeviceCapabilities);

    // Set loaded state after a short delay
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener("resize", checkDeviceCapabilities);
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
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 py-4 md:py-6 xl:py-8">
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
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

            <p className="text-white-50 md:text-xl text-lg relative z-10 pointer-events-none leading-relaxed">
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
        {/* RIGHT: 3D Model - Only render on large devices (xl and above) */}
        {shouldRender3D && (
          <figure className="hidden xl:block">
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
        )}
        {/* Optimized Mobile and Tablet Image - Show on all devices except xl */}
      </div>
      <div className=" lg:hidden w-full flex justify-center items-center mt-6 md:mt-8 xl:mt-10 mb-6 md:mb-8 xl:mb-10 px-10">
        <div className="relative w-full max-w-sm md:max-w-md group">
          {/* Enhanced background glow with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-indigo-500/15 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>

          {/* Main image container with enhanced styling */}
          <div className="relative z-10 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 professional-image">
            {/* Enhanced card border effect with gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <div className="absolute inset-0 rounded-3xl border border-white/20 bg-black-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>

            {/* Animated Skill Text Elements */}
            <div
              className="absolute -top-8 -left-8 text-xs font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              REACT
            </div>
            <div
              className="absolute -top-6 -right-6 text-xs font-bold text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              NODE.js
            </div>
            <div
              className="absolute -bottom-6 -left-6 text-xs font-bold text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"
              style={{ animationDelay: "0.6s" }}
            >
              MONGODB
            </div>
            <div
              className="absolute -bottom-8 -right-8 text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"
              style={{ animationDelay: "0.8s" }}
            >
              EXPRESS
            </div>

            {/* Rotating Skill Icons */}
            <div
              className="absolute top-1/2 -left-12 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-spin"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="text-white text-xs font-bold">JS</span>
            </div>
            <div
              className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-spin"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-white text-xs font-bold">TS</span>
            </div>

            {/* Floating Code Elements */}
            <div
              className="absolute top-1/4 -left-16 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"
              style={{ animationDelay: "0.7s" }}
            >
              &lt;/&gt;
            </div>
            <div
              className="absolute bottom-1/4 -right-16 text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"
              style={{ animationDelay: "0.9s" }}
            >
              {}
            </div>

            {/* Additional Tech Stack Elements */}
            <div
              className="absolute top-1/3 -left-20 text-xs font-mono text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"
              style={{ animationDelay: "1.0s" }}
            >
              HTML5
            </div>
            <div
              className="absolute top-2/3 -right-20 text-xs font-mono text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"
              style={{ animationDelay: "1.1s" }}
            >
              CSS3
            </div>
            <div
              className="absolute bottom-1/3 -left-20 text-xs font-mono text-pink-300 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"
              style={{ animationDelay: "1.2s" }}
            >
              API
            </div>
            <div
              className="absolute bottom-2/3 -right-20 text-xs font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"
              style={{ animationDelay: "1.3s" }}
            >
              Git
            </div>

            {/* Animated Dots Pattern */}
            <div
              className="absolute -top-4 -left-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping"
              style={{ animationDelay: "1.4s" }}
            ></div>
            <div
              className="absolute -top-4 -right-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping"
              style={{ animationDelay: "1.6s" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping"
              style={{ animationDelay: "1.7s" }}
            ></div>

            {/* Main image with enhanced styling */}
            <img
              src="/profassional_me.png"
              alt="Soriful - Professional Portrait"
              className="relative z-10 w-full h-auto object-contain rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm"
              loading="eager"
              style={{
                filter:
                  "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
                transform: "translateY(0)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                backgroundColor:
                  "linear-gradient(135deg, #0e0e10 0%, #1c1c21 50%, #282732 100%)",
              }}
            />

            {/* Enhanced border gradient with animation */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

            {/* Professional frame overlay */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Dark gradient background overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black-100/80 via-black-50/60 to-black-200/80 opacity-100 group-hover:opacity-90 transition-opacity duration-500"></div>
          </div>

          {/* Enhanced floating particles with better positioning */}
          <div className="absolute -top-3 -right-3 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-80 floating-particle animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80 floating-particle animate-pulse"></div>
          <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-70 floating-particle animate-bounce"></div>
          <div className="absolute top-1/3 -left-3 w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60 floating-particle animate-ping"></div>

          {/* Enhanced professional status badge */}
          <div
            className="absolute -top-3 -left-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-xl transform -rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 border border-white/30 backdrop-blur-sm"
            style={{ "--rotation": "-6deg" }}
          >
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></div>
              Available for Hire
            </span>
          </div>

          {/* Enhanced tech stack indicator */}
          <div
            className="absolute -top-3 -right-3 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white-50 text-xs px-3 py-1.5 rounded-full font-semibold shadow-xl transform rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 border border-gray-600/50 backdrop-blur-sm"
            style={{ "--rotation": "6deg" }}
          >
            <span className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              MERN Stack
            </span>
          </div>

          {/* Enhanced bottom accent line with animation */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32 animate-pulse"></div>

          {/* Professional experience indicator */}
          <div
            className="absolute bottom-1/2 -left-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg transform -rotate-90 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 border border-white/20 backdrop-blur-sm"
            style={{ "--rotation": "-90deg" }}
          >
            3+ Years
          </div>

          {/* Skills indicator */}
          <div
            className="absolute bottom-1/2 -right-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg transform rotate-90 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 border border-white/20 backdrop-blur-sm"
            style={{ "--rotation": "90deg" }}
          >
            Full Stack
          </div>

          {/* Enhanced corner decorations */}
          <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;

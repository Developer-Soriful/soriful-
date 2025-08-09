import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

// Lazy load components for better performance
const Hero = lazy(() => import("./sections/Hero"));
const AboutMe = lazy(() => import("./sections/AboutMe"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Experience = lazy(() => import("./sections/Experience"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex-center min-h-screen">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
      <div
        className="absolute inset-0 w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"
        style={{ animationDelay: "0.2s" }}
      ></div>
    </div>
  </div>
);

const App = () => (
  <PerformanceOptimizer>
    {/*
      Navbar component-ke alada vabe rakha hoyeche
      jate eta sticky thakte pare,
      ebong baki shob content er por shuru hobe.
    */}
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <Navbar />
    </div>

    {/* Baki shob content ekta alada container-er modhye ache */}
    <div className="will-change-transform">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <AboutMe />
        <ShowcaseSection />
        <LogoShowcase />
        <FeatureCards />
        <TechStack />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  </PerformanceOptimizer>
);

export default App;

import { useEffect, useState } from 'react';

const PerformanceOptimizer = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Check device capabilities
    const checkDeviceCapabilities = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      
      // Check for low power mode or slow connection
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
      const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      setIsLowPowerMode(isSlowConnection || isLowPower);
    };

    checkDeviceCapabilities();
    window.addEventListener('resize', checkDeviceCapabilities);

    // Preload critical images
    const preloadImages = () => {
      const criticalImages = [
        '/images/bg.png',
        '/profassional_me.png'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    // Set loaded state
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('resize', checkDeviceCapabilities);
      clearTimeout(timer);
    };
  }, []);

  // Apply performance optimizations based on device capabilities
  useEffect(() => {
    if (isMobile || isLowPowerMode) {
      // Reduce animations for mobile/low power devices
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
      document.documentElement.style.setProperty('--transition-duration', '0.2s');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0.5s');
      document.documentElement.style.setProperty('--transition-duration', '0.3s');
    }
  }, [isMobile, isLowPowerMode]);

  if (!isLoaded) {
    return (
      <div className="flex-center min-h-screen bg-black">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`performance-optimized ${isMobile ? 'mobile-device' : ''} ${isLowPowerMode ? 'low-power-mode' : ''}`}>
      {children}
    </div>
  );
};

export default PerformanceOptimizer; 
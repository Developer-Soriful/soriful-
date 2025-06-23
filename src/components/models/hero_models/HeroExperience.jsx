import { OrbitControls, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useMemo } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  // Detect device type once (to prevent frequent re-render)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // Memoize group scale and position
  const roomProps = useMemo(() => ({
    scale: isMobile ? 0.7 : 1,
    position: [0, -3.5, 0],
    rotation: [0, -Math.PI / 4, 0]
  }), [isMobile]);

  return (
    <Canvas
      frameloop="demand" // only renders when needed
      dpr={[1, 1.5]} // device pixel ratio for performance
      camera={{ position: [0, 0, 15], fov: 45 }}
      gl={{ antialias: false, powerPreference: "low-power" }} // render optimization
    >
      {/* Ambient light (deep blue tone) */}
      <ambientLight intensity={0.2} color="#1a1a40" />

      {/* Orbit Controls */}
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Suspense fallback loader */}
      <Suspense
        fallback={
          <Html center>
            <div style={{ color: "white", fontSize: "18px" }}>Loading 3D Scene...</div>
          </Html>
        }
      >
        {/* Lights */}
        <HeroLights />

        {/* Particles (optimized count) */}
        <Particles count={30} />

        {/* Room Group */}
        <group {...roomProps}>
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;

'use client'
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function EmberBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 40 },
          color: { value: ["#ff4500", "#ff8c00", "#ffd700"] },
          shape: { type: "circle" },
          opacity: { value: { min: 0.05, max: 0.15 } },
          size: { value: { min: 1, max: 2 } },
          move: { 
            enable: true, 
            speed: 0.5, 
            direction: "top", 
            outModes: "out" 
          }
        }
      }}
    />
  );
}

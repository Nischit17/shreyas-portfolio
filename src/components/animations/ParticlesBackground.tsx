"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in a sphere
  const sphere = new Float32Array(3000 * 3);
  for (let i = 0; i < 3000; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos((Math.random() * 2) - 1);
    const radius = 10 + Math.random() * 5;
    
    sphere[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
    sphere[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
    sphere[i * 3 + 2] = radius * Math.cos(phi); // z
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} matrixAutoUpdate>
        <PointMaterial
          transparent
          color="#3B82F6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}

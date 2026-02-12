'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366F1"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function ScanLine() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = (Math.sin(state.clock.getElapsedTime() * 2) + 1) / 2;
      ref.current.position.y = t * 4 - 2;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeGeometry args={[8, 0.1]} />
      <meshBasicMaterial color="#06B6D4" transparent opacity={0.5} />
    </mesh>
  );
}

export default function ScanAnimation({ state = 'scanning' }: { state?: 'idle' | 'scanning' | 'complete' }) {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden bg-black/20">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {state === 'scanning' && (
          <>
            <ParticleField />
            <ScanLine />
          </>
        )}
      </Canvas>
    </div>
  );
}

"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

type Vector3Array = [number, number, number];

function Cube({ position = [0, 0, 0] as Vector3Array, size = 1, color = '#4361ee' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function Coin({ position = [0, 0, 0] as Vector3Array, size = 0.5, rotationSpeed = 0.01, floatSpeed = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotate the coin
    meshRef.current.rotation.y += rotationSpeed;
    
    // Float up and down
    meshRef.current.position.y = initialY + Math.sin(state.clock.getElapsedTime() * floatSpeed) * 0.2;
  });

  // Gold material for the coin
  const gold = new THREE.MeshStandardMaterial({
    color: '#fcc603',
    metalness: 0.8,
    roughness: 0.2,
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <cylinderGeometry args={[size, size, 0.1, 32]} />
      <primitive object={gold} attach="material" />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5] as Vector3Array} 
        intensity={1} 
        castShadow 
        shadow-mapSize={1024} 
      />
      
      {/* Main VroPay Cube */}
      <Cube position={[0, 0, 0] as Vector3Array} size={1.5} color="#4361ee" />
      
      {/* Floating coins */}
      <Coin position={[-2, 1, -1] as Vector3Array} size={0.6} rotationSpeed={0.02} floatSpeed={1.2} />
      <Coin position={[2, 0.5, 1] as Vector3Array} size={0.5} rotationSpeed={0.015} floatSpeed={0.8} />
      <Coin position={[1.5, -1, -1.5] as Vector3Array} size={0.4} rotationSpeed={0.025} floatSpeed={1.5} />
      <Coin position={[-1.5, -0.5, 1.5] as Vector3Array} size={0.7} rotationSpeed={0.01} floatSpeed={1} />
      
      {/* Environment and lighting */}
      <Environment preset="city" />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 6] as Vector3Array, fov: 45 }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
} 
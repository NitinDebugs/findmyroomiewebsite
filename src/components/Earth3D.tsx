
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Mesh } from 'three';
import { OrbitControls, useTexture } from '@react-three/drei';

function Earth() {
  const meshRef = useRef<Mesh>(null);
  
  // Use a reliable texture from a public URL instead of the missing uploaded file
  const earthTexture = "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80";
  const texture = useTexture(earthTexture);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

const Earth3D = () => {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Earth />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Earth3D;

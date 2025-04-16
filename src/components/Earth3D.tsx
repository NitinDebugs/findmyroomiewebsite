
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';

function Earth() {
  const meshRef = useRef<Mesh>(null);
  const colorMap = useLoader(TextureLoader, '/lovable-uploads/848da02a-910b-46a2-8fcf-a96ee0e224f7.png');

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
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

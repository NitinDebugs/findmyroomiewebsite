
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';

function Handshake() {
  const leftHandRef = useRef<Mesh>(null);
  const rightHandRef = useRef<Mesh>(null);

  useFrame(() => {
    if (leftHandRef.current && rightHandRef.current) {
      // Create a subtle handshake animation
      leftHandRef.current.position.y = Math.sin(Date.now() * 0.005) * 0.1;
      rightHandRef.current.position.y = Math.sin(Date.now() * 0.005) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Left character (represented as a box) */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.5, 2, 0.5]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>
      
      {/* Left hand */}
      <mesh ref={leftHandRef} position={[-1, 0, 0]}>
        <boxGeometry args={[1, 0.2, 0.2]} />
        <meshStandardMaterial color="#6eb4ff" />
      </mesh>

      {/* Right character (represented as a box) */}
      <mesh position={[1.5, 0, 0]}>
        <boxGeometry args={[0.5, 2, 0.5]} />
        <meshStandardMaterial color="#e24a84" />
      </mesh>

      {/* Right hand */}
      <mesh ref={rightHandRef} position={[1, 0, 0]}>
        <boxGeometry args={[1, 0.2, 0.2]} />
        <meshStandardMaterial color="#ff6eb4" />
      </mesh>
    </group>
  );
}

const Earth3D = () => {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Handshake />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Earth3D;

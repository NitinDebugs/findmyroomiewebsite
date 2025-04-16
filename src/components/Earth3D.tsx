
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
      // More dynamic handshake animation
      const time = Date.now() * 0.005;
      leftHandRef.current.position.y = Math.sin(time) * 0.2;
      rightHandRef.current.position.y = Math.cos(time) * 0.2;
      leftHandRef.current.rotation.z = Math.sin(time) * 0.1;
      rightHandRef.current.rotation.z = -Math.cos(time) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Left character (roommate finder) */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.5, 2, 0.5]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>
      
      {/* Left hand with celebratory motion */}
      <mesh ref={leftHandRef} position={[-1, 0, 0]}>
        <boxGeometry args={[1, 0.2, 0.2]} />
        <meshStandardMaterial color="#6eb4ff" />
      </mesh>

      {/* Right character (new roommate) */}
      <mesh position={[1.5, 0, 0]}>
        <boxGeometry args={[0.5, 2, 0.5]} />
        <meshStandardMaterial color="#e24a84" />
      </mesh>

      {/* Right hand with celebratory motion */}
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

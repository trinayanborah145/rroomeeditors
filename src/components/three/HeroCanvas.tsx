import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';

const SimpleRoom = () => {
  // This is a simple room model created with primitive shapes
  return (
    <group position={[0, 0, 0]} scale={5}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Back Wall */}
      <mesh position={[0, 1.5, -2]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-2, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      
      {/* Right Wall */}
      <mesh position={[2, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>
      
      {/* Sofa */}
      <group position={[0, 0, 0.5]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.5, 0.8]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        <mesh position={[0, 0.5, -0.3]}>
          <boxGeometry args={[2, 0.5, 0.2]} />
          <meshStandardMaterial color="#7B5427" />
        </mesh>
        <mesh position={[-0.9, 0.5, 0.3]}>
          <boxGeometry args={[0.2, 0.5, 0.8]} />
          <meshStandardMaterial color="#7B5427" />
        </mesh>
        <mesh position={[0.9, 0.5, 0.3]}>
          <boxGeometry args={[0.2, 0.5, 0.8]} />
          <meshStandardMaterial color="#7B5427" />
        </mesh>
      </group>
      
      {/* Coffee Table */}
      <group position={[0, 0, 1.5]}>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1, 0.1, 0.6]} />
          <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[-0.4, -0.1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.4, -0.1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-0.4, -0.1, -0.2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.4, -0.1, -0.2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />
          <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Ceiling Light */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFAA44" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas className="canvas-container" camera={{ position: [10, 10, 10], fov: 25 }}>
      <color attach="background" args={['#0a0a0d']} />
      <fog attach="fog" args={['#0a0a0d', 10, 30]} />
      
      <Suspense fallback={null}>
        <PresentationControls
          global
          rotation={[0, -Math.PI / 4, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <SimpleRoom />
        </PresentationControls>
        
        <Environment preset="apartment" />
      </Suspense>
      
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
    </Canvas>
  );
};

export default HeroCanvas;
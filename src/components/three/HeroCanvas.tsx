import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

// Memoize materials to prevent recreation on re-renders
const materials = {
  floor: new THREE.MeshStandardMaterial({ 
    color: '#222222',
    roughness: 0.8,
    metalness: 0.2
  }),
  wall: new THREE.MeshStandardMaterial({ 
    color: '#333333',
    roughness: 0.7,
    metalness: 0.1
  }),
  sofa: new THREE.MeshStandardMaterial({ 
    color: '#654321',
    roughness: 0.8
  }),
  table: new THREE.MeshStandardMaterial({ 
    color: '#111111',
    metalness: 0.5, 
    roughness: 0.2 
  }),
  light: new THREE.MeshStandardMaterial({ 
    color: '#FFFFFF',
    emissive: '#FFAA44',
    emissiveIntensity: 1
  })
};

const SimpleRoom = () => {
  // Use refs for meshes to prevent recreation on re-renders
  const groupRef = useRef<THREE.Group>(null);
  
  // Use a single geometry for table legs
  const tableLegGeometry = useMemo(
    () => new THREE.CylinderGeometry(0.05, 0.05, 0.6, 6), // Reduced segments from 8 to 6
    []
  );

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={5}>
      {/* Floor - single plane with simplified geometry */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.5, 0]}
        material={materials.floor}
      >
        <planeGeometry args={[4, 4, 1, 1]} />
      </mesh>
      
      {/* Back Wall */}
      <mesh 
        position={[0, 1.5, -2]}
        material={materials.wall}
      >
        <planeGeometry args={[4, 4, 1, 1]} />
      </mesh>
      
      {/* Left Wall */}
      <mesh 
        position={[-2, 1.5, 0]} 
        rotation={[0, Math.PI / 2, 0]}
        material={materials.wall}
      >
        <planeGeometry args={[4, 4, 1, 1]} />
      </mesh>
      
      {/* Right Wall */}
      <mesh 
        position={[2, 1.5, 0]} 
        rotation={[0, -Math.PI / 2, 0]}
        material={materials.wall}
      >
        <planeGeometry args={[4, 4, 1, 1]} />
      </mesh>
      
      {/* Simplified Sofa */}
      <group position={[0, 0, 0.5]}>
        <mesh position={[0, 0, 0]} material={materials.sofa}>
          <boxGeometry args={[2, 0.5, 0.8]} />
        </mesh>
        <mesh position={[0, 0.5, -0.3]} material={materials.sofa}>
          <boxGeometry args={[2, 0.5, 0.2]} />
        </mesh>
        <mesh position={[-0.9, 0.5, 0.3]} material={materials.sofa}>
          <boxGeometry args={[0.2, 0.5, 0.8]} />
        </mesh>
        <mesh position={[0.9, 0.5, 0.3]} material={materials.sofa}>
          <boxGeometry args={[0.2, 0.5, 0.8]} />
        </mesh>
      </group>
      
      {/* Simplified Coffee Table */}
      <group position={[0, 0, 1.5]}>
        <mesh position={[0, 0.2, 0]} material={materials.table}>
          <boxGeometry args={[1, 0.1, 0.6]} />
        </mesh>
        {[
          [-0.4, -0.1, 0],
          [0.4, -0.1, 0],
          [-0.4, -0.1, -0.2],
          [0.4, -0.1, -0.2]
        ].map((pos, i) => (
          <mesh 
            key={i} 
            position={[pos[0], pos[1], pos[2]]} 
            geometry={tableLegGeometry}
            material={materials.table}
          />
        ))}
      </group>
      
      {/* Simplified Ceiling Light */}
      <mesh position={[0, 2, 0]} material={materials.light}>
        <sphereGeometry args={[0.2, 12, 8]} />
      </mesh>
    </group>
  );
};

// Performance-optimized Canvas component
const HeroCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Only render the 3D scene when it's in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  // Use a simpler scene for mobile devices
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <div ref={canvasRef} className="w-full h-full">
      {isVisible && (
        <Canvas 
          className="canvas-container" 
          camera={{ 
            position: isMobile ? [8, 8, 8] : [10, 10, 10], 
            fov: isMobile ? 30 : 25 
          }}
          dpr={Math.min(window.devicePixelRatio, 2)} // Limit pixel ratio for performance
          gl={{ antialias: true, alpha: true }}
          performance={{ min: 0.5 }} // Lower performance for mobile
        >
          <color attach="background" args={['#0a0a0d']} />
          <fog attach="fog" args={['#0a0a0d', 5, 20]} />
          
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            
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
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default HeroCanvas;
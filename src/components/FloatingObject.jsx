import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloatingObject() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.x += delta * 0.16;
    groupRef.current.rotation.y += delta * 0.25;

    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.25;
  });

  return (
    <group ref={groupRef}>

      {/* Main object */}

      <mesh>
        <icosahedronGeometry args={[1.6, 4]} />

        <meshStandardMaterial
          color="#8FFFC1"
          metalness={0.9}
          roughness={0.12}
          emissive="#064E3B"
          emissiveIntensity={0.65}
        />
      </mesh>

      {/* Wireframe */}

      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.6, 2]} />

        <meshBasicMaterial
          color="#5EEAD4"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Inner core */}

      <mesh scale={0.45}>
        <icosahedronGeometry args={[1.6, 2]} />

        <meshStandardMaterial
          color="#D1FAE5"
          emissive="#34D399"
          emissiveIntensity={1.8}
          metalness={0.8}
          roughness={0.08}
        />
      </mesh>

    </group>
  );
}

export default FloatingObject;
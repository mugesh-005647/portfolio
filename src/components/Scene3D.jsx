import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

import ParticleField from "./ParticleField";
import FloatingObject from "./FloatingObject";
import CameraRig from "./CameraRig";

function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
      camera={{
        position: [0, 0, 7],
        fov: 45,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 7]}
        fov={45}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={15}
        distance={12}
      />

      <pointLight
        position={[4, 2, -3]}
        intensity={10}
        distance={10}
      />

      {/* Camera interaction */}
      <CameraRig />

      {/* Background particles */}
      <ParticleField />

      {/* Main 3D object */}
      <FloatingObject />

      {/* Environment */}
      <Environment preset="night" />
    </Canvas>
  );
}

export default Scene3D;
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

/* =========================================================
   MAIN 3D OBJECT
========================================================= */

function MainObject({ mobile }) {
  const groupRef = useRef(null);

  const scrollRef = useRef(0);
  const targetScroll = useRef(0);

  const targetScale = useMemo(
    () => new THREE.Vector3(1, 1, 1),
    []
  );

  /* =======================================================
     SCROLL
  ======================================================== */

  useEffect(() => {
    const handleScroll = () => {
      targetScroll.current = window.scrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     ANIMATION
  ======================================================== */

  useFrame((state, delta) => {
    const group = groupRef.current;

    if (!group) return;

    /* -----------------------------------------------------
       Smooth scroll
    ----------------------------------------------------- */

    scrollRef.current = THREE.MathUtils.lerp(
      scrollRef.current,
      targetScroll.current,
      mobile ? 0.025 : 0.04
    );

    const scroll = scrollRef.current;

    /* -----------------------------------------------------
       Mouse
    ----------------------------------------------------- */

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    /* -----------------------------------------------------
       Rotation
    ----------------------------------------------------- */

    group.rotation.y += delta * (mobile ? 0.08 : 0.15);

    group.rotation.x =
      scroll * (mobile ? 0.0007 : 0.0015) +
      mouseY * (mobile ? -0.08 : -0.15);

    group.rotation.y +=
      mouseX * (mobile ? 0.001 : 0.002);

    /* -----------------------------------------------------
       Position
    ----------------------------------------------------- */

    if (mobile) {
      group.position.y =
        -0.35 - scroll * 0.00035;

      group.position.x =
        0.55 + scroll * 0.0001;

      group.position.z = -0.4;
    } else {
      group.position.y =
        -scroll * 0.001;

      group.position.x =
        scroll * 0.00035;

      group.position.z = 0;
    }

    /* -----------------------------------------------------
       Scale
    ----------------------------------------------------- */

    const baseScale = mobile ? 0.55 : 1;

    const scale = mobile
      ? THREE.MathUtils.clamp(
          baseScale + scroll * 0.00004,
          0.55,
          0.7
        )
      : THREE.MathUtils.clamp(
          1 + scroll * 0.00015,
          1,
          1.25
        );

    targetScale.set(
      scale,
      scale,
      scale
    );

    group.scale.lerp(
      targetScale,
      mobile ? 0.025 : 0.04
    );
  });

  return (
    <group ref={groupRef}>

      {/* =================================================
          MAIN OBJECT
      ================================================== */}

      <Float
        speed={mobile ? 0.8 : 1.2}
        rotationIntensity={mobile ? 0.15 : 0.25}
        floatIntensity={mobile ? 0.45 : 0.8}
      >
        <mesh scale={mobile ? 1 : 1.15}>
          <icosahedronGeometry
            args={[1, mobile ? 2 : 3]}
          />

          <MeshDistortMaterial
            color="#8FFFC1"
            emissive="#174D37"
            emissiveIntensity={
              mobile ? 0.25 : 0.45
            }
            roughness={0.28}
            metalness={0.65}
            distort={mobile ? 0.12 : 0.18}
            speed={mobile ? 0.8 : 1.2}
            transparent
            opacity={mobile ? 0.58 : 0.82}
          />
        </mesh>
      </Float>

      {/* =================================================
          OUTER WIREFRAME
      ================================================== */}

      <mesh
        scale={mobile ? 1.12 : 1.3}
      >
        <icosahedronGeometry
          args={[1, mobile ? 1 : 2]}
        />

        <meshBasicMaterial
          color="#8FFFC1"
          wireframe
          transparent
          opacity={mobile ? 0.14 : 0.22}
        />
      </mesh>

      {/* =================================================
          INNER CORE
      ================================================== */}

      <mesh
        scale={mobile ? 0.22 : 0.28}
      >
        <sphereGeometry
          args={[1, mobile ? 12 : 16, mobile ? 12 : 16]}
        />

        <meshBasicMaterial
          color="#E9FFF4"
          transparent
          opacity={mobile ? 0.45 : 0.8}
        />
      </mesh>

    </group>
  );
}

/* =========================================================
   FLOATING PARTICLES
========================================================= */

function FloatingParticles({ mobile }) {
  return (
    <>
      <Sparkles
        count={mobile ? 10 : 50}
        scale={
          mobile
            ? [3, 3, 3]
            : [6, 6, 6]
        }
        size={mobile ? 0.7 : 1.25}
        speed={mobile ? 0.1 : 0.18}
        opacity={mobile ? 0.2 : 0.35}
      />

      {!mobile && (
        <Sparkles
          count={12}
          scale={[4, 4, 4]}
          size={1.4}
          speed={0.1}
          opacity={0.2}
        />
      )}
    </>
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene({ mobile }) {
  return (
    <>
      {/* =================================================
          LIGHTING
      ================================================== */}

      <ambientLight
        intensity={mobile ? 0.25 : 0.35}
      />

      <directionalLight
        position={[3, 4, 5]}
        intensity={mobile ? 1 : 1.6}
      />

      <pointLight
        position={[2, 1, 3]}
        color="#8FFFC1"
        intensity={mobile ? 3.5 : 10}
        distance={mobile ? 5 : 6}
      />

      {!mobile && (
        <pointLight
          position={[-3, -2, 2]}
          color="#6D7CFF"
          intensity={4}
          distance={7}
        />
      )}

      <MainObject mobile={mobile} />

      <FloatingParticles mobile={mobile} />
    </>
  );
}

/* =========================================================
   HERO SCENE
========================================================= */

function HeroScene() {
  const [mobile, setMobile] = useState(false);

  /* =======================================================
     RESPONSIVE DETECTION
  ======================================================== */

  useEffect(() => {
    const checkScreen = () => {
      setMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <div
      className={`
        pointer-events-none
        absolute
        right-0
        overflow-hidden

        ${
          mobile
            ? "top-[22%] h-[72%] w-full"
            : "top-0 h-full w-full lg:w-[58%]"
        }
      `}
    >

      {/* =================================================
          CANVAS
      ================================================== */}

      <Canvas
        camera={{
          position: mobile
            ? [0, 0, 6.5]
            : [0, 0, 5],
          fov: mobile ? 48 : 42,
        }}

        dpr={
          mobile
            ? [1, 1]
            : [1, 1.2]
        }

        gl={{
          antialias: !mobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Scene mobile={mobile} />
        </Suspense>
      </Canvas>

      {/* =================================================
          MOBILE TEXT PROTECTION FADE
      ================================================== */}

      {mobile && (
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[45%]
            bg-gradient-to-b
            from-[#07090B]
            via-[#07090B]/80
            to-transparent
          "
        />
      )}

      {/* =================================================
          LEFT FADE
      ================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-y-0
          left-0

          ${
            mobile
              ? "w-[65%] bg-gradient-to-r from-[#07090B] via-[#07090B]/80 to-transparent"
              : "w-1/2 bg-gradient-to-r from-[#07090B] via-[#07090B]/70 to-transparent"
          }
        `}
      />

      {/* =================================================
          BOTTOM FADE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-1/3
          bg-gradient-to-t
          from-[#07090B]
          to-transparent
        "
      />

    </div>
  );
}

export default HeroScene;
import { useFrame } from "@react-three/fiber";

function CameraRig() {
  useFrame((state) => {
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    const targetX = mouseX * 0.7;
    const targetY = mouseY * 0.35;

    state.camera.position.x +=
      (targetX - state.camera.position.x) * 0.025;

    state.camera.position.y +=
      (targetY - state.camera.position.y) * 0.025;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default CameraRig;
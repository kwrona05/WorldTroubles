/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import EarthTexture from "./textures/EarthTexture.jpg";

function Earth({ texture }) {
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 32, 32]}>
      <meshStandardMaterial map={texture} attach="material" />
    </Sphere>
  );
}

const Globe = () => {
  const texture = new THREE.TextureLoader().load(EarthTexture);

  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Earth texture={texture} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Globe;

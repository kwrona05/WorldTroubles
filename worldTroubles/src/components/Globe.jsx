/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, Sphere } from "@react-three/drei";
import * as THREE from "three";
import EarthTexture from "./textures/EarthTexture.jpg";

const EarthPoint = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry arg={[0.05, 8, 8]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

function Earth({ texture, points }) {
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={earthRef} args={[2, 32, 32]}>
      <meshStandardMaterial map={texture} attach="material" />
      {points.map((point, index) => (
        <EarthPoint key={index} position={point} />
      ))}
    </Sphere>
  );
}

const SphericalToCertasian = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return [x, y, z];
};

const Globe = () => {
  const texture = new THREE.TextureLoader().load(EarthTexture);

  const pointsData = [
    { lat: -75, lon: 0 } /*Dziura ozonowa*/,
    { lat: 49, lon: 32 } /*Ukraina*/,
  ];

  const points = pointsData.map(({ lat, lon }) =>
    SphericalToCertasian(lat, lon, 1.05)
  );

  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      camera={{ position: [0, 0, 100] }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Earth texture={texture} points={points} />
      <OrbitControls minDistance={4} maxDistance={8} enablePan={false} />
    </Canvas>
  );
};

export default Globe;

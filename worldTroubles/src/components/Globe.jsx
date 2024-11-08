/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import EarthTexture from "./textures/EarthTexture.jpg";

const GlobePoint = ({ position, label }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    alert(`Kliknięto punkt: ${label}`);
  };

  return (
    <mesh
      position={position}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial color={hovered ? "yellow" : "white"} />
      {hovered && (
        <Html>
          <div className="label-div">{label}</div>
        </Html>
      )}
    </mesh>
  );
};

function Earth({ texture, points }) {
  const earthRef = useRef();

  return (
    <Sphere ref={earthRef} args={[3, 32, 32]}>
      <meshStandardMaterial map={texture} attach="material" />
      {points.map((point, index) => (
        <GlobePoint key={index} position={point.position} label={point.label} />
      ))}
    </Sphere>
  );
}

const SphericalToCartesian = (lat, lon, radius) => {
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
    { lat: -75, lon: 0, label: "Ozone Hole" },
    { lat: 49, lon: 32, label: "War in Ukraine" },
    {
      lat: -3.5,
      lon: -62.2,
      label: "Amazonia- lungs of the Earth",
    },
    {
      lat: -33.9,
      lon: 18.4,
      label: "South Africa- Water crysis!",
    },
    {
      lat: 39.9,
      lon: 116.4,
      label: "Pekin- No fresh air",
    },
    { lat: 34.8, lon: 39, label: "Civil War- How much longer?" },
    {
      lat: 23.7,
      lon: 90.4,
      label: "Bangladesh- No clear water",
    },
    { lat: 39.47, lon: -0.38, label: "Valencia- Terrible floods" },
  ];

  const points = pointsData.map(({ lat, lon, label }) => ({
    position: SphericalToCartesian(lat, lon, 3),
    label,
  }));

  return (
    <Canvas
      style={{ width: "100vh", height: "100vh" }}
      camera={{ position: [0, 0, 6] }}
    >
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <Earth texture={texture} points={points} />
      <OrbitControls minDistance={5} maxDistance={15} enablePan={false} />
    </Canvas>
  );
};

export default Globe;

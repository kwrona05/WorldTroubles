/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import EarthTexture from "./textures/EarthTexture.jpg";
import { useNavigate } from "react-router-dom";

const GlobePoint = ({ position, label, path }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial color={hovered ? "white" : "red"} />
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
        <GlobePoint
          key={index}
          position={point.position}
          label={point.label}
          path={point.path}
        />
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
    { lat: -75, lon: 0, label: "Ozone Hole", path: "/ozonehole" },
    { lat: 49, lon: 32, label: "War in Ukraine", path: "/ukraine" },
    {
      lat: -3.5,
      lon: -62.2,
      label: "Amazonia- lungs of the Earth",
      path: "/amazonia",
    },
    {
      lat: -33.9,
      lon: 18.4,
      label: "South Africa- Water crysis!",
      path: "/rpa",
    },
    {
      lat: 39.9,
      lon: 116.4,
      label: "Pekin- No fresh air",
      path: "/pekin",
    },
    {
      lat: 34.8,
      lon: 39,
      label: "Civil War- How much longer?",
      path: "/syria",
    },
    {
      lat: 23.7,
      lon: 90.4,
      label: "Bangladesh- No clear water",
      path: "/bangladesh",
    },
    {
      lat: 39.47,
      lon: -0.38,
      label: "Valencia- Terrible floods",
      path: "/spain",
    },
  ];

  const points = pointsData.map(({ lat, lon, label, path }) => ({
    position: SphericalToCartesian(lat, lon, 3),
    label,
    path,
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

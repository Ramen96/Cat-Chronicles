import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useGSAP } from "@gsap/react";

// import Nav from "../components/nav/nav";
// import chaniGrinch from "../assets/ChaniGrinch.jpg";
// import chaniBox from "../assets/chaniBox.jpg";

import "../root.css";
import "../css/container.css";
import "../css/card.css";
import "../css/text.css";
import "../css/background.css";
import "../css/assets.css";
import "../css/button.css";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// export async function loader() {
//   return json({
//     ENV: {
//       STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
//       FAUNA_DB_URL: process.env.FAUNA_DB_URL,
//     },
//   });
// }

function Box(props) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(true)}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Index() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

// import * as THREE from "three";

// gsap.registerPlugin(TextPlugin);

// export default function Index() {
//   const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   this.window.innerWidth / this.window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// const animatedText = useRef();
// useGSAP(() => {
//   gsap.to(animatedText.current, {
//     duration: 3,
//     text: "Chani's Cosmic Chronicles: A Voyage of Feline Fun in the Final Frontier!",
//     delay: 0.5,
//     ease: "none",
//   });
// });

// return <script></script>;
// }

import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

import "./root.css";

gsap.registerPlugin(TextPlugin);

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

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}

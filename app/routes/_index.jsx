// Plugins
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useGSAP } from "@gsap/react";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { AmbientLight } from "three";
import * as THREE from "three";

// Components
import Nav from "../components/nav/nav";
import TextAnimation from "../components/textAnime/text.jsx";

// 3D Components
import Cat from "../3DComponents/cat/Cat.jsx";
import CuteCat from "../3DComponents/cute_cat/CuteCat.jsx";
import Gatochan from "../3DComponents/gatochan/Gatochan.jsx";
import LittleCat from "../3DComponents/little_cat/LittleCat.jsx";
import Room101 from "../3DComponents/low_poly_room/Room.jsx";
import Taurus from "../3DComponents/taurus/Taurus.jsx";
import Pusheen from "../3DComponents/pusheen/Pusheen.jsx";

// Css
import "../root.css";
import "../css/container.css";
import "../css/card.css";
import "../css/text.css";
import "../css/background.css";
import "../css/assets.css";
import "../css/button.css";
import "../css/cuteCat.css";
import { FlakesTexture } from "three/examples/jsm/Addons.js";

export default function Index() {
  let change1 = 0;
  let change2 = 0;

  function changePosition() {}

  return (
    <div className="containerB bgImg">
      <Nav />
      <TextAnimation />
      <Canvas className="bouncing-object">
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
            fov={75}
            zoom={0.5}
          />
          <OrbitControls enableZoom={false} autoRotate={true} />
          <CuteCat />
          <ambientLight />
        </Suspense>
      </Canvas>
    </div>
  );
}

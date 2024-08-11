// Plugins
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useGSAP } from "@gsap/react";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { AmbientLight } from "three";

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

const letThereBeLight = new AmbientLight();

export default function Index() {
  return (
    <div className="containerB bgImg">
      <Nav />
      <TextAnimation />
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <CuteCat />
          <ambientLight />
        </Suspense>
      </Canvas>
    </div>
  );
}

// export default function Index() {
//   const animatedText = useRef();
//   useGSAP(() => {
//     gsap.to(animatedText.current, {
//       duration: 3,
//       text: "Chani's Cosmic Chronicles: A Voyage of Feline Fun in the Final Frontier!",
//       delay: 0.5,
//       ease: "none",
//     });
//   });

//   return (
//     <>
//       <Nav />
//       <div className="containerB conAPosition bgImg">
//         <p ref={animatedText} className="textA"></p>
//         <Canvas>
//           <Suspense fallback={null}>
//             <OrbitControls />
//             <CuteCat />
//             <ambientLight />
//           </Suspense>
//         </Canvas>
//       </div>
//     </>
//   );
// }

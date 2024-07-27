import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useRef } from "react";
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

// import * as THREE from "three";

// gsap.registerPlugin(TextPlugin);

export default function Index() {
  return <h1>Hello World</h1>;
}
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

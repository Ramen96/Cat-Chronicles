import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import "./text.css";

export default function TextAnimation() {
  const animatedText = useRef();
  useGSAP(() => {
    gsap.to(animatedText.current, {
      duration: 3,
      text: "Chani's Cosmic Chronicles: A Voyage of Feline Fun in the Final Frontier!",
      delay: 0.5,
      ease: "none",
    });
  });

  return (
    <div className="containerA">
      <p ref={animatedText} className="textA"></p>
    </div>
  );
}

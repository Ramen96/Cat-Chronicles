import { gsap } from "gsap/dist/gsap";    
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import styles from "../root.module.css";
import chani1 from "../assets/chani2.png";
import space from "../assets/space.jpg";
import Nav from "../components/nav/nav";

gsap.registerPlugin(TextPlugin);

export default function Index() {
  const animatedText = useRef();
  useGSAP(() => {
    gsap.to(animatedText.current, {
    duration: 10,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum sapiente quisquam temporibus, provident culpa maxime a, architecto omnis ad eos animi magni harum voluptatem doloremque impedit quae nam ipsum.",
    delay: 0.5,
    ease: "none"
   });
  })

  return(
    <div className={styles.container}>
      <img className={styles.space} src={space} alt="space" />
      <Nav />
      <div className={styles.container}>
          <div className={styles.content}>
            <p ref={animatedText} className={styles.p1}></p>
            <img className={styles.chani1} src={chani1} alt="cat" />
          </div>
        </div>
    </div>
  )
}
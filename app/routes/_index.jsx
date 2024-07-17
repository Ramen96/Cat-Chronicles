import { gsap } from "gsap/dist/gsap";    
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import styles from "../root.module.css";
import chani1 from "../assets/chani2.png";
import space from "../assets/space.avif";
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
    <div className={styles.bgImg}>
      <Nav />
      <div className={styles.containerA} >
        <main className={styles.main}>
          <div className={styles.containerB}>
            <p ref={animatedText} className={styles.textA}></p>
            <div className={styles.containerB}>
              <div className={styles.chani1}></div>
            </div>
          </div> 
        </main>
      </div>
    </div>
  )
}
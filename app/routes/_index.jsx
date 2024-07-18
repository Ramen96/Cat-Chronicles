import { gsap } from "gsap/dist/gsap";    
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import styles from "../root.module.css";
import Nav from "../components/nav/nav";

gsap.registerPlugin(TextPlugin);

export default function Index() {
  const animatedText = useRef();
  useGSAP(() => {
    gsap.to(animatedText.current, {
    duration: 3,
    text: "Chani's Cosmic Chronicles: A Tail of Feline Fun in the Final Frontier!",
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
              <div className={styles.containerC}>
                <p className={styles.textB}>Welcome to the cosmic adventure of Chani, the space-faring feline who's here to show you that life is better with a dash of feline flair! With paws that have walked the stars and a purr that can soothe even the deepest of black holes, Chani invites you to explore the quirky, the fun, and the absolutely pawsome side of life. Whether you're a cat lover, a space enthusiast, or just someone looking for a good laugh, Chani's got you covered. So buckle up, grab your favorite catnip, and get ready to blast off into a world where every day is a new adventure and every meow is a masterpiece!</p>
              </div>
            </div>
          </div> 
        </main>
      </div>
    </div>
  )
}
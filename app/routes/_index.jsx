import { gsap } from "gsap/dist/gsap";    
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import styles from "../root.module.css";
import Nav from "../components/nav/nav";

import "../../css/container.css";
import "../../css/card.css";
import "../../css/text.css";
import "../../css/background.css";
import "../../css/assets.css";

gsap.registerPlugin(TextPlugin);

export default function Index() {
  const animatedText = useRef();
  useGSAP(() => {
    gsap.to(animatedText.current, {
    duration: 3,
    text: "Chani's Cosmic Chronicles: A Voyage of Feline Fun in the Final Frontier!",
    delay: 0.5,
    ease: "none"
   });
  })

  return(
  <>
    <div className="bgImg">
      <Nav />
      <div className="containerA" >
        <main className={styles.main}>
          <div className="containerB">
            <p ref={animatedText} className="textA"></p>
            <div className="chani1"></div>
            <div className="containerC">
              <p className="textB">Welcome to the cosmic adventure of Chani, the space-faring feline who's here to show you that life is better with a dash of feline flair!</p>
              <p className="textB">With paws that have walked the stars and a purr that can soothe even the deepest of black holes, Chani invites you to explore the quirky, the fun, and the absolutely pawsome side of life.</p>
              <p className="textB">Whether you're a cat lover, a space enthusiast, or just someone looking for a good laugh, Chani's got you covered. So buckle up, grab your favorite catnip, and get ready to blast off into a world where every day is a new adventure and every meow is a masterpiece!</p> 
            </div>
          </div> 
        </main>
      </div>
      <div className="containerB">
        <div className="cardA">
          <div className="cardAConA">
            <div className="cardAsubA">
              <div className="cardAsubB">
                <p className="textB">This Section is a place holder for a brife profile aobut Chani</p>
              </div>
              <div className="cardAsubB">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerB">
        <div className="cardA">
          <p className="textB">Placeholder for preview of Learn page</p>
        </div>
      </div>
      <div className="containerB">
        <div className="cardA">
          <p className="textB">Placehoder for sneekpeak/screenshot of game</p>
        </div>
      </div>
      <div className="containerB">
        <div className="cardA">
          <p className="textB">Placeholder for Call to action for users to keep exploring the site</p>
        </div>
      </div>
    </div>
  </>
  )
}
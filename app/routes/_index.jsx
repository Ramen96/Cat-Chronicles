import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import Nav from "../components/nav/nav";
import chaniGrinch from "../assets/ChaniGrinch.jpg";
import chaniBox from "../assets/chaniBox.jpg";

import "../root.css";
import "../css/container.css";
import "../css/card.css";
import "../css/text.css";
import "../css/background.css";
import "../css/assets.css";
import "../css/button.css";

gsap.registerPlugin(TextPlugin);

export default function Index() {
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
    <>
      <Nav />
      <div className="container0">
        <div className="containerA conAPosition">
          <main className="main">
            <div className="containerB bgImg">
              <p ref={animatedText} className="textA"></p>
              <div className="chani1"></div>
              <div className="containerC">
                <p className="textB">
                  Welcome to the cosmic adventure of Chani, the space-faring
                  feline who's here to show you that life is better with a dash
                  of feline flair!
                </p>
                <p className="textB">
                  With paws that have walked the stars and a purr that can
                  soothe even the deepest of black holes, Chani invites you to
                  explore the quirky, the fun, and the absolutely pawsome side
                  of life.
                </p>
                <p className="textB">
                  Whether you're a cat lover, a space enthusiast, or just
                  someone looking for a good laugh, Chani's got you covered. So
                  buckle up, grab your favorite catnip, and get ready to blast
                  off into a world where every day is a new adventure and every
                  meow is a masterpiece!
                </p>
              </div>
            </div>
            <div className="containerB">
              <div className="cardA">
                <div className="cardAConA">
                  <div className="cardAsubA">
                    <div className="cardAsubB">
                      <img
                        className="chaniGrinch"
                        src={chaniBox}
                        alt="Chani Box"
                      ></img>
                      <a className="a" href="/about">
                        <button className="button">
                          <h1 className="textB">Read More</h1>
                        </button>
                      </a>
                    </div>
                    <div className="cardAsubB">
                      <h1 className="textB fontBold">Chani</h1>
                      <p className="textC">
                        Meet Chani, the resilient feline who found her forever
                        home on the side of the road. Rescued on September 4th,
                        2022, Chani had a rough start with a broken leg and hip.
                        But after six months of love and care, she made a full
                        recovery and now enjoys a playful life filled with
                        coding sessions, video games, and cuddles with her
                        canine companion, Buddy. Despite her shyness, Chani's
                        adventurous spirit and affectionate nature make her a
                        beloved member of the family.
                      </p>
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
                <p className="textB">
                  Placehoder for sneekpeak/screenshot of game
                </p>
              </div>
            </div>
            <div className="containerB">
              <div className="cardA">
                <p className="textB">
                  Placeholder for Call to action for users to keep exploring the
                  site
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

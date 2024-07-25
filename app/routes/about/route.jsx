import Nav from "../../components/nav/nav";
import styles from "./about.module.css";

import chaniGrinch from "../../assets/ChaniGrinch.jpg";
import chaniBox from "../../assets/chaniBox.jpg";

import "../../root.css";
import "../../css/container.css";
import "../../css/card.css";
import "../../css/text.css";
import "../../css/background.css";
import "../../css/assets.css";
import "../../css/button.css";

export default function About() {
  return (
    <>
      <Nav />
      <div className="container0">
        <div className="containerA conAPosition bgImg">
          <main className="main">
            <div className="containerB bgImg">
              <div className="containerD">
                <h1 className="textA">Meet Chani,</h1>
                <img
                  className="chaniGrinch"
                  src={chaniGrinch}
                  alt="chani grinch"
                ></img>
              </div>
              <div className="containerD">
                <div className="containerC">
                  <p className="textB">
                    The purrfect embodiment of resilience and the unbreakable
                    spirit of feline kind. Rescued on September 4th, 2022, from
                    the cruel fate of being abandoned on the side of the road,
                    Chani's journey is one of triumph against all odds.
                  </p>
                  <p className="textB">
                    With a broken back right leg and hip, the odds seemed
                    stacked against her. But with the unwavering love and care
                    of her human and the expertise of the vet, Chani defied the
                    prognosis and made a miraculous full recovery without the
                    need for amputation.
                  </p>
                  <p className="textB">
                    Inspired by the fierce and loyal character from Frank
                    Herbert's Dune saga, Chani was given a name that perfectly
                    encapsulates her indomitable spirit. During her recovery,
                    Chani formed an unbreakable bond with Buddy, the dog at her
                    human's parents' house. Their playful antics and cuddling
                    sessions were the stuff of legends.
                  </p>
                  <p className="textB">
                    Now, fully recovered and living with her human, Chani
                    continues to bring joy and inspiration to all who meet her.
                    Her story is a testament to the power of love, resilience,
                    and the unbreakable bonds between humans and their furry
                    companions.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload
} from "@remix-run/react";

import { gsap } from "gsap/dist/gsap";    
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import styles from "./root.module.css";
import chani1 from "./assets/chani2.png";

gsap.registerPlugin(TextPlugin);

export default function App() {

  const animatedText = useRef();
  useGSAP(() => {
    gsap.to(animatedText.current, {
    duration: 10,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum sapiente quisquam temporibus, provident culpa maxime a, architecto omnis ad eos animi magni harum voluptatem doloremque impedit quae nam ipsum.",
    delay: 1,
    ease: "none"
   });
  })

  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body className={styles.body}>
        <div className={styles.container}>
          <section>
            <nav>
              <button className={styles.navitem}>
                <p>Home</p>
              </button>
              <button className={styles.navitem}>
                <p>Cat Chronicles</p>
              </button>
              <button className={styles.navitem}>
                <p>Learn</p>
              </button>
              <button className={styles.navitem}>
                <p>About</p>
              </button>
            </nav>
          </section>
          <div className={styles.container}>
              <div className={styles.content}>
                <p ref={animatedText} className={styles.p1}>Bacon ipsum dolor amet pork belly meatloaf kielbasa spare ribs ham hock tenderloin frankfurter ribeye boudin.</p>
                <img src={chani1} alt="cat" />
              </div>
            </div>
        </div>
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


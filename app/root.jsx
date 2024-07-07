import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload
} from "@remix-run/react";

import styles from "./root.module.css";
import chani1 from "./assets/chani2.png";

export default function App() {
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
              <div className={styles.navitem}>
                <p><a href="#">Home</a></p>
              </div>
              <div className={styles.navitem}>
                <p><a href="#">Cat Chronicles</a></p>
              </div>
              <div className={styles.navitem}>
                <p><a href="#">Learn</a></p>
              </div>
              <div className={styles.navitem}>
                <p><a href="#">About</a></p>
              </div>
            </nav>
          </section>
          <div className={styles.container}>
              <div className={styles.content}>
                <p className={styles.p1}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum sapiente quisquam temporibus, provident culpa maxime a, architecto omnis ad eos animi magni harum voluptatem doloremque impedit quae nam ipsum.</p>
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


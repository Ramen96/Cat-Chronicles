import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload
} from "@remix-run/react";

import styles from "./root.module.css";

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
          <section>
            <nav>
              <div className={styles.navitem}>
                <p>Home</p>
              </div>
              <div className={styles.navitem}>
                <p>Cat Chronicles</p>
              </div>
              <div className={styles.navitem}>
                <p>Cat info</p>
              </div>
              <div className={styles.navitem}>
                <p>About</p>
              </div>
            </nav>
          </section>
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


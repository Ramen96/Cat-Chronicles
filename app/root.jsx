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
              <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas excepturi quaerat fuga eum libero reprehenderit exercitationem culpa temporibus? Cupiditate magni doloremque magnam deleniti consequuntur sequi quod sunt necessitatibus nulla.</p>
              <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas excepturi quaerat fuga eum libero reprehenderit exercitationem culpa temporibus? Cupiditate magni doloremque magnam deleniti consequuntur sequi quod sunt necessitatibus nulla.</p>
              <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas excepturi quaerat fuga eum libero reprehenderit exercitationem culpa temporibus? Cupiditate magni doloremque magnam deleniti consequuntur sequi quod sunt necessitatibus nulla.</p>
              <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas excepturi quaerat fuga eum libero reprehenderit exercitationem culpa temporibus? Cupiditate magni doloremque magnam deleniti consequuntur sequi quod sunt necessitatibus nulla.</p>
              <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas excepturi quaerat fuga eum libero reprehenderit exercitationem culpa temporibus? Cupiditate magni doloremque magnam deleniti consequuntur sequi quod sunt necessitatibus nulla.</p>
              <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas excepturi quaerat fuga eum libero reprehenderit exercitationem culpa temporibus? Cupiditate magni doloremque magnam deleniti consequuntur sequi quod sunt necessitatibus nulla.</p>
              <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas excepturi quaerat fuga eum libero reprehenderit exercitationem culpa temporibus? Cupiditate magni doloremque magnam deleniti consequuntur sequi quod sunt necessitatibus nulla.</p>
              <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas excepturi quaerat fuga eum libero reprehenderit exercitationem culpa temporibus? Cupiditate magni doloremque magnam deleniti consequuntur sequi quod sunt necessitatibus nulla.</p>
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


import {
  Links,
  Meta,
  Outlet,
  Scripts
} from "@remix-run/react";

import { gsap } from "gsap/dist/gsap";    
import { TextPlugin } from "gsap/dist/TextPlugin";
import styles from "./root.module.css";

gsap.registerPlugin(TextPlugin);

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
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}


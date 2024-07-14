import { LiveReload } from "@remix-run/react";
import Nav from "../components/nav";
import styles from "../css/module.about.css";

export default function About() {
  return(
    <>
      <Nav />
      <div className={styles.container}>
        <p>Hello World</p>
      </div>
    </>
    
  )
}
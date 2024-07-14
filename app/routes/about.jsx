import Nav from "../components/nav";

import styles from "../css/module.about.css";

export default function about() {
  return(
    <>
      <Nav />
      <div className={styles.container}>
        <p>Hello World</p>
      </div>
    </>
    
  )
}
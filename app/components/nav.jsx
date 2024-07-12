import styles from "../css/nav.module.css";

export default function Nav() {
  return(
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
  )
}
import styles from "./nav.module.css";

export default function Nav() {
  return(
    <section>
      <nav>
        <button className={styles.navitem}>
          <a href="/">Home</a>
        </button>
        <button className={styles.navitem}>
          <a href="./cat-chronicles">Cat Chronicles</a>
        </button>
        <button className={styles.navitem}>
          <a href="./learn">Learn</a>
        </button>
        <button className={styles.navitem}>
          <a href="./about">About</a>
        </button>
      </nav>
    </section>
  )
}
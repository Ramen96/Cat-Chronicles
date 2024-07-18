import styles from "./nav.module.css";

export default function Nav() {
  return(
    <section>
      <nav>
          <a href="/"> 
            <button className={styles.navitem}>
              <p>Home</p>
            </button>
          </a>
          <a href="./cat-chronicles">
            <button className={styles.navitem}>
              <p>Cat Chronicles</p>  
            </button>
          </a>
          <a href="./learn">
            <button className={styles.navitem}>
              <p>Learn</p>
            </button>
          </a>
          <a href="./about">
            <button className={styles.navitem}>
              <p>About</p>
            </button>
          </a>
      </nav>
    </section>
  )
}
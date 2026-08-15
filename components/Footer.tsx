import Link from "next/link";
import styles from "./Footer.module.css";

const APPLY_URL = "https://forms.gle/HXagfZE1e7NiD4KJ7";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>
          <span className={styles.wordmark}>BioCraft</span>
          <p className={styles.tagline}>Bioethics: Science and the Future of Medicine</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <Link href="/" className="pressable">
            Home
          </Link>
          <Link href="/curriculum" className="pressable">
            Curriculum
          </Link>
          <Link href="/about" className="pressable">
            About
          </Link>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="pressable">
            Apply
          </a>
        </nav>

        <p className={styles.meta}>Fall 2026 Cohort</p>
      </div>
    </footer>
  );
}

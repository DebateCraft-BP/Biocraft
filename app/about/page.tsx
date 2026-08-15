import type { Metadata } from "next";
import { team } from "@/content/team";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "The Harkness method, the mission behind BioCraft, and the people running the course.",
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <p className="label">About</p>
        <h1 className={styles.title}>BioCraft</h1>
        <p className={styles.lead}>[TODO: mission statement]</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>The Harkness method</h2>
        <p className={styles.body}>
          Harkness discussion puts students around a table instead of in rows facing a lecturer.
          Students prepare through assigned readings and short videos before class, then run the
          discussion themselves — the instructor guides rather than lectures. Two sessions in the
          genetics unit are run this way, each built around a single debate question.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Team</h2>
        <ul className={styles.team}>
          {team.map((person) => (
            <li key={person.name} className={styles.person}>
              <h3 className={styles.personName}>{person.name}</h3>
              <p className={styles.personRole}>{person.role}</p>
              <p className={styles.personBio}>{person.bio}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

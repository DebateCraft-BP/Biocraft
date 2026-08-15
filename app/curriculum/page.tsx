import type { Metadata } from "next";
import { units } from "@/content/curriculum";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Four units, ten sessions: the full syllabus for the Fall 2026 Bioethics course.",
};

export default function CurriculumPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <p className="label">Syllabus</p>
        <h1 className={styles.title}>Curriculum</h1>
        <p className={styles.lead}>
          Ten one-hour sessions across four units, run as Harkness discussions. Students read and
          watch short videos before each session, then debate the questions in class.
        </p>
      </header>

      {units.map((unit) => (
        <section key={unit.number} className={styles.unit}>
          <div className={styles.unitHead}>
            <span className={styles.unitTag}>Unit {unit.number}</span>
            <h2 className={styles.unitTitle}>{unit.title}</h2>
          </div>

          <ol className={styles.sessionList}>
            {unit.sessions.map((session) => (
              <li key={session.number} className={styles.session}>
                <span className={styles.sessionNumber}>{session.number}</span>
                <div className={styles.sessionBody}>
                  <p className={styles.sessionTitle}>
                    {session.title}
                    {session.optional && <span className={styles.optional}> — optional</span>}
                  </p>
                  <p className={styles.sessionDescription}>{session.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <p className={styles.closing}>
        The final project is a research paper, a review paper, or a presentation on a bioethics topic
        the student chooses — 3D bioprinting, for example. Students may work with an instructor across
        two optional sessions before presenting and defending the project at a closing panel, open to
        parents.
      </p>
    </div>
  );
}

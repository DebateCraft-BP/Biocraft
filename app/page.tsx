import type { Metadata } from "next";
import Link from "next/link";
import { units, courseStats, coursePositioning } from "@/content/curriculum";
import styles from "./page.module.css";

const APPLY_URL = "https://forms.gle/HXagfZE1e7NiD4KJ7";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroFrame} aria-hidden="true" />
          <div className={styles.heroImage} aria-hidden="true" />

          <div className={styles.heroText}>
            <p className="label">Fall 2026 · Exeter Biology Symposium</p>
            <h1 className={styles.title}>
              Bioethics: Science and the <span className={styles.accentSpan}>Future of Medicine</span>
            </h1>
            <p className={styles.leadStrong}>
              An Exeter Biology Symposium program, run in partnership with DebateCraft Academy. Ten
              seats, admission by application.
            </p>
            <p className={styles.lead}>{coursePositioning}</p>
            <div className={styles.heroActions}>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Apply now
              </a>
              <Link href="/curriculum" className="btn">
                View curriculum
              </Link>
            </div>
          </div>

          <dl className={styles.stats}>
            {courseStats.map((stat, i) => (
              <div key={stat.label} className={styles.stat}>
                {i > 0 && <span className={styles.statSep} aria-hidden="true" />}
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.about}>
            <h2 className={styles.sectionHeading}>What the course is</h2>
            <div className={styles.aboutBody}>
              <p>
                Students prepare through readings and short videos, then debate the questions in class
                using the Harkness method — a discussion around a table, led by student voices rather
                than lecture. Two sessions on genetics end in Harkness debates: whether embryos should
                be tested for disease, and whether parents should be able to choose their child&rsquo;s
                traits.
              </p>
              <p>
                The course moves from cell biology and inheritance, through the history of research
                ethics from Nuremberg to today, into CRISPR and AI in healthcare. It closes with a
                student-chosen project — a research paper or a presentation — defended before a panel
                and an audience of parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.unitsHead}>
            <h2 className={styles.sectionHeading}>Course units</h2>
            <Link href="/curriculum" className={`${styles.unitsLink} pressable`}>
              Full curriculum →
            </Link>
          </div>
          <ol className={styles.unitList}>
            {units.map((unit) => (
              <li key={unit.number} className={styles.unitRow}>
                <span className={styles.unitNumber}>{String(unit.number).padStart(2, "0")}</span>
                <span className={styles.unitTitle}>{unit.title}</span>
                <span className={styles.unitCount}>
                  {unit.sessions.length} session{unit.sessions.length === 1 ? "" : "s"}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Run by Exeter Biology Symposium</h2>
          <p className={styles.orgsIntro}>In partnership with DebateCraft Academy.</p>
          <div className={styles.orgs}>
            <span className={styles.orgRed}>Exeter Biology Symposium</span>
            <span className={styles.orgBlue}>DebateCraft Academy</span>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.sectionHeading}>Apply</h2>
            <p className={styles.ctaBody}>
              Ten seats in the Fall 2026 cohort, admission by application, hosted by Exeter Biology
              Symposium.
            </p>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Apply now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

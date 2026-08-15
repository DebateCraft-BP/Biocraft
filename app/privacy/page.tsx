import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DebateCraft Academy collects, uses, and protects information for BioCraft and its other programs.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  { id: "p1", label: "1. Scope" },
  { id: "p2", label: "2. Information we collect" },
  { id: "p3", label: "3. How we use information" },
  { id: "p4", label: "4. Recording, images and publication" },
  { id: "p5", label: "5. How we share information" },
  { id: "p6", label: "6. Data retention" },
  { id: "p7", label: "7. Children's privacy" },
  { id: "p8", label: "8. Cookies and tracking" },
  { id: "p9", label: "9. Data security" },
  { id: "p10", label: "10. Your privacy rights" },
  { id: "p11", label: "11. International operations" },
  { id: "p12", label: "12. Changes to this policy" },
  { id: "p13", label: "13. Contact us" },
];

export default function PrivacyPage() {
  return (
    <div className="container legal">
      <header className="legalHeader">
        <p className="label">Privacy Policy</p>
        <h1 className="legalTitle">Privacy Policy</h1>
        <p className="legalMeta">Effective from July 1, 2026</p>
      </header>

      <div className="legalNote">
        This policy is written to be complete and to comply with applicable United States privacy law.
        It is not a substitute for legal advice — DebateCraft Academy&rsquo;s specific facts (its state
        of organization, the platforms it uses, and its full data-sharing arrangements) should be
        confirmed with qualified counsel before this policy is relied upon as final. Some items below are
        marked <strong>[to confirm]</strong> where a fact was not available at the time this policy was
        drafted; those items should be resolved before publication.
      </div>

      <nav className="legalToc" aria-label="Sections">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
      </nav>

      <p style={{ maxWidth: "var(--measure)", color: "var(--body)", marginBottom: "3rem" }}>
        DebateCraft Academy (&ldquo;the Academy,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates
        BioCraft and its other education programs, and the websites through which they are presented,
        including this one. This policy explains what information we collect, why, how long we keep it,
        who we share it with, and the choices and rights available to you. It applies to this website and
        to the programs it describes. It should be read alongside the{" "}
        <a href="/terms" style={{ color: "var(--fg)" }}>
          Student and Family Agreement
        </a>
        , which governs enrollment and contains the operative recording and publication consent terms
        referenced in Section 4 below.
      </p>

      <section id="p1" className="legalSection">
        <h2>1. Scope</h2>
        <p>
          This policy covers two separate contexts, because they involve different data and different
          rules:
        </p>
        <ul>
          <li>
            <strong>This website.</strong> The BioCraft site is informational. It does not require an
            account, does not run a payment or checkout flow, and does not itself set tracking cookies or
            run analytics or advertising scripts (see Section 8). Its only data-collecting element is a
            link to an external application form (Section 2).
          </li>
          <li>
            <strong>Program participation.</strong> Applying to and taking part in a BioCraft cohort
            involves the collection of information about a Student and their Family, described in Section
            2, to run the program safely.
          </li>
        </ul>
        <p>
          &ldquo;Personal information&rdquo; in this policy means information that identifies, relates
          to, or could reasonably be linked with a particular individual or household, consistent with
          the definition used in the state privacy laws referenced in Section 10.
        </p>
      </section>

      <section id="p2" className="legalSection">
        <h2>2. Information we collect</h2>
        <h3>2.1 Information you or your family provide</h3>
        <ul>
          <li>Student&rsquo;s full name, age or date of birth, and school year;</li>
          <li>a parent or guardian&rsquo;s name and relationship to the Student, where the Student is under 18;</li>
          <li>contact details for the Family: email address and phone number;</li>
          <li>information provided in the application form, which is hosted by Google Forms (see Section 5.2) and governed additionally by Google&rsquo;s own privacy policy once you leave this site to complete it;</li>
          <li>information needed for safeguarding purposes, if the Academy specifically requests it (Section 2.1 of the Student and Family Agreement);</li>
          <li>any correspondence you send to info@debatecraft.org or to an assigned coach&rsquo;s @debatecraft.org address.</li>
        </ul>
        <h3>2.2 Information generated during the program</h3>
        <ul>
          <li>attendance records and attendance points (Schedule A of the Student and Family Agreement);</li>
          <li>coaching feedback and assessment records;</li>
          <li>session recordings, made as a condition of participation and used only for the operational purposes described in Section 4;</li>
          <li>a record of any conduct matter, appeal, or ineligibility-register entry concerning the Family, held as described in Sections 8 and 9 of the Student and Family Agreement.</li>
        </ul>
        <h3>2.3 Information collected automatically</h3>
        <p>
          This website does not use analytics, advertising, or tracking cookies. Our hosting provider
          necessarily processes standard web server log data to deliver the site and keep it secure —
          for example, IP address, browser and device type, and request timestamps. This is used only for
          hosting, security, and troubleshooting, is not linked to a Family&rsquo;s program record, and is
          not used to profile or target you.
        </p>
        <h3>2.4 What we do not collect</h3>
        <p>
          We do not collect payment information (the program is free of charge), government identification
          numbers, precise geolocation, or biometric identifiers. We do not knowingly collect personal
          information from children under 13 through this website — see Section 7.
        </p>
      </section>

      <section id="p3" className="legalSection">
        <h2>3. How we use information</h2>
        <p>We use the information described in Section 2 to:</p>
        <ul>
          <li>process applications and allocate program places;</li>
          <li>administer sessions, track attendance, and deliver instruction and feedback;</li>
          <li>safeguard the Students and volunteers in our programs, including investigating conduct concerns under the Student and Family Agreement;</li>
          <li>issue and verify certificates of completion;</li>
          <li>respond to questions, requests, and complaints sent to info@debatecraft.org;</li>
          <li>maintain the operational and safeguarding records described in Section 6; and</li>
          <li>where separately consented to, publish identifiable material about a Student as described in Section 4.</li>
        </ul>
        <p>
          We do not use personal information for behavioral advertising, do not build advertising profiles
          from it, and do not sell it. &ldquo;Sell&rdquo; and &ldquo;share&rdquo; are used in this policy
          with the meanings given to them by the state privacy laws referenced in Section 10; under those
          definitions, we do not sell or share personal information.
        </p>
      </section>

      <section id="p4" className="legalSection">
        <h2>4. Recording, images and publication</h2>
        <p>
          This section summarizes, from a privacy standpoint, the recording and publication terms set out
          in full in Section 10 of the Student and Family Agreement. Where the two differ, the Student and
          Family Agreement governs.
        </p>
        <h3>4.1 Operational recording</h3>
        <p>
          Sessions are recorded as a condition of participation, not on a consent basis, because recording
          is necessary to teach, supervise volunteers, safeguard participants, and investigate complaints.
          These recordings are never published externally and are deleted within twelve months.
        </p>
        <h3>4.2 Publication</h3>
        <p>
          Use of an identifiable recording, photograph, or clip of a Student in marketing, recruitment, or
          public material is a separate purpose from operational recording. It operates on an opt-out
          basis at enrollment, and a Family may opt out — or withdraw a prior consent — at any time, for
          any reason, with no effect on the Student&rsquo;s place, by writing to info@debatecraft.org. We
          maintain a consent register for every published item and remove withdrawn material from channels
          we control within thirty days; we cannot recall printed material already distributed or content
          already reshared by third parties.
        </p>
      </section>

      <section id="p5" className="legalSection">
        <h2>5. How we share information</h2>
        <p>
          <strong>We do not sell personal information.</strong> We share it only in the following
          circumstances:
        </p>
        <h3>5.1 Academy staff and volunteers</h3>
        <p>
          Coaches, coordinators, and officers of the Academy access a Student&rsquo;s information only as
          needed to teach, supervise, or administer the program, consistent with Section 6 and 7 of the
          Student and Family Agreement.
        </p>
        <h3>5.2 Service providers</h3>
        <p>
          We use third-party services to operate the program and this website, including a website hosting
          provider, an application-form provider (Google Forms), and a video conferencing platform used to
          deliver online sessions <strong>[to confirm: name the specific platform in use]</strong>. These
          providers process information on our behalf, under their own applicable terms and privacy
          policies, and are not authorized to use it for their own independent purposes.
        </p>
        <h3>5.3 Legal and safety disclosures</h3>
        <p>
          We disclose personal information where required by law, where requested by a competent
          authority, or where we reasonably believe disclosure is necessary to protect the safety of a
          Student, a volunteer, or another person, consistent with Section 7.3 of the Student and Family
          Agreement.
        </p>
        <h3>5.4 Business transfers</h3>
        <p>
          If the Academy incorporates, obtains charitable status, or transfers its operations to a
          successor entity, personal information may transfer as part of that change, subject to this
          policy or a policy providing materially equivalent protection.
        </p>
      </section>

      <section id="p6" className="legalSection">
        <h2>6. Data retention</h2>
        <div className="legalTableWrap">
          <table className="legalTable">
            <thead>
              <tr>
                <th>Data</th>
                <th>Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enrollment and attendance records</td>
                <td>3 years after the Student&rsquo;s last cohort</td>
              </tr>
              <tr>
                <td>Certificate and credential records</td>
                <td>Indefinitely, so that certificates remain verifiable</td>
              </tr>
              <tr>
                <td>Operational session recordings</td>
                <td>12 months</td>
              </tr>
              <tr>
                <td>Coaching archive (a Student&rsquo;s own speeches)</td>
                <td>12 months after the Student&rsquo;s last cohort, unless the Student requests otherwise</td>
              </tr>
              <tr>
                <td>Published material (Section 4.2)</td>
                <td>3 years from creation, or until the Student turns 18, whichever is later</td>
              </tr>
              <tr>
                <td>Ineligibility register entries</td>
                <td>Per tier: 12 months, 36 months, or permanent with review every 3 years — see Schedule C of the Student and Family Agreement</td>
              </tr>
              <tr>
                <td>Website server logs</td>
                <td>Retained only as long as needed for security and troubleshooting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Where you exercise a deletion right under Section 10 and we are not required or permitted to
          keep the data (for example, to comply with law, resolve a dispute, or maintain the integrity of
          a certificate already issued), we will delete it within thirty days.
        </p>
      </section>

      <section id="p7" className="legalSection">
        <h2>7. Children&rsquo;s privacy</h2>
        <p>
          BioCraft is intended for students aged 13 and up. We do not knowingly collect personal
          information from a child under 13 through this website. If a parent believes a child under 13
          has provided us with personal information, contact info@debatecraft.org and we will delete it.
        </p>
        <p>
          The Children&rsquo;s Online Privacy Protection Act (COPPA) applies to operators who knowingly
          collect personal information online from children under 13; because our programs are not
          directed at that age group and we do not knowingly enroll students under 13, we do not believe
          COPPA&rsquo;s affirmative consent requirements apply to our normal operation. If that changes —
          for example, if a younger sibling&rsquo;s information is submitted in error — we will treat it
          as described above.
        </p>
        <p>
          For students aged 13 to 17, a parent or guardian&rsquo;s consent is already built into the
          program: the Student and Family Agreement requires a parent or guardian&rsquo;s signature for
          any Student under 18, and Section 10 of that Agreement gives the Family specific, ongoing control
          over whether the Student&rsquo;s image is published.
        </p>
      </section>

      <section id="p8" className="legalSection">
        <h2>8. Cookies and tracking</h2>
        <p>
          This website does not set first-party tracking cookies and does not run analytics, advertising,
          or social-media tracking scripts. It does not respond to browser &ldquo;Do Not Track&rdquo;
          signals because it does not track you in a way that signal is designed to stop. Our hosting
          provider may use technical, session-level mechanisms necessary to serve the site; these are not
          used to build a profile of you across other sites.
        </p>
        <p>
          If this changes — for example, if we later add analytics to understand site usage — we will
          update this policy first and, where required by law (including for any cookie subject to opt-in
          consent requirements), obtain your consent before it is set.
        </p>
        <p>
          The external application form (Section 2.1) is hosted by Google and is subject to
          Google&rsquo;s own cookie and privacy practices once you navigate to it; we do not control that
          page.
        </p>
      </section>

      <section id="p9" className="legalSection">
        <h2>9. Data security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards designed to protect
          personal information against unauthorized access, disclosure, alteration, or destruction,
          including restricting access to Student records to Academy staff and volunteers who need it to
          do their role. No method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
        <p>
          If we become aware of a breach involving personal information that triggers a notification
          obligation under applicable state breach-notification law, we will notify affected individuals
          and any required regulator within the timeframe that law requires.
        </p>
      </section>

      <section id="p10" className="legalSection">
        <h2>10. Your privacy rights</h2>
        <p>
          Depending on where you live, you may have some or all of the following rights over your
          personal information. These rights are provided under state laws including the California
          Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), the Virginia
          Consumer Data Protection Act (VCDPA), the Colorado Privacy Act (CPA), the Connecticut Data
          Privacy Act (CTDPA), the Utah Consumer Privacy Act (UCPA), and similar laws in other states as
          they take effect:
        </p>
        <ul>
          <li><strong>Right to know / access</strong> — what personal information we hold about you and how we use it;</li>
          <li><strong>Right to correct</strong> — inaccurate personal information we hold;</li>
          <li><strong>Right to delete</strong> — personal information we hold, subject to the retention needs described in Section 6;</li>
          <li><strong>Right to opt out of sale or sharing, or of targeted advertising</strong> — not applicable in practice, because we do not sell personal information, share it for cross-context behavioral advertising, or run targeted advertising;</li>
          <li><strong>Right to non-discrimination</strong> — we will not deny you the program, charge a different amount (the program is free regardless), or provide a different level of service because you exercised a privacy right; and</li>
          <li><strong>Right to appeal</strong> — where a state law provides an internal appeal process for a denied request, we will provide it and explain how to use it in our response.</li>
        </ul>
        <p>
          To exercise any of these rights, email info@debatecraft.org with your request and enough
          information for us to identify the Student&rsquo;s record (full name and the cohort attended is
          usually sufficient). We may need to verify your identity, or your authority to act for a Student
          who is a minor, before completing certain requests. We will respond within thirty days, or
          within the shorter period a specific state law requires; if we need more time we will tell you
          why.
        </p>
        <p>
          You may also designate an authorized agent to make a request on your behalf, subject to
          verification, where the state law applicable to you provides for this.
        </p>
      </section>

      <section id="p11" className="legalSection">
        <h2>11. International operations</h2>
        <p>
          DebateCraft Academy&rsquo;s volunteers, coaches, and program operations are not confined to a
          single country. As a result, personal information may be processed by staff or volunteers
          located outside the country you live in, including outside the United States. Where that is the
          case, we take steps to keep the protections in this policy in place regardless of where the
          information is processed. If a jurisdiction in which we operate imposes its own data protection
          requirements beyond what is described here — for example, in a region with its own privacy
          statute — those requirements apply in addition to, not instead of, this policy, and should be
          confirmed separately with qualified local counsel <strong>[to confirm]</strong>.
        </p>
      </section>

      <section id="p12" className="legalSection">
        <h2>12. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Where a change is material, we will notify enrolled
          Families in writing at least thirty days before it takes effect, consistent with the amendment
          process in Section 14.3 of the Student and Family Agreement. The &ldquo;Effective from&rdquo;
          date at the top of this page reflects the version currently in force.
        </p>
      </section>

      <section id="p13" className="legalSection">
        <h2>13. Contact us</h2>
        <p>
          Questions about this policy, or requests to exercise a right described in Section 10, go to{" "}
          <strong>info@debatecraft.org</strong>. This is the same address used for all enrollment,
          attendance, safeguarding, and data matters under the Student and Family Agreement.
        </p>
      </section>
    </div>
  );
}

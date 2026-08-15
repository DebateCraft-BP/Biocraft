import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "DebateCraft Academy's Student and Family Agreement, which governs enrollment in BioCraft.",
  alternates: { canonical: "/terms" },
};

const sections = [
  { id: "s1", label: "1. Nature of this Agreement" },
  { id: "s2", label: "2. Eligibility and accurate information" },
  { id: "s3", label: "3. Attendance" },
  { id: "s4", label: "4. Participation and classroom conduct" },
  { id: "s5", label: "5. Parent and guardian conduct" },
  { id: "s6", label: "6. Communication" },
  { id: "s7", label: "7. Safeguarding" },
  { id: "s8", label: "8. Enforcement" },
  { id: "s9", label: "9. Ineligibility register" },
  { id: "s10", label: "10. Recording, images and publication" },
  { id: "s11", label: "11. Intellectual property" },
  { id: "s12", label: "12. Data protection" },
  { id: "s13", label: "13. Liability" },
  { id: "s14", label: "14. Termination and amendment" },
  { id: "s15", label: "15. General" },
  { id: "sa", label: "Schedule A — Attendance points" },
  { id: "sb", label: "Schedule B — Parent conduct ladder" },
  { id: "sc", label: "Schedule C — Ineligibility tiers" },
  { id: "sack", label: "Acceptance" },
];

export default function TermsPage() {
  return (
    <div className="container legal">
      <header className="legalHeader">
        <p className="label">Terms of Service</p>
        <h1 className="legalTitle">Student and Family Agreement</h1>
        <p className="legalMeta">Effective from July 1, 2026 — supersedes all prior Student Agreements</p>
      </header>

      <div className="legalNote">
        This Agreement is issued by DebateCraft Academy and governs enrollment in every DebateCraft
        Academy program, including BioCraft. It is reproduced here for the Family&rsquo;s review before
        applying. A place is not held, and no Student may attend a session, until a complete signed copy
        of this Agreement has been received — see{" "}
        <a href="#sack">Acceptance</a> below. This page is informational and does not itself constitute
        legal advice; DebateCraft Academy encourages Families with questions about their rights or
        obligations under this Agreement to seek independent advice.
      </div>

      <nav className="legalToc" aria-label="Sections">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
      </nav>

      <p style={{ maxWidth: "var(--measure)", color: "var(--body)", marginBottom: "2rem" }}>
        This Agreement sets the conditions on which DebateCraft Academy (&ldquo;the Academy&rdquo;)
        offers a place in its programs to a student (&ldquo;the Student&rdquo;) and, where the Student is
        under eighteen, to their parent or guardian (&ldquo;the Parent&rdquo;). The Student and the
        Parent are together &ldquo;the Family.&rdquo;
      </p>
      <p style={{ maxWidth: "var(--measure)", color: "var(--body)", marginBottom: "3rem" }}>
        DebateCraft Academy is a student-run nonprofit initiative providing debate and Harkness-format
        education free of charge to middle and high school students, with a particular commitment to
        under-resourced and underrepresented students. Places are limited, always oversubscribed, and
        offered at no cost. A place is a benefit conferred, not a service purchased.
      </p>

      <section id="s1" className="legalSection">
        <h2>1. Nature of this Agreement</h2>
        <p>
          <strong>1.1</strong> This Agreement sets conditions of enrollment. It does not create an
          employment, agency, partnership or fee-paying relationship, and no tuition, fee or other
          payment is due from the Family at any time.
        </p>
        <p>
          <strong>1.2</strong> A place is personal to the Student, is not transferable, and may be
          withdrawn in accordance with this Agreement. Because the Academy charges nothing, the
          Academy&rsquo;s remedy for any breach by the Family is withdrawal of the place and, where
          applicable, exclusion from future programs. The Academy does not seek and will not pursue
          monetary remedies against a Family except where it has suffered a quantifiable loss caused
          deliberately.
        </p>
        <p>
          <strong>1.3</strong> The Student&rsquo;s acceptance and the Parent&rsquo;s consent are both
          required. A place cannot be held on the strength of a Parent&rsquo;s signature alone.
        </p>
        <p>
          <strong>1.4</strong> The Academy may decline any application, and may decline any
          re-application, without providing reasons, except where this Agreement expressly requires
          reasons to be given.
        </p>
        <h3>1.5 Acceptance in full is a condition of participation</h3>
        <p>
          <strong>1.5.1</strong> Participation in any DebateCraft program, activity, session, workshop,
          competition, trial, taster or event requires this Agreement to have been accepted{" "}
          <strong>in full and without qualification</strong>, signed by the Student and, where the
          Student is under eighteen, by the Parent, with every acknowledgement in the signature block
          initialled.
        </p>
        <p>
          <strong>1.5.2</strong> The Academy does not accept partial, conditional or annotated
          acceptance. Any deletion, amendment, reservation, annotation, counter-term or added condition
          purportedly made by the Family is of no effect, and an enrollment submitted on that basis is
          not accepted and confers no place.
        </p>
        <p>
          <strong>1.5.3</strong> No place is held, and no Student may attend any session, until a
          complete signed Agreement has been received. Attendance permitted in error before receipt does
          not waive this requirement and does not create a place.
        </p>
        <p>
          <strong>1.5.4</strong> Where the Academy amends this Agreement under Section 14.3, continued
          participation requires acceptance of the amended Agreement in full.
        </p>
      </section>

      <section id="s2" className="legalSection">
        <h2>2. Eligibility and accurate information</h2>
        <p>
          <strong>2.1</strong> The Family must provide accurate information at enrollment, including the
          Student&rsquo;s age and school year, a working contact address and number for a responsible
          adult, and any information the Academy specifically requests for safeguarding purposes.
        </p>
        <p>
          <strong>2.2</strong> Providing materially false information at enrollment is grounds for
          immediate withdrawal of the place under Section 8, and where it concerns the Student&rsquo;s
          age or the identity of the responsible adult, is grounds for referral to Schedule C.
        </p>
        <p>
          <strong>2.3</strong> The Family must notify the Academy of any change to contact details within
          seven days. Where the Academy cannot reach the responsible adult using the details on file for
          fourteen days, the place may be released.
        </p>
      </section>

      <section id="s3" className="legalSection">
        <h2>3. Attendance</h2>
        <p>
          Attendance is the condition on which a scarce free place is held. The Academy turns away
          applicants for every place it fills. An unattended seat is a place denied to a student who
          would have used it.
        </p>
        <h3>3.1 Standard</h3>
        <p>
          The Student is expected to attend every scheduled session, on time, for its full duration, and
          to be present and participating rather than merely connected.
        </p>
        <h3>3.2 Notification</h3>
        <p>
          Absences must be notified to info@debatecraft.org (Section 6.1) at least twenty-four hours
          before the session, except in the case of sudden illness or a genuine emergency, which must be
          notified as soon as reasonably possible and in any event within twenty-four hours after the
          session.
        </p>
        <h3>3.3 First-session forfeiture</h3>
        <p>
          <strong>
            A Student who does not attend the first session of a cohort, and has not notified the Academy
            in advance, forfeits their place automatically twenty-four hours after that session ends.
          </strong>{" "}
          The place is released to the waitlist. This rule is automatic and is not subject to the
          graduated ladder in Section 8, because the seat cannot be reallocated once the cohort is under
          way.
        </p>
        <h3>3.4 Attendance points</h3>
        <p>
          Absences are recorded as points under Schedule A. Points accrue within a single cohort and are
          reset at the end of it, except as provided in Section 3.7.
        </p>
        <h3>3.5 Seat release</h3>
        <p>
          <strong>On reaching six points within a cohort, the Student&rsquo;s place is released to the waitlist.</strong>{" "}
          The Academy will notify the Family in writing before this takes effect, and the Family has
          three days to make representations, which are considered by a Volunteer Manager. Release of a
          seat under this section is an administrative consequence, not a disciplinary sanction, and is
          recorded as such.
        </p>
        <h3>3.6 Withdrawal without notice</h3>
        <p>
          A Family that withdraws without notifying the Academy, or that becomes unreachable for fourteen
          days during a cohort, is recorded as a no-notice withdrawal. This is not itself a disciplinary
          matter but it carries the priority consequence in Section 3.7.
        </p>
        <h3>3.7 Effect on future places</h3>
        <p>
          Places in future cohorts are allocated on stated criteria, and attendance history is one of
          them. The Academy applies the following, and states them here so that they are known in advance
          rather than discovered:
        </p>
        <ul>
          <li>A completed cohort with fewer than three attendance points: standard priority, and eligibility for the returning-student pathway.</li>
          <li>A cohort completed with three or more points: reduced priority for one subsequent application cycle.</li>
          <li>
            A seat released under Section 3.5, a first-session forfeiture under Section 3.3, or a
            no-notice withdrawal under Section 3.6: the Student is not eligible to apply for the next
            cohort in the same program, and has reduced priority for the cycle after that.
          </li>
          <li>
            Two occurrences of any of the outcomes in the preceding bullet, in any combination, within
            twenty-four months: referral to Schedule C, Tier 1.
          </li>
        </ul>
        <p>
          <strong>3.8</strong> Nothing in this section applies to absences caused by illness, bereavement,
          examinations, or circumstances outside the Family&rsquo;s control, where these have been
          notified. The Academy would rather be told late than not told.
        </p>
        <h3>3.9 Makeup sessions</h3>
        <p>
          Makeup sessions are offered at the Academy&rsquo;s sole discretion, subject to instructor
          availability, and are not an entitlement. No makeup session will be scheduled during the final
          week of a cohort. The Academy does not offer makeup sessions for absences that were not
          notified.
        </p>
        <h3>3.10 Rescheduling between sessions</h3>
        <p>
          Rescheduling students between sessions is offered at the Academy&rsquo;s sole discretion,
          subject to instructor availability, and is not an entitlement. The Academy does not offer
          rescheduling for absences that were not notified. The Academy cannot be held liable if the date
          or time of the rescheduled session differs from the previous session.
        </p>
      </section>

      <section id="s4" className="legalSection">
        <h2>4. Participation and classroom conduct</h2>
        <h3>4.1 Camera</h3>
        <p>
          The Student is expected to have their camera on during sessions. The Academy recognises that
          not every student has a private or presentable space, and a standing camera exemption is
          available on request to info@debatecraft.org, with no explanation required beyond identifying
          the need. A plain virtual background may be used at any time without prior approval. Students
          with a camera exemption are expected to participate by audio and in writing.
        </p>
        <h3>4.2 Conduct</h3>
        <p>
          The Student agrees to treat instructors, peers and staff with respect; to participate
          constructively; to follow instructions given by instructors during a session; to refrain from
          disruptive behaviour, harassment, discriminatory language and inappropriate content; and to
          engage authentically rather than nominally in debates and exercises.
        </p>
        <h3>4.3 Serious misconduct</h3>
        <p>
          The following are treated as serious misconduct and engage Section 8.3 immediately: bullying,
          harassment or discrimination; threatening behaviour or violence; sexual content or conduct of
          any kind directed at any participant; academic dishonesty or plagiarism in submitted work;
          unlawful activity conducted through Academy platforms; recording or photographing another
          participant without the Academy&rsquo;s written permission; and sharing any Academy session
          link, recording or platform access with a person not enrolled.
        </p>
        <h3>4.4 Feedback</h3>
        <p>
          Coaching feedback is educational and is given in good faith. The Student agrees to receive
          feedback without hostility toward the person giving it, and to raise disagreement with the
          substance of feedback through the channel in Section 6, rather than in the session. The Academy
          does not require the Student to agree with feedback, and a student who argues well against
          their coach is doing the thing this program teaches.
        </p>
      </section>

      <section id="s5" className="legalSection">
        <h2>5. Parent and guardian conduct</h2>
        <h3>5.1 Who you are speaking to</h3>
        <p>
          <strong>
            DebateCraft&rsquo;s coaches, coordinators and staff are themselves secondary school students,
            and most of them are minors.
          </strong>{" "}
          They volunteer their time, are unpaid, and are not employees. Conduct that would be
          unacceptable if directed at a child is unacceptable when directed at them, and will be treated
          on that basis. This section exists because the Academy has a duty to protect its volunteers
          that is at least equal to its duty to serve its students.
        </p>
        <h3>5.2 Parent responsibilities</h3>
        <p>
          The Parent agrees to support consistent attendance and preparation; to notify absences to
          info@debatecraft.org; to keep contact details current; to raise concerns through the escalation
          path in Section 6.5; and to model, toward Academy staff, the standard of conduct the program
          teaches.
        </p>
        <h3>5.3 Prohibited conduct</h3>
        <p>The Parent must not:</p>
        <ul>
          <li>use abusive, threatening, degrading, sexualised or discriminatory language toward any Academy member;</li>
          <li>contact any coach, coordinator or staff member on a personal email address, personal telephone number, personal messaging account or personal social media, at any time and for any reason;</li>
          <li>contact any coach at all after the end of the Student&rsquo;s cohort;</li>
          <li>contact any Academy member outside the stated hours in Section 6.2 other than in a genuine emergency;</li>
          <li>make repeated contact designed to pressure a decision after a decision has been communicated;</li>
          <li>make allegations about a named Academy member in a public forum, group chat, or to other families, in place of using the escalation path;</li>
          <li>record or publish any communication with an Academy member without written consent;</li>
          <li>demand the removal, reassignment or discipline of a named volunteer; or</li>
          <li>attempt to obtain a place, an assessment outcome, or a certificate by inducement, misrepresentation or pressure.</li>
        </ul>
        <h3>5.4 Response to prohibited conduct</h3>
        <p>
          Parent conduct is addressed through the ladder in Schedule B. The Academy may apply any stage
          of that ladder without first applying earlier stages where the conduct warrants it.
        </p>
        <h3>5.5 Single point of contact</h3>
        <p>
          Where a Parent has engaged in conduct under Section 5.3, the Academy may restrict all
          communication with that Family to one named adult representative of the Academy, in writing
          only. The restriction is notified in writing, states its duration, and is reviewed at the end
          of the cohort. A Family subject to this restriction retains full access to the program; only
          the communication route changes.
        </p>
        <h3>5.6 Withdrawal of a place for Parent conduct</h3>
        <p>
          <strong>
            The Academy may withdraw a Family&rsquo;s place because of the Parent&rsquo;s conduct,
            notwithstanding that the Student has done nothing wrong.
          </strong>{" "}
          The Academy does not do this lightly and it is the last stage of Schedule B, but the Family
          should understand from the outset that the Student&rsquo;s conduct is not the only conduct that
          matters. Where a place is withdrawn on this basis and another responsible adult is available to
          act as the Student&rsquo;s contact, the Academy will consider that alternative before
          withdrawing the Student.
        </p>
      </section>

      <section id="s6" className="legalSection">
        <h2>6. Communication</h2>
        <h3>6.1 The only permitted channels</h3>
        <p>
          <strong>6.1.1</strong> There are exactly two permitted channels of communication between the
          Family and the Academy:
        </p>
        <ul>
          <li>
            <strong>(a) info@debatecraft.org</strong> — the Academy&rsquo;s official address, for all
            enrollment, administrative, attendance, safeguarding, complaint, escalation and data matters;
            and
          </li>
          <li>
            <strong>(b) the Academy-issued email address of the Student&rsquo;s assigned coach</strong>,
            in the form *name*@debatecraft.org, for matters concerning that Student&rsquo;s learning in
            the cohort the coach is teaching, and for nothing else.
          </li>
        </ul>
        <p>
          <strong>6.1.2</strong> No other channel is permitted. This includes personal email addresses,
          personal telephone numbers, WhatsApp, WeChat, Discord, Instagram, Facebook, LinkedIn, any other
          social or messaging platform, and any address or account not issued by the Academy.{" "}
          <strong>
            A coach&rsquo;s personal contact details are never a permitted channel, and a coach who is
            asked for them will decline.
          </strong>
        </p>
        <p>
          <strong>6.1.3</strong> Any communication sent by an impermissible route is not an official
          communication. It does not start any time period under this Agreement, will not be actioned,
          and will not be treated as notice of anything, including notice of an absence.
        </p>
        <p>
          <strong>6.1.4</strong> All email between a Parent and a coach must be copied to
          info@debatecraft.org.{" "}
          <strong>
            A coach will not conduct unrecorded correspondence with a Parent, and a Parent must not ask a
            coach to.
          </strong>{" "}
          This exists because the Academy&rsquo;s coaches are minors and every exchange between an adult
          and a minor volunteer must be visible to the organization.
        </p>
        <p>
          <strong>6.1.5</strong> Communication with a coach is limited to matters of that Student&rsquo;s
          learning. Complaints, escalations, allegations about any person, requests concerning places or
          eligibility, and any matter under Sections 5, 8, 9, 10 or 12 must go to info@debatecraft.org and
          must not be raised with a coach.
        </p>
        <h3>6.2 When the channels are open</h3>
        <p>
          <strong>6.2.1</strong> The coach channel under 6.1(b) opens on the first day of the
          Student&rsquo;s cohort and{" "}
          <strong>
            closes at the end of the final session of that cohort. Contact is only permitted within
            extended working hours (8 a.m.–6 p.m.) in Hong Kong Time or Eastern Time, as expressed by the
            coach.
          </strong>{" "}
          After that point the Family must not contact that coach, or any coach, by any means. A coach
          who receives such contact will not reply and will forward it to info@debatecraft.org.
        </p>
        <p>
          <strong>6.2.2</strong> After a cohort ends, info@debatecraft.org remains the Family&rsquo;s only
          route to the Academy, and the Academy will answer only the following: requests for or
          verification of a certificate; a data access, correction or deletion request under Section
          12.3; withdrawal of a consent under Section 10.5; an appeal within the time limits in Sections
          8.5 or 9.6; a safeguarding disclosure; and a future application. The Academy is not obliged to
          respond to correspondence outside this list and, after one notice that a matter is closed, will
          not.
        </p>
        <p>
          <strong>6.2.3</strong> Nothing in this Section limits any right the Family has under applicable
          data protection law, and the Academy does not treat a lawful data request as a breach of this
          Agreement whenever it is made.
        </p>
        <h3>6.3 Response standards</h3>
        <p>
          While a cohort is running, the Academy acknowledges messages to info@debatecraft.org within one
          working day and responds substantively within three working days. Anything blocking a
          Student&rsquo;s attendance at a session already scheduled is answered within four hours during
          the operating day. Coaches respond to learning questions within three working days during the
          cohort and are not expected to respond outside it.
        </p>
        <p>
          Academy operating hours (8 a.m.–6 p.m. Hong Kong Time or Eastern Time) are when responses should
          be expected. Outside them the Academy does not respond and its members — who are school
          students — are not expected to.
        </p>
        <p>
          This standard binds both directions. A Family that has received an acknowledgement within one
          working day should not treat the matter as ignored, and repeated contact within the response
          window is addressed under Section 5.3.
        </p>
        <h3>6.4 Written record</h3>
        <p>
          Any concern that the Family wishes to escalate must be raised in writing. The Academy may
          decline to act on a serious allegation communicated only verbally, and will ask for it in
          writing instead. This protects both the Family and the person the allegation concerns.
        </p>
        <h3>6.5 Escalation path</h3>
        <p>
          Concerns are raised to info@debatecraft.org and are handled in this order internally, each
          stage being given a reasonable opportunity to resolve before the next is used: the chapter
          Volunteer Manager; the relevant Director; the Executive Director. A concern is never escalated
          to or through a coach. <strong>The Executive Director&rsquo;s decision is final in operational matters.</strong>
        </p>
        <h3>6.6 Vexatious or repeated complaints</h3>
        <p>
          Where a Family has exhausted the escalation path on a matter, the Academy will not reopen it in
          the absence of new information, and will say so once. Continued correspondence on a closed
          matter is addressed under Schedule B.
        </p>
      </section>

      <section id="s7" className="legalSection">
        <h2>7. Safeguarding</h2>
        <p>
          <strong>7.1</strong> The Academy operates online with minors on both sides of the classroom.
          Communication between a volunteer and a Student takes place only on Academy platforms and only
          in channels visible to at least one other Academy member. Private one-to-one contact between a
          volunteer and a Student outside Academy platforms is prohibited, and the Family is asked to
          report it to the Academy rather than permit it.
        </p>
        <p>
          <strong>7.2</strong> The Family must not ask any volunteer for personal contact details, and
          must not offer gifts, payment or inducements to any volunteer. A coach&rsquo;s only contactable
          address is their @debatecraft.org address, and only during the Student&rsquo;s cohort under
          Section 6.2.1.
        </p>
        <p>
          <strong>7.3</strong> The Academy will report any safeguarding concern to the appropriate
          authority where it is required or where it reasonably believes a child is at risk, without
          first notifying the Family where notification would increase that risk.
        </p>
      </section>

      <section id="s8" className="legalSection">
        <h2>8. Enforcement</h2>
        <h3>8.1 Graduated response</h3>
        <p>
          The Academy&rsquo;s response to a breach by the Student escalates as follows: an informal
          conversation and a note on file; a written warning; removal from specific activities or
          sessions; suspension for a defined period; withdrawal of the place; and referral to Schedule C.
          The Academy may begin at any stage proportionate to the conduct.
        </p>
        <h3>8.2 Right to be heard</h3>
        <p>
          Before a written warning or anything more serious, the Student and the Parent are told in
          writing what is alleged and are given three working days to respond in writing. The response is
          considered by the decision-maker and referred to in the decision.
        </p>
        <h3>8.3 Immediate suspension pending review</h3>
        <p>
          Where conduct falls within Section 4.3, or where a Parent&rsquo;s conduct creates an immediate
          risk to a volunteer&rsquo;s wellbeing, the Academy may suspend participation immediately and
          without prior notice. <strong>Suspension is not a decision; it is a pause.</strong> A review is
          completed within five working days by a Director not involved in the incident, the Family is
          given the opportunity in Section 8.2 within that period, and the outcome is given in writing
          with reasons.
        </p>
        <h3>8.4 Written decisions</h3>
        <p>
          Any decision to suspend, to withdraw a place, or to refer to Schedule C is given to the Family
          in writing, states the conduct relied on, states the stage applied, and states the appeal route
          and its deadline.
        </p>
        <h3>8.5 Appeal</h3>
        <p>
          The Family may appeal any decision under this Section once, in writing, within seven days, to
          an Academy officer who was not involved in the decision. The appeal officer may confirm, reduce
          or overturn the decision but may not increase it. The appeal outcome is given in writing with
          reasons and is final.
        </p>
        <h3>8.6 Effect of withdrawal</h3>
        <p>
          On withdrawal of a place, the Student&rsquo;s access to Academy Materials, platforms and
          channels ends. Consents given under Section 10 continue in force subject to any withdrawal of
          consent under Section 10.5. Certificates already earned are not revoked, save where they were
          obtained by dishonesty.
        </p>
      </section>

      <section id="s9" className="legalSection">
        <h2>9. Ineligibility register — the final option</h2>
        <h3>9.1 Purpose</h3>
        <p>
          The Academy maintains a confidential register of individuals and Families who are not eligible
          to enrol in future programs.{" "}
          <strong>
            This is the Academy&rsquo;s final sanction. It is used where the Academy has concluded that
            no future relationship is workable, and it is used rarely.
          </strong>
        </p>
        <h3>9.2 Grounds</h3>
        <p>A referral to the register may be made only for:</p>
        <ul>
          <li>conduct within Section 4.3;</li>
          <li>conduct within Section 5.3 that has reached Stage 4 of Schedule B, or a single instance of threatening, violent or sexualised conduct;</li>
          <li>repeated attendance failure as defined in Section 3.7;</li>
          <li>dishonesty in obtaining a place, an assessment outcome or a certificate;</li>
          <li>unauthorised distribution of Academy Materials at scale or for gain; or</li>
          <li>conduct toward a volunteer that the Academy reasonably considers would constitute harassment.</li>
        </ul>
        <h3>9.3 Who decides</h3>
        <p>
          A referral is decided by two Academy officers,{" "}
          <strong>at least one of whom had no involvement in the underlying incident</strong>. A permanent
          entry under Tier 3 additionally requires notification to the Board and may be overturned by the
          Board.
        </p>
        <h3>9.4 Tiers</h3>
        <p>
          Entries are made at the tier set out in Schedule C.{" "}
          <strong>Tier 1 (twelve months) is the default.</strong> Tier 3 (permanent) is available only for
          the categories listed in Schedule C and is not the ordinary outcome of a difficult relationship.
        </p>
        <h3>9.5 Notice and reasons</h3>
        <p>
          An entry is notified to the Family in writing within five working days, stating the conduct
          relied on, the tier applied, the expiry date, the appeal route, and the Family&rsquo;s right to
          request a copy of the personal data held about them.
        </p>
        <h3>9.6 Appeal</h3>
        <p>
          One appeal, in writing, within fourteen days, to an officer not involved in the decision, who
          may confirm, reduce the tier, or remove the entry. Where the entry is Tier 3, the appeal is
          heard by the Board.
        </p>
        <h3>9.7 Scope</h3>
        <p>
          An entry applies to the individual whose conduct gave rise to it. Where that individual is a
          Parent, the entry extends to any Student for whom that Parent is the responsible adult,{" "}
          <strong>unless another responsible adult is available and accepts the obligations in this Agreement</strong>,
          in which case the Academy will consider a place for the Student on that basis. A sibling who has
          done nothing wrong is not excluded automatically.
        </p>
        <h3>9.8 Data protection and confidentiality</h3>
        <p>
          Register entries are held securely, accessible only to Academy officers who need them to
          process applications.{" "}
          <strong>
            The register is never disclosed to any third party, is never shared with another
            organization, and is never referred to in any public or semi-public forum.
          </strong>{" "}
          Entries are deleted within thirty days of expiry. Tier 3 entries are reviewed every three years
          and retained only where the original grounds still justify retention. A Family may request a
          copy of the data held about them at any time and may request correction of factual errors.
        </p>
        <h3>9.9 Expiry and reapplication</h3>
        <p>
          On expiry, an entry is deleted and the individual may apply on the same footing as any other
          applicant, with no obligation to disclose the previous entry and no adverse inference drawn
          from it.
        </p>
      </section>

      <section id="s10" className="legalSection">
        <h2>10. Recording, images and publication</h2>
        <h3>10.1 Operational recording is a condition of participation</h3>
        <p>
          <strong>10.1.1</strong> DebateCraft sessions are recorded. Recording is a condition of
          participation, not a matter of consent, because it is necessary for the purpose for which the
          Academy collects information about the Student in the first place: teaching them, supervising
          the volunteers who teach them, safeguarding the children in the room, and being able to
          establish what happened if a complaint is made.
        </p>
        <p>
          <strong>10.1.2</strong> Operational recordings are used only for: coaching and instructional
          review; supervision and quality assurance of volunteers; safeguarding, incident investigation
          and the procedures in Sections 8 and 9; and training Academy volunteers in anonymised form.
        </p>
        <p>
          <strong>10.1.3</strong>{" "}
          <strong>
            Operational recordings are never published, never used in any external material, and never
            shown to anyone outside the Academy
          </strong>
          , save where disclosure is required by law or is necessary to protect a person&rsquo;s safety.
        </p>
        <p>
          <strong>10.1.4</strong> A Student who does not wish to appear on camera may use the standing
          camera exemption in Section 4.1, which requires no explanation. That exemption is the
          Academy&rsquo;s answer to a Family uncomfortable with being recorded; withdrawal from
          operational recording as such is not available, because a session cannot be supervised
          retrospectively.
        </p>
        <h3>10.2 Coaching archive</h3>
        <p>
          The Academy maintains an archive of the Student&rsquo;s own speeches and the feedback given on
          them, for the Student&rsquo;s development. A Family may decline the archive, in which case the
          Student&rsquo;s speeches are not separately retained beyond the operational retention period.
        </p>
        <h3>10.3 External publication requires consent</h3>
        <p>
          <strong>10.3.1</strong> Use of identifiable recordings, photographs or clips of the Student in
          marketing, recruitment, promotional or public material is a separate purpose, requires consent,
          and is dealt with in this Section.
        </p>
        <p>
          <strong>10.3.2</strong>{" "}
          <strong>Consent to external publication is not a condition of participation.</strong> Declining
          it, or later withdrawing it, has no effect whatsoever on the Student&rsquo;s place,
          participation, assessment, certification, eligibility for future cohorts, or priority under
          Section 3.7.
        </p>
        <p>
          <strong>10.3.3</strong> Consent operates on an opt-out basis. Consent is given by signing this
          Agreement without marking the opt-out box on the signature page. That box is printed on the
          signature page, in the same size as the surrounding text, and is not placed in any annex.
        </p>
        <p>
          <strong>10.3.4</strong>{" "}
          <strong>
            The Family may opt out at any time — before, during or after a cohort, and after the Student
            has left the Academy — with no reason required and no consequence of any kind
          </strong>
          , by a single line to info@debatecraft.org. The Academy confirms within five working days.
        </p>
        <p>
          <strong>10.3.5</strong> The Academy reminds every enrolled Family of the opt-out in writing at
          the start of each cohort. A consent a Family has forgotten it gave is not a consent the Academy
          intends to rely on.
        </p>
        <h3>10.4 The end-of-cohort request</h3>
        <p>
          <strong>10.4.1</strong> At the close of each cohort, and again with the Student&rsquo;s
          certificate, the Academy invites the Family to give a positive, specific consent (referred to
          below as a &ldquo;Part 2 consent&rdquo;), identifying the particular material the Academy would
          like to use.
        </p>
        <p>
          <strong>10.4.2</strong> Where the material is a single identified clip, photograph or quotation,
          the Academy will say so, will make the material available to the Family to view before it is
          used, and will provide the Family with a copy of the finished item.
        </p>
        <p>
          <strong>10.4.3</strong> A consent given under Part 2 governs the identified material and
          prevails over any general position taken at enrollment. It remains withdrawable under Section
          10.3.4.
        </p>
        <p>
          <strong>10.4.4</strong> Nothing in this Section obliges the Family to respond. Silence is not a
          Part 2 consent.
        </p>
        <h3>10.5 Anonymity</h3>
        <p>
          Where external publication is not opted out of, the Family may separately elect that the
          Student&rsquo;s name not be used alongside their image. The Academy will honour this. A request
          that the image itself not appear is an opt-out under Section 10.3.4 and is treated as such.
        </p>
        <h3>10.6 Retention and the consent register</h3>
        <p>
          <strong>10.6.1</strong> Operational recordings under Section 10.1 are deleted within twelve
          months.
        </p>
        <p>
          <strong>10.6.2</strong> Coaching archives under Section 10.2 are deleted within twelve months of
          the Student&rsquo;s last cohort unless the Student asks for them.
        </p>
        <p>
          <strong>10.6.3</strong> Material published under Section 10.3 is retained for three years from
          creation, or until the Student&rsquo;s eighteenth birthday, whichever is later, after which it
          is removed from all Academy channels unless consent has been renewed in writing by the Student
          as an adult.
        </p>
        <p>
          <strong>10.6.4</strong> The Academy maintains a consent register recording, for every published
          item, the consent relied on, its date, its expiry and any withdrawal.{" "}
          <strong>No item is published unless it appears in the register.</strong> The register is
          reviewed at least quarterly and expired items are removed.
        </p>
        <h3>10.7 Withdrawal</h3>
        <p>
          Any consent may be withdrawn, and any opt-out exercised, at any time by written notice to
          info@debatecraft.org, including after the Student has left the Academy. Section 6.2.2 expressly
          preserves this route. On withdrawal, the Academy removes the material from every channel it
          controls within thirty days. The Academy cannot recall printed material already distributed, or
          content already reshared by third parties, and says so plainly rather than promising otherwise.
        </p>
        <h3>10.8 Limits on use</h3>
        <p>
          The Academy will not license, sell or transfer any recording, photograph or clip of a Student to
          any third party, and will not use student material in paid advertising without separate written
          consent.
        </p>
        <h3>10.9 Recording by the Family</h3>
        <p>
          The Family must not record, photograph or screenshot any session, or any communication with an
          Academy member, without the Academy&rsquo;s prior written permission. This applies equally to
          material in which the Family&rsquo;s own child appears, because other people&rsquo;s children
          appear alongside them.
        </p>
      </section>

      <section id="s11" className="legalSection">
        <h2>11. Intellectual property</h2>
        <p>
          <strong>11.1</strong> All course materials, decks, notes, prep files, templates, curricula and
          recordings created or provided by the Academy remain the Academy&rsquo;s exclusive property.
        </p>
        <p>
          <strong>11.2</strong> The Student receives a limited, non-exclusive, non-transferable, revocable
          licence to use Academy Materials for their own study, preparation and development while
          enrolled, and for their own personal use afterwards.
        </p>
        <p>
          <strong>11.3</strong> The Family must not share, distribute, copy, reproduce, upload, sell,
          republish or create derivative works from Academy Materials; must not upload them to any
          file-sharing service, messaging group, forum or social platform; and must not use them to train
          any machine learning model.
        </p>
        <p>
          <strong>11.4</strong> On notice from the Academy, the Family must remove any Academy Material
          they have made available and confirm removal in writing within five working days. Failure to do
          so is grounds for referral under Section 9.2.
        </p>
        <p>
          <strong>11.5</strong> Work created by the Student in the course of the program — the
          Student&rsquo;s own speeches, cases and written arguments — belongs to the Student. The
          Academy&rsquo;s licence to use it is governed solely by Section 10.
        </p>
      </section>

      <section id="s12" className="legalSection">
        <h2>12. Data protection</h2>
        <p>
          This section summarizes how the Academy handles the Family&rsquo;s data under this Agreement.
          The full detail — what is collected, why, how long it is kept, and the Family&rsquo;s rights
          under United States law — is set out in the{" "}
          <a href="/privacy" style={{ color: "var(--fg)" }}>
            Privacy Policy
          </a>
          , which forms part of this Agreement.
        </p>
        <p>
          <strong>12.1</strong> The Academy collects the Student&rsquo;s name, age, school year, contact
          details, attendance and assessment records, and, where consented, recordings. It processes these
          to administer the program, ensure safety, allocate places, and issue credentials.
        </p>
        <p>
          <strong>12.2</strong> The Academy protects this data with reasonable security measures, does not
          sell it, and uses it only for the purposes stated in this Agreement or separately consented to.
        </p>
        <p>
          <strong>12.3</strong> The Family may request access to the personal data held about the Student,
          may request correction of factual errors, and may request deletion of data the Academy is not
          required to retain. Requests are answered within thirty days.
        </p>
        <p>
          <strong>12.4</strong> The Academy retains enrollment and attendance records for three years
          after the Student&rsquo;s last cohort, credential records indefinitely so that certificates
          remain verifiable, and register entries as provided in Section 9.8.
        </p>
        <p>
          <strong>12.5</strong> The Academy may disclose personal data where required by law, where
          requested by a competent authority, or where necessary to protect any person&rsquo;s safety.
        </p>
      </section>

      <section id="s13" className="legalSection">
        <h2>13. Liability</h2>
        <p>
          <strong>13.1</strong> The Academy provides its programs free of charge, on a volunteer basis, and
          on an &ldquo;as is&rdquo; basis. It gives no warranty as to any particular educational outcome,
          competitive result, admission outcome, or standard of instruction. All information shared by
          the Academy is final and may be changed at its discretion.
        </p>
        <p>
          <strong>13.2</strong> To the fullest extent permitted by law, the Academy, its directors,
          officers and volunteers are not liable for any indirect, consequential or incidental loss, or
          for any loss of opportunity, arising from participation in or exclusion from its programs.
        </p>
        <p>
          <strong>13.3</strong> Nothing in this Agreement excludes or limits liability for death or
          personal injury caused by negligence, for fraud, or for any liability that cannot lawfully be
          excluded.
        </p>
        <p>
          <strong>13.4</strong> The Family is responsible for the Student&rsquo;s internet access, device
          and study environment, and for supervising a minor Student&rsquo;s use of online platforms
          outside session times.
        </p>
        <p>
          <strong>13.5</strong> The Family indemnifies the Academy against any claim arising from the
          Family&rsquo;s own breach of Sections 10.7, 11.3 or 5.3.
        </p>
      </section>

      <section id="s14" className="legalSection">
        <h2>14. Termination and amendment</h2>
        <p>
          <strong>14.1</strong> The Family may withdraw at any time by written notice to
          info@debatecraft.org. As no fee is charged, no refund arises. Section 3.7 applies to the effect
          on future places.
        </p>
        <p>
          <strong>14.2</strong> The Academy may terminate this Agreement in accordance with Section 8.
        </p>
        <p>
          <strong>14.3</strong> The Academy may amend this Agreement on thirty days&rsquo; written notice.
          A Family that does not accept an amendment may withdraw within that period without any
          consequence under Section 3.7. Continued participation after the notice period constitutes
          acceptance.
        </p>
        <p>
          <strong>14.4</strong> Sections 9 through 13 survive termination.
        </p>
      </section>

      <section id="s15" className="legalSection">
        <h2>15. General</h2>
        <p>
          <strong>15.1 Language.</strong>{" "}
          <strong>
            This Agreement is made in English. The English text is the sole operative version and is the
            only version that is signed.
          </strong>{" "}
          The Academy may provide a Cantonese or other translation as a courtesy to aid understanding. Any
          such translation has no legal effect, is not part of this Agreement, and does not vary it. In
          the event of any difference between a translation and the English text, the English text governs
          absolutely. By signing, the Family confirms that it has read the English text, or has had it
          explained, and understands it.
        </p>
        <p>
          <strong>15.2 Severability.</strong> If any provision is held unenforceable, it is severed and
          the remainder continues in force.
        </p>
        <p>
          <strong>15.3 No waiver.</strong> The Academy&rsquo;s failure to enforce any provision on one
          occasion is not a waiver of that provision.
        </p>
        <p>
          <strong>15.4 Entire agreement.</strong> This Agreement, with its Schedules, is the entire
          agreement between the parties and supersedes all prior representations and agreements.
        </p>
        <p>
          <strong>15.5 Notices.</strong> Notices to the Academy are given to info@debatecraft.org and are
          effective only if sent there. Notices to the Family are given to the contact details on file and
          are deemed received one working day after sending.
        </p>
        <p>
          <strong>15.6 Force majeure.</strong> The Academy is not in breach where performance is prevented
          by events outside its reasonable control, including platform failure, illness of volunteers, or
          public health measures. The Academy will reschedule where reasonably possible.
        </p>
        <p>
          <strong>15.7 Assignment.</strong> The Family may not assign this Agreement. The Academy may
          assign it to a successor entity, including on incorporation or on obtaining charitable status.
        </p>
      </section>

      <section id="sa" className="legalSection">
        <h2>Schedule A — Attendance points</h2>
        <div className="legalTableWrap">
          <table className="legalTable">
            <thead>
              <tr>
                <th>Event</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Absence notified 24+ hours in advance</td>
                <td>0.5</td>
              </tr>
              <tr>
                <td>Absence notified late but within 24 hours after the session</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Absence not notified</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Arrival more than 15 minutes late, or departure more than 15 minutes early</td>
                <td>0.5</td>
              </tr>
              <tr>
                <td>Present but non-responsive for the majority of a session, after one warning in that session</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Absence due to illness, bereavement, examinations, or circumstances outside the Family&rsquo;s control, notified</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Six points within a cohort triggers Section 3.5. Points reset at the end of each cohort. Points
          do not accrue during a period of suspension.
        </p>
      </section>

      <section id="sb" className="legalSection">
        <h2>Schedule B — Parent conduct ladder</h2>
        <div className="legalTableWrap">
          <table className="legalTable">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Trigger</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>A single instance of raised, dismissive or discourteous communication</td>
                <td>The Academy states the standard in writing and asks that it be observed. No record beyond the message itself.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Repetition after Stage 1, or a first instance of contacting a volunteer privately or outside hours</td>
                <td>Written warning from a Director, recorded on file, with the specific conduct identified.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Repetition after Stage 2, sustained pressure after a decision, or public allegations about a named volunteer</td>
                <td>Single point of contact imposed under Section 5.5 for the remainder of the cohort. Written notice with reasons.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Repetition after Stage 3, or a first instance of abusive, degrading or discriminatory language toward any volunteer</td>
                <td>Suspension of the Family&rsquo;s place pending review under Section 8.3, and referral to Schedule C, Tier 1 or 2.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Threatening, intimidating, violent or sexualised conduct toward any Academy member, at any time</td>
                <td>Immediate withdrawal of the place, referral to Schedule C at Tier 2 or 3, and referral to the appropriate authority where warranted. No prior stage required.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="sc" className="legalSection">
        <h2>Schedule C — Ineligibility tiers</h2>
        <div className="legalTableWrap">
          <table className="legalTable">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Duration</th>
                <th>Applies to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12 months</td>
                <td>Repeated attendance failure under Section 3.7; Schedule B Stage 4 on a first occasion; dishonesty in an application.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>36 months</td>
                <td>Repetition after a Tier 1 entry has expired; unauthorised distribution of Academy Materials at scale or for gain; dishonesty in obtaining an assessment outcome or certificate; sustained conduct the Academy reasonably considers harassment of a volunteer.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Permanent, reviewed every 3 years</td>
                <td>Threatening, intimidating, violent or sexualised conduct toward any Academy member; conduct creating a safeguarding risk to a child; conduct that has been referred to a law enforcement or child protection authority.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="sack" className="legalSection">
        <h2>Acceptance</h2>
        <p>
          Enrollment requires the Student, and — where the Student is under eighteen — the Parent, to
          accept this Agreement in full, as described in Section 1.5. By accepting, the Family confirms
          it has read and understood, in particular:
        </p>
        <ul>
          <li>
            <strong>Section 3.3</strong> — failing to attend the first session without notice forfeits the
            place automatically.
          </li>
          <li>
            <strong>Section 3.7</strong> — attendance history affects eligibility for future programs.
          </li>
          <li>
            <strong>Section 5</strong> — the Academy&rsquo;s staff are themselves students and mostly
            minors, and a place may be withdrawn because of a Parent&rsquo;s conduct.
          </li>
          <li>
            <strong>Section 9</strong> — the Academy maintains an ineligibility register, entries are
            time-limited by default, and an entry may be appealed.
          </li>
          <li>
            <strong>Section 6</strong> — the only permitted channels are info@debatecraft.org and the
            Student&rsquo;s coach&rsquo;s @debatecraft.org address during the cohort, all coach email is
            copied to info@debatecraft.org, and contact with a coach ends when the cohort ends.
          </li>
          <li>
            <strong>Section 10.1</strong> — sessions are recorded for teaching, supervision and
            safeguarding as a condition of participation, and those recordings are never published.
          </li>
          <li>
            <strong>Section 10.3</strong> — unless opted out, the Student&rsquo;s identifiable image may be
            used in DebateCraft&rsquo;s marketing and recruitment material, and the Family may opt out at
            any time.
          </li>
          <li>
            <strong>Section 1.5</strong> — this Agreement must be accepted in full, no amendment or
            reservation the Family makes has any effect, and no place exists until a signed Agreement is
            received.
          </li>
          <li>
            <strong>Section 15.1</strong> — the English text is the only operative version, and any
            translation provided is a courtesy with no legal effect.
          </li>
        </ul>
        <p>
          A Family may, at the point of signing, opt out of the coaching archive (Section 10.2), opt out
          of external publication (Section 10.3), and request that the Student&rsquo;s name not be used
          alongside their image (Section 10.5) — none of which affects the Student&rsquo;s place.
        </p>
        <p>
          The Family receives a signed copy of this Agreement as part of the enrollment process. Questions
          about the current enrollment process, or about this Agreement, go to info@debatecraft.org.
        </p>
      </section>
    </div>
  );
}

export type Person = {
  name: string;
  role: string;
  bio: string;
};

// Roles are transcribed from the certificate (Logo-white-transparent.png context) and the
// DebateCraft_Bioethics_Curriculum.pdf cover page. Bios are from the intro slide of
// Bioethics_ The Future of Medicine.pptx (slide 2), the only bio source in the source files.
export const team: Person[] = [
  {
    name: "Adrian Chan",
    role: "Founder, Exeter Biology Symposium — Executive Director, DebateCraft Academy",
    bio: "Phillips Exeter Academy",
  },
  {
    name: "Oliver Choi",
    role: "Author, Bioethics: Science and the Future of Medicine",
    bio: "Phillips Exeter Academy",
  },
  {
    name: "Dowan Kim",
    role: "Mentor, Bioethics: Science and the Future of Medicine",
    bio: "Phillips Exeter Academy",
  },
];

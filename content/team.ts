export type Person = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

// Roles are transcribed from the certificate (Logo-white-transparent.png context) and the
// DebateCraft_Bioethics_Curriculum.pdf cover page. Bios and photos are from the intro slide of
// Bioethics_ The Future of Medicine.pptx (slide 2), the only bio/photo source in the source files —
// mapped to each name by matching photo and text-box grid position in the slide XML, not by sight.
export const team: Person[] = [
  {
    name: "Adrian Chan",
    role: "Founder, Exeter Biology Symposium — Executive Director, DebateCraft Academy",
    bio: "Phillips Exeter Academy",
    photo: "/team/adrian-chan.png",
  },
  {
    name: "Oliver Choi",
    role: "Author, Bioethics: Science and the Future of Medicine",
    bio: "Phillips Exeter Academy",
    photo: "/team/oliver-choi.jpg",
  },
  {
    name: "Dowan Kim",
    role: "Mentor, Bioethics: Science and the Future of Medicine",
    bio: "Phillips Exeter Academy",
    photo: "/team/dowan-kim.jpg",
  },
];

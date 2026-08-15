export type Session = {
  number: number;
  title: string;
  description: string;
  optional?: boolean;
};

export type Unit = {
  number: number;
  title: string;
  sessions: Session[];
};

export const units: Unit[] = [
  {
    number: 1,
    title: "Foundations of Biology & Genetics",
    sessions: [
      {
        number: 1,
        title: "Cells, DNA & Genes",
        description:
          "The essential biology behind genetic technologies: what genes are and how DNA carries hereditary information.",
      },
      {
        number: 2,
        title: "Inheritance & Designing Experiments",
        description:
          "How traits are inherited through genes, mutation, and variation, and what makes scientific evidence trustworthy.",
      },
      {
        number: 3,
        title: "Harkness Discussions",
        description:
          'Two debates: "Should we test embryos for disease?" and "Should parents be able to choose their child’s traits?"',
      },
    ],
  },
  {
    number: 2,
    title: "The History of Bioethics",
    sessions: [
      {
        number: 4,
        title: "From Nuremberg to Modern Ethics",
        description:
          "How post-WWII abuses created modern research ethics, and how ideas about human difference were once used to justify discrimination.",
      },
    ],
  },
  {
    number: 3,
    title: "Bioethics in the Modern Era",
    sessions: [
      {
        number: 5,
        title: "CRISPR & Gene Therapy",
        description:
          "How gene editing works, and where the line falls between curing disease and reshaping human beings.",
      },
      {
        number: 6,
        title: "AI in Healthcare",
        description:
          "How AI is used in medicine today, and the concerns it raises around bias, privacy, and accountability.",
      },
    ],
  },
  {
    number: 4,
    title: "Project-Based Learning & Panel",
    sessions: [
      {
        number: 7,
        title: "Project Introduction & Proposal",
        description:
          "Choosing a bioethics topic (e.g. 3D bioprinting) and a format — a research/review paper, or a presentation — then drafting a proposal.",
      },
      {
        number: 8,
        title: "Work with Instructor I",
        description: "Guided work on the chosen project: developing the argument and strengthening the evidence.",
        optional: true,
      },
      {
        number: 9,
        title: "Work with Instructor II",
        description:
          "Revising and finalizing the paper or presentation, with optional competition pathways (e.g. Scholastic essays).",
        optional: true,
      },
      {
        number: 10,
        title: "Panel Presentation",
        description: "Students present and defend their work before a panel and audience. Parents welcome to attend.",
      },
    ],
  },
];

export const courseStats = [
  { value: "10", label: "One-hour sessions" },
  { value: "10", label: "Students per class" },
  { value: "13+", label: "Recommended age" },
  { value: "Harkness", label: "Discussion format" },
];

export const coursePositioning =
  "A discussion-led (Harkness) course on the ethics of modern biology, genetics, and medicine. Students prepare through readings and videos, debate the questions in class, and complete a final project — a research paper or a presentation — shared at a closing panel.";

import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "Test Creation System",
    description:
      "A web application for creating tests, adding questions and completing tests.",
    technologies: ["React", "TypeScript", "LocalStorage"],
    github: "https://github.com/bozorovjavohir",
    demo: "https://tests-add-app.vercel.app/",
  },
  {
    title: "Todo Application",
    description:
      "A responsive task management application with filtering, editing and LocalStorage.",
    technologies: ["React", "TypeScript", "LocalStorage"],
    github: "https://github.com/bozorovjavohir",
    demo: "https://todoapp3-gamma.vercel.app/",
  },
  {
    title: "Wedding Invitation",
    description:
      "A modern wedding invitation website with customizable invitation information.",
    technologies: ["Vue", "TypeScript", "Pinia"],
    github: "https://github.com/bozorovjavohir/tuyga-taklefnoma",
    demo: "https://tuyga-taklefnoma.vercel.app/",
  },
  {
    title: "EduPress",
    description:
      "An educational web application built as a personal frontend project.",
    technologies: [],
    github: "https://github.com/bozorovjavohir",
    demo: "https://edu-press-beta.vercel.app/",
  },
];

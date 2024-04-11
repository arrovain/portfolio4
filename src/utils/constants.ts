export const BOOTSTRAP_LINK = "https://getbootstrap.com/";
export const GITHUB_LINK = "https://github.com/arrovain";
export const EMAIL_LINK = "mailto:icmemahmut@gmail.com";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/mahmuticme/";
export const PYTHON_LINK = "https://python.org";
export const TS_LINK = "https://typescriptlang.org/";
export const MONGO_LINK = "https://mongodb.com/";
export const TAILWIND_LINK = "https://tailwindcss.com/";
export const FRAMER_LINK = "https://www.framer.com/motion/";
export const REACT_LINK = "https://reactjs.org/";
export const NEXT_LINK = "https://nextjs.org/";
export const SPRING_LINK = "https://spring.io/";
export const NODE_LINK = "https://nodejs.org/";
export const DOCKER_LINK = "https://docker.com/";
export const JS_LINK = "https://javascript.com/";
export const POSTGRES_LINK = "https://www.postgresql.org/";
export const VERCEL_LINK = "https://vercel.com/";
export const NETLIFY_LINK = "https://www.netlify.com/";
export const VITE_LINK = "https://vitejs.dev/";
export const REDUX_LINK = "https://redux.js.org/";
export const FIGMA_LINK = "https://www.figma.com/";
export const SENTRY_LINK = "https://sentry.io/";
export const GIT_LINK = "https://git-scm.com/";

export const MAIN_LEFT_SKILLS_LISTS: Technology[] = [
  {
    technology: "TypeScript",

    techLink: TS_LINK,
    shouldShake: false,
  },

  {
    technology: "MongoDB",

    techLink: MONGO_LINK,
    shouldShake: false,
  },
  {
    technology: "TailwindCSS",

    techLink: TAILWIND_LINK,
    shouldShake: false,
  },
  {
    technology: "sentry",

    techLink: SENTRY_LINK,
    shouldShake: false,
  },
  {
    technology: "html5",

    techLink: "",
    shouldShake: false,
  },
  {
    technology: "css3",

    techLink: "",
    shouldShake: false,
  },
  {
    technology: "python",
    techLink: PYTHON_LINK,
    shouldShake: false,
  },
  {
    technology: "Redux",
    techLink: REDUX_LINK,
    shouldShake: false,
  },
];

export const MAIN_RIGHT_SKILLS_LISTS: Technology[] = [
  {
    technology: "Javascript",

    techLink: "",
    shouldShake: false,
  },
  {
    technology: "ReactJS",

    techLink: REACT_LINK,
    shouldShake: false,
  },
  {
    technology: "NextJS",

    techLink: NEXT_LINK,
    shouldShake: false,
  },

  {
    technology: "NodeJS",

    techLink: NODE_LINK,
    shouldShake: false,
  },

  {
    technology: "prisma",

    techLink: NODE_LINK,
    shouldShake: false,
  },
  {
    technology: "cloudinary",

    techLink: NODE_LINK,
    shouldShake: false,
  },
  {
    technology: "bootstrap",

    techLink: BOOTSTRAP_LINK,
    shouldShake: false,
  },
  {
    technology: "PostgresQL",
    techLink: POSTGRES_LINK,
    shouldShake: false,
  },
];

export const MORE_SKILLS_LISTS: Technology[] = [
  {
    technology: "git",
    techLink: GIT_LINK,
    shouldShake: false,
  },
  {
    technology: "vercel",
    techLink: VERCEL_LINK,
    shouldShake: false,
  },
  {
    technology: "Netlify",
    techLink: NETLIFY_LINK,
    shouldShake: false,
  },
  {
    technology: "vitejs",

    techLink: "VITE_LINK",
    shouldShake: false,
  },
];

export const PROJECTS_LISTS: Project[] = [
  {
    id: 3,
    title: "apple website",
    stacks: {
      FE: [
        {
          technology: "TypeScript",
          techLink: TS_LINK,
          shouldShake: false,
        },
        {
          technology: "NextJS",
          techLink: NEXT_LINK,
          shouldShake: false,
        },
        {
          technology: "ReactJS",
          techLink: REACT_LINK,
          shouldShake: false,
        },
        {
          technology: "TailwindCSS",
          techLink: TAILWIND_LINK,
          shouldShake: false,
        },
      ],

      BE: [
        {
          technology: "MongoDB",
          techLink: MONGO_LINK,
          shouldShake: false,
        },
        {
          technology: "Vercel",
          techLink: VERCEL_LINK,
          shouldShake: false,
        },
      ],
      Mobile: [],
    },
    description: "An ui/ux web site clone",
    repoLink: "https://github.com/arrovain/threejs-gsap-applewebsite",
    liveLink: "",
    demoLink: "",
    thumbnail: "apple_website/apple.svg",
    cssWrapper: "ui/ux-platform",
    cssWrapperSm: "ui/ux-sm",
    cssDesc: "ui/ux-desc",
    cssBtn: "ui/ux-btn",
    cssUnderline: "ui/ux-underline",
  },
  {
    id: 4,
    title: "Portfolio",
    stacks: {
      FE: [
        {
          technology: "TypeScript",
          techLink: TS_LINK,
          shouldShake: false,
        },
        {
          technology: "NextJS",
          techLink: NEXT_LINK,
          shouldShake: false,
        },
        {
          technology: "ReactJS",
          techLink: REACT_LINK,
          shouldShake: false,
        },
        {
          technology: "TailwindCSS",
          techLink: TAILWIND_LINK,
          shouldShake: false,
        },
      ],

      BE: [
        {
          technology: "MongoDB",
          techLink: MONGO_LINK,
          shouldShake: false,
        },
        {
          technology: "Vercel",
          techLink: VERCEL_LINK,
          shouldShake: false,
        },
      ],
      Mobile: [],
    },
    description: "A portfolio web site",
    repoLink: "https://github.com/arrovain/react-portfolio",
    liveLink: "",
    demoLink: "",
    thumbnail: "portfolio2/portfolio2.svg",
    cssWrapper: "ui",
    cssWrapperSm: "ui-sm",
    cssDesc: "ui-desc",
    cssBtn: "ui-btn",
    cssUnderline: "ui-underline",
  },
  {
    id: 1,
    title: "uiux2",
    stacks: {
      FE: [
        {
          technology: "TypeScript",
          techLink: TS_LINK,
          shouldShake: false,
        },
        {
          technology: "NextJS",
          techLink: NEXT_LINK,
          shouldShake: false,
        },
        {
          technology: "ReactJS",
          techLink: REACT_LINK,
          shouldShake: false,
        },
        {
          technology: "TailwindCSS",
          techLink: TAILWIND_LINK,
          shouldShake: false,
        },
      ],

      BE: [
        {
          technology: "MongoDB",
          techLink: MONGO_LINK,
          shouldShake: false,
        },
        {
          technology: "Vercel",
          techLink: VERCEL_LINK,
          shouldShake: false,
        },
      ],
      Mobile: [],
    },
    description: "An ui/ux web site",
    repoLink: "https://github.com/arrovain/ui-ux",
    liveLink: "",
    demoLink: "",
    thumbnail: "uiux/uiux.svg",
    cssWrapper: "ecommerce",
    cssWrapperSm: "ecommerce-sm",
    cssDesc: "ecommerce-desc",
    cssBtn: "ecommerce-btn",
    cssUnderline: "ecommerce-underline",
  },
  {
    id: 5,
    title: "uiux3",
    stacks: {
      FE: [
        {
          technology: "ReactJS",
          techLink: REACT_LINK,
          shouldShake: false,
        },
        {
          technology: "TailwindCSS",
          techLink: TAILWIND_LINK,
          shouldShake: false,
        },
      ],

      BE: [],
      Mobile: [],
    },
    description: "An ui/ux web site",
    repoLink: "https://github.com/arrovain/UI-UX-project-2/tree/main",
    liveLink: "https://ui-ux-project-2.vercel.app/",
    demoLink: "",
    thumbnail: "uiux3/uiux3.svg",
    cssWrapper: "ui3",
    cssWrapperSm: "ui3-sm",
    cssDesc: "ui3-desc",
    cssBtn: "ui3-btn",
    cssUnderline: "ui3-underline",
  },
];

export const SOCIAL_FOOTER = [
  {
    id: 0,
    title: "Github",
    desc: "My Projects.",
    link: GITHUB_LINK,
    bgClass: "bg-github",
  },
  {
    id: 2,
    title: "LinkedIn",
    desc: "Professional social media.",
    link: LINKEDIN_LINK,
    bgClass: "bg-linkedin",
  },
  {
    id: 4,
    title: "Gmail",
    desc: "Main communicating media.",
    link: EMAIL_LINK,
    bgClass: "bg-gmail",
  },
];

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
export const FIREBASE_LINK = "https://firebase.google.com/";
export const SASS_LINK = "https://sass-lang.com/";
export const PRISMA_LINK = "https://www.prisma.io/";
export const SHADCN_LINK = "https://ui.shadcn.com/";
export const SUPABASE_LINK = "https://supabase.com/";
export const NEXTAUTH_LINK = "https://next-auth.js.org/";
export const NEXTJS_LINK = "https://nextjs.org/";
export const LARAVEL_LINK = "https://laravel.com/";
export const PHP_LINK = "https://www.php.net/";
export const VUE_LINK = "https://vuejs.org/";

export const MAIN_LEFT_SKILLS_LISTS: Technology[] = [
  {
    technology: "TypeScript",

    techLink: TS_LINK,
    shouldShake: false,
  },
  {
    technology: "Laravel",

    techLink: LARAVEL_LINK,
    shouldShake: false,
  },

  {
    technology: "Vue",

    techLink: VUE_LINK,
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
    technology: "mongodb",
    techLink: MONGO_LINK,
    shouldShake: false,
  },
  {
    technology: "Sass",
    techLink: SASS_LINK,
    shouldShake: false,
  },
];

export const MAIN_RIGHT_SKILLS_LISTS: Technology[] = [
  {
    technology: "Javascript",

    techLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
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
    technology: "Php",

    techLink: PHP_LINK,
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
  {
    technology: "Firebase",
    techLink: FIREBASE_LINK,
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
    id: 6,
    title: "AI PDF Platform",
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

        {
          technology: "Shadcnui",
          techLink: SHADCN_LINK,
          shouldShake: false,
        },
        {
          technology: "Nextjs",
          techLink: NEXTJS_LINK,
          shouldShake: false,
        },
      ],

      BE: [],
      Mobile: [],
    },
    liveLink: "",
    demoLink: "",
    description: "AI PDFChat project (You can upload a pdf and chat with it)",
    repoLink: "https://github.com/arrovain/ai-platform",
    thumbnail: "aipdf/aipdf.svg",
    cssWrapper: "cpr",
    cssWrapperSm: "cpr-sm",
    cssDesc: "cpr-desc",
    cssBtn: "cpr-btn",
    cssUnderline: "cpr-underline",
  },

  {
    id: 3,
    title: "Apple website clone",
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

      BE: [
        {
          technology: "Vercel",
          techLink: VERCEL_LINK,
          shouldShake: false,
        },
      ],
      Mobile: [],
    },
    description:
      "An ui/ux web site clone, built with Threejs, Gsap, Tailwind and React",
    repoLink: "https://github.com/arrovain/threejs-gsap-applewebsite",
    liveLink: "https://threejs-gsap-applewebsite.vercel.app/",
    demoLink: "",
    thumbnail: "apple_website/apple.svg",
    cssWrapper: "ui/ux-platform",
    cssWrapperSm: "ui/ux-sm",
    cssDesc: "ui/ux-desc",
    cssBtn: "ui/ux-btn",
    cssUnderline: "ui/ux-underline",
  },
  {
    id: 1,
    title: "Another uiux website",
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
    description:
      "Another uiux website, built with Nextjs, Typescript and Tailwind",
    repoLink: "https://github.com/arrovain/ui-ux",
    liveLink: "https://ui-ux-murex.vercel.app/",
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
    title: "Another uiux website",
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
    description: "Another uiux website, built with React, TailwindCSS",
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
  {
    id: 6,
    title: "Netflix Clone",
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
        {
          technology: "Supabase",
          techLink: SUPABASE_LINK,
          shouldShake: false,
        },

        {
          technology: "Shadcnui",
          techLink: SHADCN_LINK,
          shouldShake: false,
        },
        {
          technology: "Nextjs",
          techLink: NEXTJS_LINK,
          shouldShake: false,
        },
      ],

      BE: [],
      Mobile: [],
    },
    liveLink: "",
    demoLink: "",
    description: "",
    repoLink: "https://github.com/arrovain/netflix_clone",
    thumbnail: "netflix/netflix.svg",
    cssWrapper: "netflix",
    cssWrapperSm: "netflix-sm",
    cssDesc: "netflix-desc",
    cssBtn: "netflix-btn",
    cssUnderline: "netflix-underline",
  },
  {
    id: 4,
    title: "Laravel Review App",
    stacks: {
      FE: [
        {
          technology: "Vue",
          techLink: REACT_LINK,
          shouldShake: false,
        },
      ],

      BE: [
        {
          technology: "Laravel",
          techLink: LARAVEL_LINK,
          shouldShake: false,
        },
      ],
      Mobile: [],
    },
    description:
      "Review app project, Built with Laravel 11 + Vue 3 Composition API",
    repoLink: "https://github.com/arrovain/laravel-vue-review-app",
    liveLink: "",
    demoLink: "",
    thumbnail: "empty/image.svg",
    cssWrapper: "ui",
    cssWrapperSm: "ui-sm",
    cssDesc: "ui-desc",
    cssBtn: "ui-btn",
    cssUnderline: "ui-underline",
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

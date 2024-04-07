"use client";

export const GITHUB_LINK = "https://github.com/arrovain";
export const EMAIL_LINK = "mailto:icmemahmut@gmail.com";
export const LINKEDIN_LINK = "https://linkedin.com/in/mahmut.icme";

export const GO_LINK = "https://go.dev/";
export const TS_LINK = "https://typescriptlang.org/";
export const OPENAI_LINK = "https://openai.com/";
export const JAVA_LINK = "https://java.com/";
export const MONGO_LINK = "https://mongodb.com/";
export const TAILWIND_LINK = "https://tailwindcss.com/";
export const FRAMER_LINK = "https://www.framer.com/motion/";
export const REACT_LINK = "https://reactjs.org/";
export const NEXT_LINK = "https://nextjs.org/";
export const SPRING_LINK = "https://spring.io/";
export const HARDHAT_LINK = "https://hardhat.org/";
export const NODE_LINK = "https://nodejs.org/";
export const DOCKER_LINK = "https://docker.com/";
export const JS_LINK = "https://javascript.com/";
export const ETHEREUM_LINK = "https://ethereum.org/en/";
export const HEDERA_LINK = "https://hedera.com";
export const OZ_LINK = "https://www.openzeppelin.com/";
export const ETHERSJS_LINK = "https://docs.ethers.org/v6/";
export const MOCHA_LINK = "https://mochajs.org/";
export const POSTGRES_LINK = "https://www.postgresql.org/";
export const AWS_LINK = "https://aws.amazon.com/";
export const VERCEL_LINK = "https://vercel.com/";
export const NETLIFY_LINK = "https://www.netlify.com/";
export const DYNAMO_LINK = "https://aws.amazon.com/dynamodb/";
export const VITE_LINK = "https://vitejs.dev/";
export const POLYGON_LINK = "https://polygon.technology/";
export const OL_LINK = "https://openliberty.io/";
export const REDUX_LINK = "https://redux.js.org/";
export const KOT_LINK = "https://kotlinlang.org/";
export const XML_LINK =
  "https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction";
export const ANDROID_LINK = "https://developer.android.com/";
export const FIRE_LINK = "https://firebase.google.com/";
export const SWIFT_LINK = "https://developer.apple.com/xcode/swiftui/";
export const MAC_LINK = "https://support.apple.com/macos";
export const XCODE_LINK = "https://developer.apple.com/xcode/";
export const FIGMA_LINK = "https://www.figma.com/";

export const MAIN_LEFT_SKILLS_LISTS: Technology[] = [
  {
    technology: "TypeScript",
    value: 92,
    techLink: TS_LINK,
    shouldShake: false,
  },

  {
    technology: "MongoDB",
    value: 82,
    techLink: MONGO_LINK,
    shouldShake: false,
  },
  {
    technology: "TailwindCSS",
    value: 87,
    techLink: TAILWIND_LINK,
    shouldShake: false,
  },
];

export const MAIN_RIGHT_SKILLS_LISTS: Technology[] = [
  {
    technology: "ReactJS",
    value: 90,
    techLink: REACT_LINK,
    shouldShake: false,
  },
  {
    technology: "NextJS",
    value: 88,
    techLink: NEXT_LINK,
    shouldShake: false,
  },

  {
    technology: "NodeJS",
    value: 87,
    techLink: NODE_LINK,
    shouldShake: false,
  },
];

export const MORE_SKILLS_LISTS: Technology[] = [
  {
    technology: "Redux",
    techLink: REDUX_LINK,
    shouldShake: false,
  },
  {
    technology: "PostgresQL",
    techLink: POSTGRES_LINK,
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

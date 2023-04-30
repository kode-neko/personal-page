import lionmissPic from "@/assets/lionmiss.png";
import cheetyPic from "@/assets/cheety.png";
import personalPagePic from "@/assets/personalpage.png";

const socialList = [
  {
    name: "twitter",
    icon: ["fab", "twitter"],
    url: "https://twitter.com/KodenekoFront",
  },
  {
    name: "github",
    icon: ["fab", "github"],
    url: "https://github.com/kode-neko",
  },
  {
    name: "stackblitz",
    icon: ["fa", "bolt"],
    url: "https://stackblitz.com/@kode-neko",
  },
  {
    name: "codepen",
    icon: ["fab", "codepen"],
    url: "https://codepen.io/kodeneko",
  },
  {
    name: "figma",
    icon: ["fab", "figma"],
    url: "https://www.figma.com/@kodeneko",
  },
];

const techList = [
  "react",
  "redux",
  "angular",
  "vue",
  "pinia",
  "html",
  "css",
  "es13",
  "typescript",
  "node",
  "rest",
  "graphql",
  "mongo",
  "jest",
  "cypress",
  "webpack",
  "git",
  "docker",
  "nginx",
  "figma",
  "storybook",
];

const tagColor = ["green", "purple", "orange", "purpleDark", "bluePurple"];

const projectLionMiss = {
  id: "lionmiss",
  linkList: [
    {
      id: "github",
      icon: ["fab", "github"],
      link: "https://github.com/kode-neko/lionmiss-hub",
      alt: "",
    },
    {
      id: "link",
      icon: ["fa", "link"],
      link: "http://www.kodeneko.com/lionmiss",
      alt: "",
    },
  ],
  pic: lionmissPic,
  tagList: ["react", "redux", "node", "express", "mongo", "graphql", "apollo"],
  color: "purple",
};

const projectAnimalRescue = {
  id: "animalRescue",
  linkList: [
    {
      id: "github",
      icon: ["fab", "github"],
      link: "https://github.com/kode-neko/animal-rescue-main",
      alt: "",
    },
    {
      id: "link",
      icon: ["fa", "link"],
      link: "http://www.kodeneko.com/animal-rescue",
      alt: "",
    },
  ],
  pic: cheetyPic,
  tagList: ["react", "vue", "angular"],
  color: "orange",
};

const projectCheety = {
  id: "cheety",
  linkList: [
    {
      id: "github",
      icon: ["fab", "github"],
      link: "https://github.com/kode-neko/cheety",
      alt: "",
    },
    {
      id: "link",
      icon: ["fa", "link"],
      link: "http://www.kodeneko.com/cheety",
      alt: "",
    },
  ],
  pic: cheetyPic,
  tagList: ["vue", "pinia", "node", "express", "mongoose", "stylus", "pug"],
  color: "green",
};

const projectPersonalPage = {
  id: "personalPage",
  linkList: [
    {
      id: "github",
      icon: ["fab", "github"],
      link: "https://github.com/kode-neko/personal-page",
      alt: "",
    },
  ],
  pic: personalPagePic,
  tagList: ["vue"],
  color: "purpleDark",
};

const projecList = [
  projectLionMiss,
  // projectAnimalRescue,
  projectPersonalPage,
  // projectCheety,
];

export { socialList, techList, tagColor, projecList };

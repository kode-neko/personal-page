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
    name: "facebook",
    icon: ["fab", "facebook"],
    url: "https://www.facebook.com/profile.php?id=100079192857532",
  },
  {
    name: "github",
    icon: ["fab", "github"],
    url: "https://github.com/kode-neko",
  },
  {
    name: "codepen",
    icon: ["fab", "codepen"],
    url: "https://codepen.io/kodeneko",
  },
  {
    name: "stackblitz",
    icon: ["fa", "bolt"],
    url: "https://stackblitz.com/@kode-neko",
  },
  {
    name: "figma",
    icon: ["fab", "figma"],
    url: "https://www.figma.com/file/4a3GUeevphKRrutthOtAdU/Dark",
  },
];

const techList = [
  "html",
  "css",
  "ES",
  "typescript",
  "react",
  "redux",
  "vue",
  "pinia",
  "angular",
  "sass",
  "stylus",
  "pug",
  "node",
  "express",
  "mongoose",
  "sequalize",
  "apollo",
  "webpack",
  "docker",
  "npm",
  "yarn",
  "mongo",
  "mariadb",
  "visualcode",
  "git",
];

const tagColor = ["green", "purple", "orange", "purpleDark", "bluePurple"];

const projectLionMiss = {
  id: "lionmiss",
  linkList: [
    {
      id: "github",
      icon: ["fab", "github"],
      link: "https://github.com/kode-neko/lionmiss-components",
      alt: "",
    },
    { id: "link", icon: ["fa", "link"], link: "", alt: "" },
  ],
  pic: lionmissPic,
  tagList: ["react", "redux", "node", "express", "apollo"],
  color: "purple",
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
      link: "",
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
const projecList = [projectLionMiss, projectCheety, projectPersonalPage];

export { socialList, techList, tagColor, projecList };

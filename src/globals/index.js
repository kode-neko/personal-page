import lionmissPic from "@/assets/lionmiss.png";

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

const tagColor = ["green", "purple", "orange", "darkPurple", "bluePurple"];

const projectLionMiss = {
  id: "lionmiss",
  linkList: [
    { id: "github", icon: ["fab", "github"], link: "", alt: "" },
    { id: "link", icon: ["fa", "link"], link: "", alt: "" },
  ],
  pic: lionmissPic,
  tagList: ["react", "redux", "node", "mongo"],
  color: "purple",
};
const projectCheety = {
  id: "cheety",
  github: "",
  link: "",
  pic: lionmissPic,
  tagList: ["vue", "pineaple", "node", "mongo"],
  color: "green",
};
const projecList = [projectLionMiss, projectCheety];

export { socialList, techList, tagColor, projecList };

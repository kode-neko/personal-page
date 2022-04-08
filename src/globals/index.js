import lionmissPic from '@/assets/lionmiss.png';

const techList = [
  "react",
  "redux",
  "vue",
  "angular",
  "pineaple",
  "node",
  "express",
  "mongo",
  "graphql",
  "typescript",
  "webpack",
  "roller",
  "npmYarn",
  "php",
  "laravel",
  "wordpress",
  "mariadb",
  "visualCode",
  "github",
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

export { techList, tagColor, projecList };

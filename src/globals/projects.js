import lionmissPic from "@/assets/lionmiss.png";
import cheetyPic from "@/assets/cheety.png";
import personalPagePic from "@/assets/screen.png";
import animalRescuePic from "@/assets/animal-rescue.png";
import basketGoPic from "@/assets/basket-go.png";

const projectLionMiss = {
  id: "lionmiss",
  linkList: [
    {
      id: "link",
      icon: ["fa", "link"],
      link: "http://www.kodeneko.com/lionmiss/hub",
      alt: "",
    },
    {
      id: "github",
      icon: ["fab", "github"],
      link: "https://github.com/kode-neko/lionmiss-hub",
      alt: "",
    },
    {
      id: "figma",
      icon: ["fab", "figma"],
      link: "https://www.figma.com/community/file/1238958209605645090",
      alt: "",
    },
  ],
  pic: lionmissPic,
  tagList: [
    "react",
    "redux",
    "node",
    "express-koa",
    "mongo",
    "graphql",
    "apollo",
  ],
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
  ],
  pic: animalRescuePic,
  tagList: ["react", "vue", "angular"],
  color: "blue",
};

const projectCheety = {
  id: "cheety",
  linkList: [
    {
      id: "link",
      icon: ["fa", "link"],
      link: "http://www.kodeneko.com/cheety",
      alt: "",
    },
    {
      id: "github",
      icon: ["fab", "github"],
      link: "https://github.com/kode-neko/cheety",
      alt: "",
    },
    {
      id: "figma",
      icon: ["fab", "figma"],
      link: "https://www.figma.com/community/file/1238959017966617383",
      alt: "",
    },
  ],
  pic: cheetyPic,
  tagList: ["vue", "pinia", "node", "express-koa", "mongoose", "stylus", "pug"],
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
    {
      id: "figma",
      icon: ["fab", "figma"],
      link: "https://www.figma.com/community/file/1233909940090440566",
      alt: "",
    },
  ],
  pic: personalPagePic,
  tagList: ["vue"],
  color: "vioBlue",
};

const projectBasketGo = {
  id: "basketGo",
  linkList: [
    {
      id: "github",
      icon: ["fab", "github"],
      link: "https://github.com/kode-neko/basket-go",
      alt: "orange",
    },
    {
      id: "figma",
      icon: ["fab", "figma"],
      link: "https://www.figma.com/community/file/1238959195254660904",
      alt: "",
    },
  ],
  pic: basketGoPic,
  tagList: ["reactNative", "redux"],
  color: "orange",
};

const projecList = [
  projectLionMiss,
  projectAnimalRescue,
  projectPersonalPage,
  // projectCheety,
  projectBasketGo,
];

export {
  projectLionMiss,
  projectAnimalRescue,
  projectCheety,
  projectPersonalPage,
  projectBasketGo,
  projecList,
};

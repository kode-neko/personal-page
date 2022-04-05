<template>
  <div :class="$style.cont">
    <div :class="$style.header"><WelcomeMsg /></div>
    <div :class="$style.part">
      <BoxContent title="Tecnologías"><TechSection /></BoxContent>
    </div>
    <div :class="$style.part">
      <BoxContent title="Experiencia"><ExperienceSection /></BoxContent>
    </div>
    <div :class="$style.part">
      <BoxContent title="Projectos"><ProjectSection /></BoxContent>
    </div>
    <div :class="$style.part">
      <BoxContent title="Contacto"><ContactSection /></BoxContent>
    </div>
  </div>
</template>

<script>
import WelcomeMsg from "./WelcomeMsg.vue";
import BoxContent from "./BoxContent.vue";
import TechSection from "./sections/TechSection.vue";
import ExperienceSection from "./sections/ExperienceSection.vue";
import ContactSection from "./sections/ContactSection.vue";
import ProjectSection from "./sections/ProjectSection.vue";
import { getImgURL } from "../utils";

export default {
  name: "MainContent",
  components: {
    WelcomeMsg,
    BoxContent,
    TechSection,
    ExperienceSection,
    ContactSection,
    ProjectSection,
  },
  methods: {
    getImgURL,
  },
};
</script>

<style module>
@import "@/assets/colors.css";
.cont {
  flex-basis: 100%;
  background: linear-gradient(
      180deg,
      rgba(64, 33, 96, 0.4) 0%,
      var(--black) 20%,
      var(--black) 80%,
      rgba(64, 33, 96, 0.4) 100%
    ),
    url("../assets/starnight.jpg") no-repeat left -375px / 1200px auto,
    url("../assets/starhouse.jpg") no-repeat left 664px / 1130px auto;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.4), 6px 0px 4px rgba(0, 0, 0, 0.4);
  margin-left: 274px;
  padding: 40px;
  padding-bottom: 300px;
  position: relative;
}

.cont .header {
  margin-bottom: 110px;
}

@media all and (max-width: 1200px) {
  .cont {
    margin: 0;
    margin-top: 63px;
    padding: 20px;
  }
}
</style>

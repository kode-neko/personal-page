<template>
  <div :class="$style.cont">
    <div :class="$style.header"><WelcomeMsg /></div>
    <div :class="$style.sections">
      <BoxContent title="Tecnologías"></BoxContent>
    </div>
    <div :class="$style.sections">
      <BoxContent title="Experiencia"><ExperienceSection /></BoxContent>
    </div>
    <div :class="$style.sections">
      <BoxContent title="Proyectos"></BoxContent>
    </div>
    <div :class="$style.sections">
      <BoxContent title="Contacto"></BoxContent>
    </div>
  </div>
</template>

<script>
import WelcomeMsg from "./WelcomeMsg.vue";
import BoxContent from "./BoxContent.vue";
import ExperienceSection from "./sections/ExperienceSection.vue";

export default {
  name: "MainContent",
  components: {
    WelcomeMsg,
    BoxContent,
    ExperienceSection,
  },
};
</script>

<style module>
.cont {
  flex-basis: 100%;
  background: linear-gradient(180deg, #40216065 0%, var(--black) 45%),
    url("./../assets/starnight.jpg") no-repeat left -375px / 1200px auto;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.4), 6px 0px 4px rgba(0, 0, 0, 0.4);
  padding: 40px;
  margin-left: 274px;
}
.header {
  margin-bottom: 110px;
}
</style>

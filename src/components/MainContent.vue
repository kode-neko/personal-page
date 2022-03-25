<template>
  <div :class="[$style.cont]"><WelcomeMsg /></div>
</template>

<script>
import WelcomeMsg from "./WelcomeMsg.vue";
export default {
  name: "MainContent",
  components: {
    WelcomeMsg,
  },
};
</script>

<style module>
.cont {
  flex-basis: 100%;
  background: linear-gradient(180deg, #40216065 0%, var(--black) 45%),
    url("./../assets/starnight.jpg") no-repeat left -375px / 1200px auto;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.3);
  padding: 40px;
}
</style>

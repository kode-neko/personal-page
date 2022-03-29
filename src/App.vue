<template>
  <div :class="[$style.mainContainer]">
    <MainBar />
    <MainContent />
  </div>
</template>

<script>
import MainBar from "@/components/MainBar.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  name: "App",
  components: {
    MainBar,
    MainContent,
  },
};
</script>

<style module>
@import "@/assets/base.css";
.mainContainer {
  background-color: var(--black);
  display: flex;
  align-content: center;
  max-width: 1400px;
  margin: 0 auto;
}
</style>

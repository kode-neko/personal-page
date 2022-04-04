<template>
  <div :class="[$style.mainContainer]">
    <MainBar />
    <MainContent />
    <notifications
      position="bottom right"
      width="400px"
      classes="notification"
    />
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

<style>
@import "@/assets/colors.css";

.vue-notification-template.notification {
  font-family: "Roboto", sans-serif;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  margin-bottom: 100px;
  padding: 20px;
  font-size: 18px;
  color: var(--white);
  width: 400px;
  background-color: var(--purple-mid);
}
</style>

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

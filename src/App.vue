<template>
  <scrollbar id="sb">
    <div :class="[$style.mainContainer]">
      <MqResponsive target="lg+">
        <MainBar />
      </MqResponsive>
      <MqResponsive target="lg-">
        <MainBarMobile />
      </MqResponsive>
      <MainContent />
      <notifications
        position="bottom right"
        width="400px"
        classes="notification"
      />
      <MqResponsive target="lg-">
        <FooterBarMobile />
      </MqResponsive>
    </div>
  </scrollbar>
</template>

<script>
import MainBar from "@/components/MainBar.vue";
import MainBarMobile from "@/components/MainBarMobile.vue";
import MainContent from "@/components/MainContent.vue";
import FooterBarMobile from "@/components/FooterBarMobile.vue";
import { MqResponsive } from "vue3-mq";

export default {
  name: "App",
  components: {
    MainBar,
    MainBarMobile,
    MainContent,
    FooterBarMobile,
    MqResponsive,
  },
};
</script>

<style>
@import "@/assets/colors.css";

.vue-notification-template.notification {
  font-family: "Roboto", sans-serif;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  margin-bottom: 20px;
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

@media all and (max-width: 1200px) {
  .mainContainer {
    flex-direction: column;
  }
}
</style>

<template>
  <div :class="$style.footer">
    <ul :class="[$style.social]">
      <li v-for="social in socialList" :key="social.name">
        <SocialIcon :icon="social.icon" :link="social.url" />
      </li>
    </ul>
  </div>
</template>

<script>
import { socialList } from "../globals";
import SocialIcon from "./common/SocialIcon.vue";

export default {
  name: "FooterSocialMobile",
  components: { SocialIcon },
  data() {
    return {
      socialList,
    };
  },
};
</script>

<style module>
.footer {
  font-family: "Saira Condensed", sans-serif;
  font-size: 18px;
  width: 100%;
  padding: 10px 40px;
  background: var(--black);
  color: var(--white);
  position: fixed;
  bottom: 59px;
  left: 0;
  z-index: 6;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--purple-dark);
}

.social {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>

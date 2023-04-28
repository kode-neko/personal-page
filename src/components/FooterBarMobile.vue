<template>
  <div :class="$style.footer">
    <LocaleSelector size="small" />
    <div>-</div>
    <div>Kodeneko © 2023</div>
  </div>
</template>

<script>
import LocaleSelector from "./common/LocaleSelector.vue";

export default {
  name: "FooterBarMobile",
  components: { LocaleSelector },
  data() {
    return {};
  },
};
</script>

<style module>
@import "@/assets/colors.css";

.footer {
  font-family: "Saira Condensed", sans-serif;
  font-size: 18px;
  width: 100%;
  padding: 20px 40px;
  background: var(--black);
  color: var(--white);
  position: fixed;
  bottom: 0;
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
</style>

<template>
  <a :href="link" :class="[$style.back]"><font-awesome-icon :icon="icon" /></a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: {
    icon: {
      type: Array,
      default() {
        return ["fab", "twitter"];
      },
    },
    link: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style module>
.back {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 0;
  right: 0;

  transition: bottom 0.3s, right 0.3s, box-shadow 0.3s;
}

.back:hover {
  bottom: 1px;
  right: 1px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <a :href="link" :class="$style.cont"
    ><div :class="[$style.back, $style[color]]">
      <font-awesome-icon :icon="icon" /></div
  ></a>
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
    color: {
      type: String,
      default: "black",
    },
    link: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style module>
@import "@/assets/backs.css";

.cont {
  display: inline-block;
}

.back {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 0;
  right: 0;
  transition: transform 0.3s;
}

.back:hover {
  transform: scale(1.2);
}
</style>

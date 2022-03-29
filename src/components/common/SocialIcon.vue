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
      default: "dark",
    },
    link: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style module>
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
  transition: bottom 0.3s, right 0.3s, box-shadow 0.3s;
}

.back:hover {
  bottom: 1px;
  right: 1px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}

.dark {
  background: var(--black);
}
.green {
  background: var(--tag-green);
}
.purple {
  background: var(--purple-mid);
}
.darkPurple {
  background: var(--tag-purple-dark);
}
.bluePurple {
  background: var(--tag-vio-blue);
}
.orange {
  background: var(--tag-orange);
}
</style>

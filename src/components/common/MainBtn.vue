<template>
  <a
    :href="link"
    v-smooth-scroll
    :class="{
      [$style.main]: type === 'main',
      [$style.normal]: type === 'normal',
      [$style.medium]: size === 'medium',
      [$style.small]: size === 'small',
      [$style.back]: true,
    }"
    ><slot></slot
  ></a>
</template>

<script>
export default {
  name: "MainBtn",
  props: {
    type: {
      type: String,
      validator(value) {
        return ["main", "normal"].includes(value);
      },
    },
    size: {
      type: String,
      validator(value) {
        return ["medium", "small"].includes(value);
      },
      default: "medium",
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
  width: 100%;
  text-align: center;

  color: var(--white);
  font-family: "Saira Condensed", sans-serif;
  padding: 10px 0;
  border-radius: 4px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 0;
  right: 0;
  cursor: pointer;
  text-decoration: none;
  transition: bottom 0.3s, right 0.3s, box-shadow 0.3s;
  display: inline-block;
}

.back:hover {
  bottom: 1px;
  right: 1px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}

.main {
  text-transform: uppercase;
  background-color: var(--purple-mid);
}

.normal {
  background-color: var(--purple-dark);
}

.medium {
  font-size: 24px;
}

.small {
  font-size: 18px;
}
</style>

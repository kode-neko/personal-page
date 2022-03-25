<template>
  <a
    :href="link"
    :class="{
      [$style.main]: type === 'main',
      [$style.normal]: type === 'normal',
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
  },
};
</script>

<style module>
.back {
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: var(--white);
  font-family: "Saira Condensed", sans-serif;
  padding: 10px 0;
  border-radius: 4px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 0;
  right: 0;
  cursor: pointer;

  transition: bottom 0.3s, right 0.3s, box-shadow 0.3s;
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
</style>
<template>
  <section :class="$style.box">
    <h2 :class="$style.title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: "BoxContent",
  props: {
    title: String,
  },
};
</script>

<style module>
.box {
  border-radius: 8px;
  padding: 20px;
  padding-bottom: 40px;
  background-color: var(--black-box);
  margin: 40px 0;
}
.box p {
  color: var(--purple-light);
  font-size: 16px;
  text-align: justify;
  line-height: 22px;
}
.title {
  font-size: 28px;
  font-family: "Saira Condensed", sans-serif;
  margin-bottom: 20px;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
}
.cont {
}
</style>

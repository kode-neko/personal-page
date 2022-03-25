<template>
  <section :class="$style.box">
    <h2 :class="$style.title">{{ title }}</h2>
    <div :class="$style.cont"><slot /></div>
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
  background-color: var(--black-second);
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
}
.cont {
}
</style>

<template>
  <div :class="$style.content">
    <h2 :class="$style.title">{{ $t("welcome.title") }}</h2>
    <p :class="$style.text">{{ $t("welcome.text") }}</p>
  </div>
</template>

<script>
export default {
  name: "WelcomeMsg",
};
</script>

<style module>
.content {
  font-family: "Saira Condensed", sans-serif;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
}
.title {
  font-size: 48px;
  margin-bottom: 20px;
}
.text {
  font-size: 28px;
  line-height: 40px;
  text-align: justify;
}
</style>

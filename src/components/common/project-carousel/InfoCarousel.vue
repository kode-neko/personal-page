<template>
  <div :class="$style.info">
    <div :class="$style.title">
      <h3>Lion Miss</h3>
      <div :class="$style.links">
        <SocialIcon :icon="['fab', 'github']" />
        <SocialIcon :icon="['fa', 'link']" />
      </div>
    </div>
    <p>
      Tienda online de ejemplo con múltiples funciones: carrito, galeria,
      comentarios, envio, usuarios...
    </p>
    <div :class="$style.tags">
      <InfoTag :label="$t(`tech.redux.name`)" color="darkPurple" />
      <InfoTag :label="$t(`tech.react.name`)" color="darkPurple" />
    </div>
  </div>
</template>

<script>
import InfoTag from "../InfoTag.vue";
import SocialIcon from "../SocialIcon.vue";
export default {
  name: "InfoCarousel",
  components: {
    InfoTag,
    SocialIcon,
  },
};
</script>

<style module>
.info {
  padding-right: 64px;
  position: absolute;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  z-index: 2;
  right: 4px;
  top: 20px;
}
.info .title {
  margin-bottom: 10px;
}
.info .title h3 {
  display: inline-block;
  font-size: 52px;
  font-family: "Saira Condensed", sans-serif;
}
.info .title .links {
  display: inline-block;
  gap: 10px;
}
.info p {
  font-size: 16px;
  margin-bottom: 40px;
  color: var(--white);
}
</style>

<template>
  <div :class="$style.carousel">
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

    <div :class="$style.backinfo" />
    <div :class="$style.backTransparent" />
    <img :class="$style.pic" src="../../../assets/lionmiss.png" />

    <font-awesome-icon
      :class="[$style.left, $style.arrow]"
      :icon="['fa', 'circle-chevron-left']"
    />
    <font-awesome-icon
      :class="[$style.right, $style.arrow]"
      :icon="['fa', 'circle-chevron-right']"
    />
  </div>
</template>

<script>
import InfoTag from "../InfoTag.vue";
import SocialIcon from "../SocialIcon.vue";
export default {
  name: "ProjectCarousel",
  components: {
    InfoTag,
    SocialIcon,
  },
};
</script>

<style module>
.carousel {
  height: 300px;
  overflow: hidden;
  position: relative;
}
.backinfo {
  position: absolute;
  top: 0px;
  right: 0;
  width: 50%;
  height: 100%;
}

.backinfo {
  transform: skew(-10deg);
  background-image: linear-gradient(
    90deg,
    var(--purple-mid) 0%,
    var(--purple-mid-dark) 100%
  );
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.5);
  z-index: 1;
  width: 60%;
  right: -50px;
}
.backTransparent {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: var(--purple-mid-trans);
}
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
.pic {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
.arrow {
  cursor: pointer;
  height: 32px;
  position: absolute;
  top: calc(50% - 8px);
  z-index: 3;

  transition: all 0.5s;
}
.arrow:hover {
  transform: scale(1.2);
}
.arrow.left {
  left: 10px;
}
.arrow.right {
  right: 10px;
}
.tags {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
}
</style>

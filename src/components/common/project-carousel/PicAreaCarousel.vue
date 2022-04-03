<template>
  <div :class="$style.picArea">
    <div :class="[$style.colorTrans, `${color}Trans`]" />
    <img :class="$style.pic" :src="getImageURL(pic)" />
  </div>
</template>

<script>
export default {
  name: "PicAreaCarousel",
  props: {
    pic: String,
    color: String,
  },
  methods: {
    getImageURL(file) {
      return new URL(`../../../assets/${file}`, import.meta.url).href;
    },
  },
};
</script>

<style module>
.picArea {
  height: 100%;
  display: inline-block;
  width: 50%;
  background-color: aqua;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
  position: absolute;
}
.colorTrans {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.pic {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>

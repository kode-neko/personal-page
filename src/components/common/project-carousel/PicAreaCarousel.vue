<template>
  <div :class="$style.picArea">
    <div :class="[$style.colorTrans, $style[`${color}Trans`]]" />
    <img :class="$style.pic" :src="getImgURL('../assets/' + pic)" />
  </div>
</template>

<script>
import { getImgURL } from "../../../utils";

export default {
  name: "PicAreaCarousel",
  props: {
    pic: String,
    color: String,
  },
  methods: {
    getImgURL,
  },
};
</script>

<style module>
@import "@/assets/backs.css";

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

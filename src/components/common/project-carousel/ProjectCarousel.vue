<template>
  <div v-for="ele in list" :key="ele.id" :class="$style.carousel">
    <InfoCarousel
      :id="ele.id"
      :linkList="ele.linkList"
      :tagList="ele.tagList"
    />
    <div :class="$style.backinfo" />
    <div :class="$style.backTransparent" />
    <img :class="$style.pic" :src="getImageURL(ele.pic)" />
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
import InfoCarousel from "./InfoCarousel.vue";

export default {
  name: "ProjectCarousel",
  components: { InfoCarousel },
  props: {
    list: Array,
  },
  methods: {
    getImageURL(file) {
      return new URL(`../../../assets/${file}`, import.meta.url).href;
    },
  },
};
</script>

<style module>
/*
:src="`assets/${ele.pic}`"
*/
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

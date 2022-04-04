<template>
  <div :class="$style.carousel">
    <TransitionGroup name="slide">
      <div
        v-for="(ele, index) in list"
        v-show="index === slideActive"
        :key="ele.id"
        :class="$style.slide"
      >
        <PicAreaCarousel :pic="ele.pic" :color="ele.color" />
        <InfoAreaCarousel
          :id="ele.id"
          :linkList="ele.linkList"
          :tagList="ele.tagList"
          :color="ele.color"
        />
      </div>
    </TransitionGroup>
    <ControlsCarousel :total="list.length" @indexChange="slideChange" />
  </div>
</template>

<script>
import InfoAreaCarousel from "./InfoAreaCarousel.vue";
import PicAreaCarousel from "./PicAreaCarousel.vue";
import ControlsCarousel from "./ControlsCarousel.vue";

export default {
  name: "ProjectCarousel",
  components: { InfoAreaCarousel, PicAreaCarousel, ControlsCarousel },
  data() {
    return {
      slideActive: 0,
    };
  },
  props: {
    list: Array,
  },
  methods: {
    slideChange(index) {
      console.log("slideChange", index);
      this.slideActive = index;
    },
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>

<style module>
@import "@/assets/backs.css";

.carousel {
  position: relative;
  height: 300px;
}
.slide {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

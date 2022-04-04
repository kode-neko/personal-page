<template>
  <div :class="$style.controls">
    <font-awesome-icon
      :class="[$style.left, $style.arrow]"
      :icon="['fa', 'circle-chevron-left']"
      @click="prev()"
    />
    <font-awesome-icon
      :class="[$style.right, $style.arrow]"
      :icon="['fa', 'circle-chevron-right']"
      @click="next()"
    />
  </div>
</template>

<script>
export default {
  name: "ControlsCarousel",
  data() {
    return {
      slideActive: 0,
    };
  },
  props: {
    total: Number,
  },
  emits: ["indexChange"],
  methods: {
    next() {
      if (this.slideActive + 1 === this.total) {
        this.slideActive = 0;
      } else {
        this.slideActive++;
      }
      this.$emit("indexChange", this.slideActive);
    },
    prev() {
      if (this.slideActive - 1 < 0) {
        this.slideActive = this.total - 1;
      } else {
        this.slideActive--;
      }
      this.$emit("indexChange", this.slideActive);
    },
  },
};
</script>

<style module>
.controls {
  width: 100%;
  position: absolute;
  z-index: 4;
  top: 150px;
}

.arrow {
  cursor: pointer;
  height: 32px;
  position: absolute;
  z-index: 3;
  top: calc(50% - 10px);
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
</style>

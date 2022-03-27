<template>
  <div :class="$style.cont">
    <div @mouseleave="getDescription()">
      <TagTech
        v-for="(tech, index) in techList"
        v-bind:key="tech"
        :label="$t(`tech.${tech}.name`)"
        :color="tagColor[colorIndex(index)]"
        @mouseover="getDescription(tech)"
      />
    </div>
    <div :class="$style.description">
      <p>{{ $t(description) }}</p>
    </div>
  </div>
</template>

<script>
import { techList, tagColor } from "../../globals";
import TagTech from "./TagTech.vue";
export default {
  name: "TechSection",
  components: { TagTech },
  data() {
    return {
      techList,
      tagColor,
      description: "tech.msg",
    };
  },
  methods: {
    colorIndex(index) {
      let colorIndex = index;
      while (colorIndex > this.tagColor.length - 1) {
        colorIndex = colorIndex - this.tagColor.length;
      }
      return colorIndex;
    },
    getDescription(tech) {
      this.description = tech ? `tech.${tech}.desc` : "tech.msg";
    },
  },
};
</script>

<style module>
.cont {
  display: flex;
}
.description {
  flex-basis: 600px;
  padding: 0 20px;
  box-sizing: border-box;
  border-left: 1px solid var(--purple-dark);
}
</style>

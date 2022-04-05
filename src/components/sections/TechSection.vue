<template>
  <div :class="$style.cont">
    <div :class="$style.tags" @mouseleave="getDescription()">
      <TagTech
        v-for="(tech, index) in techList"
        v-bind:key="tech"
        :label="$t(`tech.${tech}.name`)"
        :cursor="true"
        :color="tagColor[getColor(index)]"
        @mouseover="getDescription(tech)"
      />
    </div>
    <MqResponsive target="lg+">
      <div :class="$style.description">
        <Transition name="desc" mode="out-in">
          <p :key="description">{{ $t(description) }}</p>
        </Transition>
      </div>
    </MqResponsive>
  </div>
</template>

<script>
import { techList, tagColor } from "../../globals";
import { getColor } from "../../utils";
import TagTech from "../common/InfoTag.vue";
import { MqResponsive } from "vue3-mq";

export default {
  name: "TechSection",
  components: { TagTech, MqResponsive },
  data() {
    return {
      techList,
      tagColor,
      description: "tech.msg",
    };
  },
  methods: {
    getColor,
    getDescription(tech) {
      this.description = tech ? `tech.${tech}.desc` : "tech.msg";
    },
  },
};
</script>

<style>
.desc-enter-active,
.desc-leave-active {
  transition: opacity 0.3s ease;
}
.desc-enter-from,
.desc-leave-to {
  opacity: 0;
}
</style>

<style module>
.cont {
  display: flex;
}
.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.description {
  flex-basis: 600px;
  padding: 0 20px;
  box-sizing: border-box;
  border-left: 1px solid var(--purple-dark);
}
</style>

<template>
  <div :class="$style.info">
    <div :class="$style.title">
      <h3>{{ $t(`projects.${id}.title`) }}</h3>
      <div :class="$style.links">
        <SocialIcon
          v-for="link in linkList"
          :key="link.id"
          :icon="link.icon"
          :color="`${color}Dark`"
        />
      </div>
    </div>
    <p>
      {{ $t(`projects.${id}.desc`) }}
    </p>
    <div :class="$style.tags">
      <InfoTag
        v-for="tag in tagList"
        :key="tag"
        :label="$t(`tech.${tag}.name`)"
        :color="`${color}Dark`"
      />
    </div>
  </div>
</template>

<script>
import { getColor } from "../../../utils";
import InfoTag from "../InfoTag.vue";
import SocialIcon from "../SocialIcon.vue";
export default {
  name: "InfoCarousel",
  props: {
    id: String,
    linkList: Array,
    tagList: Array,
    color: String,
  },
  components: {
    InfoTag,
    SocialIcon,
  },
  methods: {
    getColor,
  },
};
</script>

<style module>
@import "@/assets/backs.css";

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
  margin-right: 20px;
}
.info .title .links {
  display: inline-block;
  gap: 10px;
  position: relative;
  top: -6px;
}
.info .title .links >* {
  margin-right: 10px;
}
.info p {
  font-size: 16px;
  margin-bottom: 40px;
  color: var(--white);
}
</style>

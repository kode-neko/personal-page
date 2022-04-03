<template>
  <div :class="[$style.cont, `${color}Gradient`]">
    <div :class="$style.header">
      <h3 :class="$style.title">{{ $t(`projects.${id}.title`) }}</h3>
      <div :class="$style.links">
        <SocialIcon
          v-for="link in linkList"
          :key="link.id"
          :icon="link.icon"
          :color="`${color}Dark`"
        />
      </div>
    </div>
    <p :class="$style.desc">
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
  name: "InfoAreaCarousel",
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

.cont {
  height: 100%;
  display: inline-block;
  width: 50%;
  background-color: bisque;
  border-radius: 0 8px 8px 0;
  box-sizing: border-box;
  padding: 20px;
  padding-right: 60px;
  position: absolute;
  left: 50%;
}
.cont .header {
  margin-bottom: 10px;
}
.cont .header .title {
  display: inline-block;
  font-size: 52px;
  font-family: "Saira Condensed", sans-serif;
  margin-right: 20px;
}
.cont .header .links {
  display: inline-block;
  gap: 10px;
  position: relative;
  top: -6px;
}
.cont .header .links > * {
  margin-right: 10px;
}
.cont .desc {
  font-size: 16px;
  margin-bottom: 40px;
  color: var(--white);
}
</style>

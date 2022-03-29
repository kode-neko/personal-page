<template>
  <div :class="$style.info">
    <div :class="$style.title">
      <h3>{{ $t(`projects.${id}.title`) }}</h3>
      <div :class="$style.links">
        <SocialIcon v-for="link in linkList" :key="link.id" :icon="link.icon" />
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
        :color="darkPurple"
      />
    </div>
  </div>
</template>

<script>
import { tagColor } from "../../../globals";
import { getColor } from "../../../utils";
import InfoTag from "../InfoTag.vue";
import SocialIcon from "../SocialIcon.vue";
export default {
  name: "InfoCarousel",
  data() {
    return { tagColor };
  },
  props: {
    id: String,
    linksList: Array,
    tagList: Array,
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
</style>

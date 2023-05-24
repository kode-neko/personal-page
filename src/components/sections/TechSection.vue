<template>
  <div :class="$style.cont">
    <div :class="$style.contTag">
      <div :class="$style.subContTag">
        <h3 :class="$style.subtitle">{{ $t("tech.titles.front") }}</h3>
        <div :class="$style.tags" @mouseleave="getInfo()">
          <TagTech
            v-for="(tech, index) in techFront"
            v-bind:key="tech"
            :label="$t(`tech.${tech}.name`)"
            :cursor="true"
            :color="tagColor[getColor(index)]"
            @mouseover="getInfo(tech)"
          />
        </div>
      </div>
      <div :class="$style.subContTag">
        <h3 :class="$style.subtitle">{{ $t("tech.titles.back") }}</h3>
        <div :class="$style.tags" @mouseleave="getInfo()">
          <TagTech
            v-for="(tech, index) in techBack"
            v-bind:key="tech"
            :label="$t(`tech.${tech}.name`)"
            :cursor="true"
            :color="tagColor[getColor(index)]"
            @mouseover="getInfo(tech)"
          />
        </div>
      </div>
      <div :class="$style.subContTag">
        <h3 :class="$style.subtitle">{{ $t("tech.titles.other") }}</h3>
        <div :class="$style.tags" @mouseleave="getInfo()">
          <TagTech
            v-for="(tech, index) in techOthers"
            v-bind:key="tech"
            :label="$t(`tech.${tech}.name`)"
            :cursor="true"
            :color="tagColor[getColor(index)]"
            @mouseover="getInfo(tech)"
          />
        </div>
      </div>
    </div>

    <MqResponsive target="lg+" :class="$style.test">
      <div :class="$style.description">
        <Transition name="desc" mode="out-in">
          <div>
            <h3 v-if="name">
              <span>{{ $t(name) }}</span>
              <span
                v-if="version && $t(version).length !== 0"
                :class="$style.version"
                >v.{{ $t(version) }}</span
              >
            </h3>
            <p :key="description">{{ $t(description) }}</p>
          </div>
        </Transition>
      </div>
    </MqResponsive>
  </div>
</template>

<script>
import { techFront, techBack, techOthers, tagColor } from "../../globals";
import { getColor } from "../../utils";
import TagTech from "../common/InfoTag.vue";
import { MqResponsive } from "vue3-mq";

export default {
  name: "TechSection",
  components: { TagTech, MqResponsive },
  data() {
    return {
      techFront,
      techBack,
      techOthers,
      tagColor,
      name: "tech.angular.name",
      description: "tech.angular.desc",
      version: "tech.angular.version",
    };
  },
  methods: {
    getColor,
    getInfo(tech) {
      this.name = tech ? `tech.${tech}.name` : undefined;
      this.description = tech ? `tech.${tech}.desc` : "tech.msg";
      this.version = tech ? `tech.${tech}.version` : undefined;
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
  gap: 2rem;
}
.contTag {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 2;
}
.subContTag {
}
.subtitle {
  font-family: "Saira Condensed", sans-serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.test {
  flex: 1;
}
.description {
  padding: 0 20px;
  box-sizing: border-box;
  border-left: 1px solid var(--purple-dark);
}

.description .version {
  margin-left: 10px;
}

.description h3 {
  margin-bottom: 10px;
}
.description p {
  text-align: left;
}
</style>

<template>
  <ProjectCarousel :list="projecList" />
</template>

<script>
import ProjectCarousel from "../common/project-carousel/ProjectCarousel.vue";
import { projecList } from "../../globals";
export default {
  name: "ProjectSection",
  data() {
    return {
      projecList,
    };
  },
  components: { ProjectCarousel },
};
</script>

<style module>
</style>

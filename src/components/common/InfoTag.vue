<template>
  <div :class="[$style.tag, $style[color]]">{{ label }}</div>
</template>

<script>
import { tagColor } from "../../globals";
export default {
  name: "InfoTag",
  data() {
    return { tagColor };
  },
  props: {
    label: String,
    color: {
      type: String,
      default: tagColor[0],
      validate(value) {
        return tagColor.includes(value);
      },
    },
  },
};
</script>

<style module>
@import "@/assets/backs.css";

.tag {
  display: inline-block;
  font-family: "Saira Condensed", sans-serif;
  border-radius: 2px;
  font-size: 20px;
  padding: 4px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

</style>

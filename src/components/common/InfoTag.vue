<template>
  <div :class="[$style.tag, $style[color], cursor ? $style.cursor : '']">
    {{ label }}
  </div>
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
    cursor: {
      type: Boolean,
      default: false,
    },
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

  transition: transform 0.2s;
}

.tag:hover {
  transform: scale(1.1);
}

.cursor {
  cursor: pointer;
}
</style>

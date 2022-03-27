<template>
  <button :class="$style.btn" :type="action">{{ $t(label) }}</button>
</template>

<script>
export default {
  name: "ActionBtn",
  props: {
    label: String,
    action: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "submit", "action"].includes(value);
      },
    },
  },
};
</script>

<style module>
.btn {
  display: inline-block;
  width: 160px;
  border-radius: 4px;
  background-color: var(--purple-dark);
  border: none;
  color: var(--white);
  font-family: "Saira Condensed", sans-serif;
  padding: 4px;
  font-size: 24px;
}

.btn:hover {
  background-color: var(--purple-mid);
  cursor: pointer;
}
</style>

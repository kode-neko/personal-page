<template>
  <button :class="$style.btn" :type="action" :disabled="disabled">
    <img v-if="spinner" :class="$style.spinner" src="../assets/spinner.png" />{{
      spinner ? "" : $t(label)
    }}
  </button>
</template>

<script>
export default {
  name: "ActionBtn",
  props: {
    label: String,
    spinner: Boolean,
    disabled: Boolean,
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

.btn:disabled {
  background-color: var(--purple-dark);
  cursor: auto;
  color: var(--purple-light);
}

.spinner {
  height: 24px;
  vertical-align: middle;
}
</style>

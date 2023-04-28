<template>
  <div
    :class="{
      [$style.locale]: true,
      [$style.normal]: size === 'normal',
      [$style.small]: size === 'small',
    }"
  >
    <font-awesome-icon :icon="['fa', 'globe']" /><span
      :class="{ [$style.type]: true, [$style.selected]: locale === 'en' }"
      @click="changeLocale('es')"
      >ES</span
    ><span
      :class="{ [$style.type]: true, [$style.selected]: locale === 'es' }"
      @click="changeLocale('en')"
      >EN</span
    >
  </div>
</template>

<script>
export default {
  name: "LocaleSelector",
  data() {
    return {
      locale: this.$i18n.locale,
    };
  },
  props: {
    size: {
      type: String,
      validator(value) {
        return ["small", "normal"].includes(value);
      },
      default: "normal",
    },
  },
  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
      this.locale = lang;
    },
  },
};
</script>

<style module>
.locale {
  font-family: "Saira Condensed", sans-serif;
  text-align: center;
  display: flex;
  gap: 10px;
  justify-content: center;
  font-weight: bold;
  align-items: center;
}

.locale.normal {
  font-size: 24px;
}

.locale.small {
  font-size: 18px;
}

.locale .type {
  cursor: pointer;
}

.locale .type:hover {
  color: var(--purple-mid);
}

.locale .selected {
  color: var(--purple-light);
}
</style>

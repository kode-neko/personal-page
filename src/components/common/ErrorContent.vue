<template>
  <div :class="$style.cont">
    <font-awesome-icon :class="$style.icon" :icon="['fas', icon]" />
    <h1 :class="$style.title">{{ title }}</h1>
    <button :class="$style.btn">www.kodeneko.com</button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: {
    title: String,
    icon: String,
  },
};
</script>

<style module>
@import "@/assets/base.css";
@import "@/assets/colors.css";
.cont {
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.icon {
  font-size: 10rem;
  color: var(--white);
}
.title {
  font-family: "Saira Condensed", sans-serif;
  font-size: 5rem;
}
.btn {
  cursor: pointer;
  border-radius: 0.2rem;
  font-family: "Saira Condensed", sans-serif;
  border: 0;
  color: var(--white);
  background-color: var(--purple-dark);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s;
}

.btn:hover {
  background-color: var(--black);
}
</style>

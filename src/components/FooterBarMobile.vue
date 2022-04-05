<template>
  <div :class="$style.footer">Kodeneko © 2022</div>
</template>

<style module>
@import "@/assets/colors.css";
.footer {
  width: 100%;
  padding: 10px 40px;
  background: var(--black);
  color: var(--white);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 6;
  text-align: center;
  box-sizing: border-box;
}
</style>

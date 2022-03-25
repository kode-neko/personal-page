<template>
  <div :class="[$style.cont]">MainContent</div>
</template>

<style module>
.cont {
  flex-basis: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--black) 45%),
    url("./../assets/starnight.jpg") no-repeat left -375px / 1200px auto;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.3);
  /*border-right: 1px solid var(--black);*/
}
</style>

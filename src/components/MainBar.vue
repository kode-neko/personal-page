<template>
  <div :class="[$style.cont]">
    <div>
      <img :class="[$style.logo]" src="@/assets/logo.svg" />
    </div>
    <nav>
      <ul :class="[$style.social]">
        <li><SocialIcon :icon="['fab', 'twitter']" /></li>
        <li><SocialIcon :icon="['fab', 'github']" /></li>
        <li><SocialIcon :icon="['fab', 'codepen']" /></li>
        <li><SocialIcon :icon="['fa', 'bolt']" /></li>
        <li><SocialIcon :icon="['fab', 'pinterest']" /></li>
      </ul>
      <div :class="[$style.menu]">
        <MainBtn type="main">Artículos</MainBtn>
        <MainBtn type="normal">Contacto</MainBtn>
      </div>
    </nav>
    <div :class="$style.credits">Kodeneko © 2022</div>
  </div>
</template>

<script>
import SocialIcon from "./SocialIcon.vue";
import MainBtn from "./MainBtn.vue";
export default {
  name: "MainBar",
  components: { SocialIcon, MainBtn },
};
</script>

<style module>
.cont {
  background: linear-gradient(180deg, #9164a0 0%, #2e1152 100%);
  height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
  position: sticky;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.3);
}

.logo {
  width: 234px;
}

.social {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.menu {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
}

.credits {
  font-family: "Saira Condensed", sans-serif;
  font-size: 20px;

  position: absolute;
  bottom: 40px;
  text-align: center;
  width: 100%;
  margin-left: -20px;
}
</style>

<template>
  <div :class="$style.cont">
    <div>
      <img :class="$style.logo" src="@/assets/logo.svg" />
    </div>
    <ul :class="[$style.social]">
      <li><SocialIcon :icon="['fab', 'twitter']" /></li>
      <li><SocialIcon :icon="['fab', 'github']" /></li>
      <li><SocialIcon :icon="['fab', 'codepen']" /></li>
      <li><SocialIcon :icon="['fa', 'bolt']" /></li>
      <li><SocialIcon :icon="['fab', 'pinterest']" /></li>
    </ul>
    <nav>
      <div :class="[$style.menu]">
        <MainBtn type="main">Artículos</MainBtn>
        <MainBtn type="normal" link="#contact">Contacto</MainBtn>
        <MainBtn type="normal">Curriculum</MainBtn>
      </div>
    </nav>
    <div :class="$style.footer">
      <LocaleSelector />
      <div :class="$style.credits">Kodeneko © 2022</div>
    </div>
  </div>
</template>

<script>
import SocialIcon from "./common/SocialIcon.vue";
import MainBtn from "./common/MainBtn.vue";
import LocaleSelector from "./common/LocaleSelector.vue";

export default {
  name: "MainBar",
  components: { SocialIcon, MainBtn, LocaleSelector },
  data() {
    return {
      locale: this.$i18n.locale,
    };
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
.cont {
  background: linear-gradient(180deg, #9164a0 0%, #2e1152 100%);
  height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
  position: fixed;
  box-shadow: 6px 0px 4px rgba(0, 0, 0, 0.4), -6px 0px 4px rgba(0, 0, 0, 0.4);
}

.logo {
  width: 234px;
}

.iconBtn {
  margin-right: 10px;
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

.footer {
  font-family: "Saira Condensed", sans-serif;
  font-size: 20px;
  position: absolute;
  bottom: 40px;
  width: 100%;
  margin-left: -20px;
}

.footer .credits {
  text-align: center;
  margin-top: 20px;
}
</style>

<template>
  <div :class="$style.cont">
    <div :class="$style.left">
      <MqResponsive target="md+"
        ><h1 :class="$style.name">Kode Neko</h1></MqResponsive
      >
      <MqResponsive target="sm-"><h1 :class="$style.name">KN</h1></MqResponsive>
      <ul :class="[$style.social]">
        <li><SocialIcon :icon="['fab', 'twitter']" /></li>
        <li><SocialIcon :icon="['fab', 'github']" /></li>
        <li><SocialIcon :icon="['fab', 'codepen']" /></li>
        <li><SocialIcon :icon="['fa', 'bolt']" /></li>
        <li><SocialIcon :icon="['fab', 'pinterest']" /></li>
      </ul>
    </div>
    <div :class="$style.right">
      <font-awesome-icon
        :class="$style.menuBars"
        :icon="['fas', 'bars']"
        @click="this.show = !this.show"
      />
      <!--
      
      <div :class="$style.credits">Kodeneko © 2022</div>
      -->
    </div>
  </div>
  <Transition name="menu">
    <nav v-if="show" :class="[$style.menu]">
      <MqResponsive target="md+">
        <ul>
          <li><MainBtn type="main">Artículos</MainBtn></li>
          <li>
            <MainBtn type="normal" link="#contact">Contacto</MainBtn>
          </li>
          <li><MainBtn type="normal">Curriculum</MainBtn></li>
        </ul>
      </MqResponsive>
      <MqResponsive target="sm-">
        <ul :class="$style.res">
          <li><MainBtn type="main" size="small">Artículos</MainBtn></li>
          <li>
            <MainBtn type="normal" size="small" link="#contact"
              >Contacto</MainBtn
            >
          </li>
          <li><MainBtn type="normal" size="small">Curriculum</MainBtn></li>
        </ul>
      </MqResponsive>
    </nav>
  </Transition>
</template>

<script>
import SocialIcon from "./common/SocialIcon.vue";
import MainBtn from "./common/MainBtn.vue";
import logo from "@/assets/head.svg";
import { MqResponsive } from "vue3-mq";

export default {
  name: "MainBar",
  components: { SocialIcon, MainBtn, MqResponsive },
  data() {
    return {
      logo,
      show: false,
    };
  },
};
</script>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 1s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

</style>

<style module>
.cont {
  background: linear-gradient(90deg, #9164a0 0%, #2e1152 100%);
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  z-index: 5;
  border-bottom: 1px solid var(--black);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.logo {
  width: 32px;
}

.name {
  display: inline-block;
  font-family: "Saira Condensed", sans-serif;
  font-size: 42px;
  text-shadow: 2px 2px rgb(0 0 0 / 40%);
}

.social {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.right .menuBars {
  fill: var(--white);
  height: 32px;
}

.menu {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  z-index: 5;
  border-bottom: 1px solid var(--black);
  position: fixed;
  top: 63px;
  width: 100%;
  background: #9164a0;
  display: relative;
  padding: 20px 40px;
  box-sizing: border-box;
}

.menu ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.menu ul.res {
  gap: 10px;
}

.menu ul li {
  width: 100%;
}

/*


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
}*/
</style>

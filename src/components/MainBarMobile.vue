<template>
  <div :class="$style.cont">
    <div :class="$style.left">
      <h1 :class="$style.name">Kode Neko</h1>
    </div>
    <div :class="$style.right">
      <font-awesome-icon
        :class="{ [$style.menuBars]: true, [$style.menuBarsActive]: show }"
        :icon="['fas', 'bars']"
        @click="show = !show"
      />
    </div>
  </div>
  <Transition name="menu">
    <nav v-if="show" :class="[$style.menu]">
      <MqResponsive target="md+">
        <ul>
          <!-- <li><MainBtn type="main">Artículos</MainBtn></li> -->
          <li>
            <MainBtn type="normal" link="#contact">Contacto</MainBtn>
          </li>
          <!-- <li><MainBtn type="normal">Curriculum</MainBtn></li> -->
        </ul>
      </MqResponsive>
      <MqResponsive target="sm-">
        <ul :class="$style.res">
          <!-- <li><MainBtn type="main" size="small">Artículos</MainBtn></li> -->
          <li>
            <MainBtn
              type="normal"
              size="small"
              link="#tech"
              @clickBtn="show = !show"
              >{{ $t("tech.title") }}</MainBtn
            >
          </li>
          <li>
            <MainBtn
              type="normal"
              size="small"
              link="#exp"
              @clickBtn="show = !show"
              >{{ $t("exp.title") }}</MainBtn
            >
          </li>
          <li>
            <MainBtn
              type="normal"
              size="small"
              link="#projects"
              @clickBtn="show = !show"
              >{{ $t("projects.title") }}</MainBtn
            >
          </li>
          <li>
            <MainBtn
              type="normal"
              size="small"
              link="#contact"
              @clickBtn="show = !show"
              >{{ $t("contact.title") }}</MainBtn
            >
          </li>
          <!-- <li><MainBtn type="normal" size="small">Curriculum</MainBtn></li> -->
        </ul>
      </MqResponsive>
    </nav>
  </Transition>
</template>

<script>
import MainBtn from "./common/MainBtn.vue";
import logo from "@/assets/head.svg";
import { MqResponsive } from "vue3-mq";
import { socialList } from "../globals";

export default {
  name: "MainBar",
  components: { MainBtn, MqResponsive },
  emits: ["clickBtn"],
  data() {
    return {
      logo,
      show: false,
      socialList,
    };
  },
  methods: {},
};
</script>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.4s;
}
.menu-enter-from,
.menu-leave-to {
  transform: translateY(-313px);
}
</style>

<style module>
.cont {
  background: linear-gradient(90deg, #9164a0 0%, #2e1152 100%);
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  z-index: 6;
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

.right .menuBars {
  color: var(--white);
  height: 32px;
  cursor: pointer;
}

.right .menuBars:hover {
  color: var(--purple-mid);
}

.right .menuBarsActive {
  color: var(--purple-mid);
}

.menu {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  z-index: 5;
  border-bottom: 1px solid var(--black);
  position: fixed;
  top: 63px;
  width: 100%;
  background: #9164a0;
  padding: 20px 40px;
  box-sizing: border-box;
}

.menu ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.menu ul.res {
  gap: 6px;
}

.menu ul li {
  width: 100%;
}
</style>

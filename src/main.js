import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18n } from "./locale";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faCodepen,
  faFigma,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faCoffee,
  faLink,
  faCircleChevronLeft,
  faCircleChevronRight,
  faBars,
  faGlobe,
  faFaceGrinBeamSweat,
  faFaceKiss,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import ServerError from "./views/ServerError.vue";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import Notifications from "@kyvg/vue3-notification";
import VueSmoothScrolls from "vue3-smooth-scroll";
import { Vue3Mq } from "vue3-mq";
import { createRouter, createWebHistory } from "vue-router";

// fontawesome
library.add([
  faTwitter,
  faGithub,
  faCodepen,
  faBolt,
  faCoffee,
  faLink,
  faFigma,
  faFacebook,
  faCircleChevronLeft,
  faCircleChevronRight,
  faBars,
  faGlobe,
  faFaceGrinBeamSweat,
  faFaceKiss,
]);

const routes = [
  { path: "/", component: Home },
  { path: "/not-found", component: NotFound },
  { path: "/server-error", component: ServerError },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(createPinia());
app.use(Notifications);
app.use(VueSmoothScrolls, {
  duration: 1000,
  offset: -50,
  easingFunction: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
});
app.use(Vue3Mq);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("scroll-parallax", ScrollParallax);
app.mount("#app");

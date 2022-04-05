import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import messages from "./locale";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faCodepen,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faCoffee,
  faLink,
  faCircleChevronLeft,
  faCircleChevronRight,
  faFilePdf,
  faEnvelope,
  faFilePen,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import Notifications from "@kyvg/vue3-notification";
import VueSmoothScrolls from "vue3-smooth-scroll";
import { Vue3Mq } from "vue3-mq";

// vue-i18n
const i18n = createI18n({
  locale: "es",
  fallbackLocale: "es",
  messages,
});

// fontawesome
library.add([
  faTwitter,
  faGithub,
  faCodepen,
  faBolt,
  faCoffee,
  faLink,
  faPinterest,
  faCircleChevronLeft,
  faCircleChevronRight,
  faFilePdf,
  faEnvelope,
  faFilePen,
  faBars,
]);

const app = createApp(App);
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

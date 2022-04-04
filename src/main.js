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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

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
]);

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("scroll-parallax", ScrollParallax);
app.mount("#app");

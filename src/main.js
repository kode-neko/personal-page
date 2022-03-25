import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faCodepen,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faBolt, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";

library.add([faTwitter, faGithub, faCodepen, faBolt, faCoffee, faPinterest]);

const app = createApp(App);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

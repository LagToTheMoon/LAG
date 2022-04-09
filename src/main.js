import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import "primeflex/primeflex.scss";
// import "primevue/resources/themes/vela-green/theme.css";
import "primevue/resources/themes/saga-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(router)
  .use(store)
  .use(PrimeVue)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBfObO7JbRStWPBd2D369SJJedPM0voITg",
    },
  })
  .use(FontAwesomeIcon)
  .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

import { addAPIProvider, disableCache } from "@iconify/vue";
addAPIProvider("troop", {
  // Array of host names.
  // Mutliple hosts allow redundancy: if one host is down, component will query another host. https://tt-ui-icons-dot-tt-app-stage.uc.r.appspot.com / http://localhost:3000
  resources: ["https://tt-ui-icons-dot-tt-app-stage.uc.r.appspot.com"],
});
disableCache("local");
disableCache("all");

createApp(App).mount("#app");


import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
import { router } from "./router";

createApp(App)
    // informa vue che vogliamo usare il router
    .use(router)
    .mount("#app");
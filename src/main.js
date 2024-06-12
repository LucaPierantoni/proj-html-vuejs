import { createApp } from "vue";
import "./assets/scss/main.scss";
import { router } from "./router";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faFacebookF as fb } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTruckRampBox as cargo } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight as arrow } from "@fortawesome/free-solid-svg-icons";
import { faCheck as check } from "@fortawesome/free-solid-svg-icons";
import { faXmark as cross } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign as dollar } from "@fortawesome/free-solid-svg-icons";
import { faPhone as phone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as mail } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot as map } from "@fortawesome/free-solid-svg-icons";
import { faBoxesStacked as box } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHigh as temperature } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add([
  fb,
  cargo,
  arrow,
  dollar,
  check,
  cross,
  phone,
  mail,
  map,
  box,
  temperature,
]);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

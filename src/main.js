import DefaultLayout from "~/layouts/Default.vue";

import BootstrapVue from "bootstrap-vue";
import "./assets/styles/main.scss";

import checkIfMobile from "./mixins/checkIfMobile";
import VueParticlesBg from "particles-bg-vue";

export default function(Vue, { router, head, isClient }) {
	Vue.use(VueParticlesBg);
	Vue.use(BootstrapVue);
	Vue.component("Layout", DefaultLayout);
	Vue.mixin(checkIfMobile);
}

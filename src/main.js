import DefaultLayout from "~/layouts/Default.vue";

import BootstrapVue from "bootstrap-vue";
import "./assets/styles/main.scss";

// import VueParticlesBg from "../node_modules/particles-bg-vue";

import checkIfMobile from "./mixins/checkIfMobile";

export default function(Vue, { router, head, isClient }) {
	if (process.isClient) {
		const VueParticlesBg = require('particles-bg-vue').default;
		Vue.use(VueParticlesBg);
	}
	Vue.use(BootstrapVue);
	Vue.component("Layout", DefaultLayout);
	Vue.mixin(checkIfMobile);
}

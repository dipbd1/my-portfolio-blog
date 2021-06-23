<template>
	<div id="app">
		<template>
			<div class="layout">
				<div id="content-wrapper">
					<Header />
					<slot />
				</div>
				<Footer />
			</div>
		</template>
		<ClientOnly>
			<Particles-bg
				type="fountain"
				:num="5"
				:bg="true"
				:canvas="canvasObject"
			/>
		</ClientOnly>
	</div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
	components: {
		Footer,
		Header,
	},
	data() {
		return {
			canvasObject: {
				height: "200vh",
				zIndex: -1,
				// top: "-100vh",
				left: 0,
			},
		};
	},
};
</script>

<style lang="scss">
body,
html {
	height: 100%;
}

body {
	font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.5;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	// margin-top: 60px;
}

#content-wrapper {
	flex: 1 0 auto;
	max-width: 950px;
	width: 90vw;
	margin: 0 auto;
}
</style>

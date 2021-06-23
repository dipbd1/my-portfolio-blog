<template>
	<Layout>
		<!-- <img class="greet-image" src="../assets/images/rick.jpg" /> -->

		<!-- <h2 class="mb-4">Gridsome starter bootstrap</h2> -->
		<!-- <p>
      This is a starter project for Gridsome that comes with many features out of the box. It utilizes Bootstrap that is well known
      for powerful styling and layout. Ready to be deployed, automagically imports data to CMS and sets up your /admin page for easy
      access to edit your content. 
    </p>

    <p>
      It is designed to use Netlify, Forestry and Github which all have very fair free tier to their services, so you wont need to pay
      for monthly subscriptions and costly hosting fees.
    </p> -->
		<!--Start of Heading Section -->
		<div>
			<div class="container">
				<div
					class="jumbotron animating-bg"
					style="padding-top: 30px; padding-bottom: 30px;"
				>
					<b-row>
						<b-col sm="8">
							<h1 class="pt-3">Hello, world!</h1>
							<p>
								I am <b>Dip Chowdhury</b>, and this is my blog and portfolio
								site. Feel free to travarse.
							</p>
							<!-- <p>
								<a class="btn btn-primary btn-lg" href="#" role="button"
									>Learn more</a
								>
							</p> -->
						</b-col>
						<b-col sm="4">
							<img class="logo-home2" src="../assets/images/rick.png" alt="" />
						</b-col>
					</b-row>
				</div>
			</div>
		</div>

		<!--Start of Skills Section -->
		<div>
			<div class="container">
				<div class="jumbotron" style="background-color: rgba(110,150,210,0.3)">
					<b-row style="justify-content:space-between">
						<b-col
							sm="8"
							style="margin-bottom: 20px; border-right: 0.5px solid #333;"
						>
							<h2>Skills</h2>
							<b-card-text style="max-width:70%">
								I have worked with a lot of techs, but here's few of them where
								I feel most confident.
							</b-card-text>
						</b-col>

						<b-col sm="4" style="padding:0px;">
							<b-card class=" border-0" style="background:transparent">
								<h6 class="card-title remove-bottom-border">
									Points Per Skill
								</h6>

								<b-list-group style="border-bottom:0;">
									<b-list-group-item
										class="border-0 skills2"
										style="margin-left:0px; margin-right:0px;background:transparent"
									>
										<div
											style="display:flex; place-content:space-between; max-width:220px; "
										>
											<div style="float:left; display:inline-block;">
												<span style="font-size:14px">
													JavaScript
												</span>
											</div>

											<div
												style="width:150px; float:right; display:inline-block; margin-top:8px; margin-left:10px"
											>
												<b-progress
													variant="warning"
													:value="90"
													:max="100"
													height="12px"
													show-progress
													animated
												></b-progress>
											</div>
										</div>
									</b-list-group-item>
									<b-list-group-item
										class="border-0 skills2"
										style="margin-left:0px; margin-right:0px;background:transparent;"
									>
										<div
											style="display:flex; place-content:space-between; max-width:220px;"
										>
											<div style="float:left; display:inline-block">
												<span style="font-size:14px">
													React
												</span>
											</div>

											<div
												style="width:150px; float:right; display:inline-block; margin-top:8px; margin-left:10px"
											>
												<b-progress
													variant="danger"
													:value="80"
													:max="100"
													height="12px"
													show-progress
													animated
												></b-progress>
											</div>
										</div>
									</b-list-group-item>
									<b-list-group-item
										class="border-0 skills2"
										style="margin-left:0px; margin-right:0px;background:transparent ;"
									>
										<div
											style="display:flex; place-content:space-between; max-width:220px; "
										>
											<div style="float:left; display:inline-block">
												<span style="font-size:14px">
													Vue
												</span>
											</div>

											<div
												style="width:150px; float:right; display:inline-block; margin-top:8px; margin-left:10px"
											>
												<b-progress
													:value="85"
													:max="100"
													height="12px"
													show-progress
													animated
												></b-progress>
											</div>
										</div>
									</b-list-group-item>
								</b-list-group>
							</b-card>
						</b-col>
					</b-row>
				</div>
			</div>
		</div>

		<!--Currently at starts here -->
		<div class="container">
			<div class="jumbotron" style="background-color: rgba(210,220,220,0.6)">
				<b-row>
					<b-col sm="8">
						<h3>Now I am</h3>
						<p>
							Working at Brainstation23 as a Software Engineer. It's a good
							place to work, because you will have a lot of expert people around
							you.
						</p>
					</b-col>
					<b-col>
						<!-- <img class="greet-image" src="../assets/images/bs.png" /> -->

						<div
							class="c-glitch"
							style="background-image: url('https://odoocdn.com/web/image/res.partner/1191772/image_512/Brain%20Station--23%20Ltd?unique=a2bc379');"
						>
							<div
								class="c-glitch__img"
								style="background-image: url('https://odoocdn.com/web/image/res.partner/1191772/image_512/Brain%20Station--23%20Ltd?unique=a2bc379');"
							></div>
							<div
								class="c-glitch__img"
								style="background-image: url('https://odoocdn.com/web/image/res.partner/1191772/image_512/Brain%20Station--23%20Ltd?unique=a2bc379');"
							></div>
							<div
								class="c-glitch__img"
								style="background-image: url('https://odoocdn.com/web/image/res.partner/1191772/image_512/Brain%20Station--23%20Ltd?unique=a2bc379');"
							></div>
							<div
								class="c-glitch__img"
								style="background-image: url('https://odoocdn.com/web/image/res.partner/1191772/image_512/Brain%20Station--23%20Ltd?unique=a2bc379');"
							></div>
							<div
								class="c-glitch__img"
								style="background-image: url('https://odoocdn.com/web/image/res.partner/1191772/image_512/Brain%20Station--23%20Ltd?unique=a2bc379');"
							></div>
						</div>
					</b-col>
				</b-row>
			</div>
		</div>

		<!--Start of Overall Proficiency Section Section -->

		<div>
			<div class="container">
				<div class="jumbotron" style="background-color: rgba(225,220,255,0.6)">
					<b-row>
						<b-col sm="8">
							<h1>Proficiency</h1>
							<p style="margin-top:20px">
								<b>Frontend</b>
							</p>
							<div class="progress-grad" style="margin-bottom:20px">
								<span class="progress-bar-grad" style="width: 70%"></span>
							</div>

							<p>
								<b>Backend</b>
							</p>
							<div class="progress-grad" style="margin-bottom:20px">
								<span class="progress-bar-grad" style="width: 70%"></span>
							</div>

							<p>
								<b>Programming</b>
							</p>
							<div class="progress-grad" style="margin-bottom:20px">
								<span class="progress-bar-grad" style="width: 80%"></span>
							</div>
						</b-col>
						<b-col sm="4">
							<!-- <img class="logo-home2" src="../assets/images/rick.jpg" alt="" /> -->
							<div class="container-circle">
								<svg
									class="loader"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 340 340"
								>
									<circle cx="170" cy="170" r="160" stroke="#E2007C" />
									<circle cx="170" cy="170" r="135" stroke="#404041" />
									<circle cx="170" cy="170" r="110" stroke="#E2007C" />
									<circle cx="170" cy="170" r="85" stroke="#404041" />
								</svg>
							</div>
						</b-col>
					</b-row>
				</div>
			</div>
		</div>

		<!-- <a
			href="https://app.forestry.io/quick-start?repo=LokeCarlsson/gridsome-starter-bootstrap&amp;provider=github&amp;engine=vuepress"
			target="_blank"
			rel="nofollow"
		>
			<img
				class="mt-3 mb-3"
				src="https://camo.githubusercontent.com/2455e97e4e989374a355fb0bea7ad364f2561c92/68747470733a2f2f6173736574732e666f7265737472792e696f2f696d706f72742d746f2d666f7265737472794b2e737667"
				alt="Import this project into Forestry"
				data-canonical-src="https://assets.forestry.io/import-to-forestryK.svg"
				style="max-width:100%;"
			/>
		</a> -->

		<!-- <h3 class="mt-4 mb-4">Netlify config</h3>
		<p>
			Use the following build config for Netlify
		</p>

		<p>Build command: <code>gridsome build</code></p>
		<p>Publish directory: <code>dist</code></p>

		<h4 class="mb-3 mt-5">Manually install just the project (without CMS).</h4>

		<p>
			If you haven't already installed Gridsome CLI:
			<code>npm install --global @gridsome/cli</code>
		</p>

		<ol>
			<li>
				<code
					>gridsome create my-gridsome-site
					https://github.com/LokeCarlsson/gridsome-starter-bootstrap.git</code
				>
			</li>

			<li><code>cd my-gridsome-site</code> to open folder</li>

			<li>
				<code>yarn dev</code> to start local dev server at
				<code>http://localhost:8080</code>
			</li>

			<li>Happy hacking 🎉🙌</li>
		</ol> -->
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Gridsome starter bootstrap",
	},
};
</script>

<style lang="scss">
@import "@/assets/styles/glitch.scss";
.greet-image {
	display: block;
	margin: auto;
	width: 90%;
	max-width: 500px;
	padding-bottom: 50px;
}
.logo-home2 {
	width: 400px;
	max-width: 100%;
	max-height: 100%;
}
.same-line {
	flex-wrap: inherit !important;
}
.skills {
	margin-left: auto;
	margin-right: auto;
}
.skills2 {
	padding-left: 0px;
	padding-right: 0px;
	margin-left: auto;
	margin-right: auto;
}
.skill-detail {
	position: relative;
	top: -50px;
}
.remove-bottom-border {
	border-bottom: 0px;
}
.progress-grad {
	width: 100%;
	max-width: 260px;
	height: 6px;
	background: #e1e4e8;
	border-radius: 3px;
	overflow: hidden;

	.progress-bar-grad {
		display: block;
		height: 100%;
		background: linear-gradient(
			90deg,
			#ffd33d,
			#ea4aaa 17%,
			#b34bff 34%,
			#01feff 51%,
			#ffd33d 68%,
			#ea4aaa 85%,
			#b34bff
		);
		background-size: 300% 100%;
		animation: progress-animation 2s linear infinite;

		@keyframes progress-animation {
			0% {
				background-position: 100%;
			}
			100% {
				background-position: 0;
			}
		}
	}
}
.container-cicle {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background-color: #ededed;
}

.loader {
	max-width: 15rem;
	width: 100%;
	height: auto;
	stroke-linecap: round;
}

circle {
	fill: none;
	stroke-width: 3.5;
	animation-name: preloader;
	animation-duration: 3s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	transform-origin: 170px 170px;
	will-change: transform;

	&:nth-of-type(1) {
		stroke-dasharray: 550px;
	}

	&:nth-of-type(2) {
		stroke-dasharray: 500px;
	}

	&:nth-of-type(3) {
		stroke-dasharray: 450px;
	}

	&:nth-of-type(4) {
		stroke-dasharray: 300px;
	}

	@for $i from 1 through 4 {
		&:nth-of-type(#{$i}) {
			animation-delay: -#{$i * 0.15}s;
		}
	}
}

@keyframes preloader {
	50% {
		transform: rotate(360deg);
	}
}

.animating-bg {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>

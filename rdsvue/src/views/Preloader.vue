<template>
	<div id="app-preloader">
		<div class="centralholder">

			<div class="text-center">
				<!-- <span>C</span>
				<span>A</span>
				<span>R</span> -->
			</div>
			<!-- 
			<div class="logoleft">
				<svg 
					version="1.1" 
					id="Слой_1" 
					xmlns="http://www.w3.org/2000/svg" 
					xmlns:xlink="http://www.w3.org/1999/xlink" 
					x="0px" 
					y="0px"
					viewBox="0 0 400 400" 
					style="enable-background:new 0 0 400 400;" 
					xml:space="preserve"
					>
					<g>
						<rect x="5" y="5" class="st0" width="390" height="390"/>
						<path d="M390,10v380H10V10H390 M400,0H0v400h400V0L400,0z"/>
					</g>
					<g id="svgl2">
						<g>
							<path d="M58.4,334.5H45.8v-90.2h-29v-11.1h70.8v11.1H58.4V334.5z"/>
							<path d="M114.4,334.5h-12.7V233.2h12.7V334.5z"/>
							<path d="M212.6,334.5h-13.3l-18.7-43.9h-29v43.9h-11.9V233.2h39.9c10.8,0,18.9,3,24.1,8.9c5.2,5.9,7.8,12.4,7.8,19.4
								c0,5.4-1.5,10.6-4.4,15.5c-2.9,5-7.7,8.5-14.5,10.6L212.6,334.5z M151.5,280.4H178c7,0,12.2-1.8,15.6-5.5
								c3.4-3.7,5.2-8.2,5.2-13.5c0-5.3-1.8-9.5-5.5-12.5c-3.6-3-8.2-4.5-13.8-4.5h-28.1V280.4z"/>
							<path d="M298.4,323.4v11.1h-65.6V233.2H297v11.1h-51.4v32.2h40.8v10.3h-40.8v36.5H298.4z"/>
							<path d="M305,307.7l11.4-2.6c4.6,13.8,14.6,20.7,29.9,20.7c8,0,14.1-1.7,18.1-5.1c4.1-3.4,6.1-8,6.1-13.7c0-4.3-1.5-7.8-4.6-10.4
								c-3.1-2.6-6.7-4.4-10.7-5.4l-20.3-5c-5.2-1.3-9.5-3-12.9-4.9c-3.3-1.9-6.2-4.8-8.5-8.8c-2.3-4-3.5-8.5-3.5-13.6
								c0-8.5,3.2-15.2,9.6-20.3c6.4-5,14.6-7.5,24.6-7.5c18.4,0,30.5,8.3,36.3,25l-11.5,3.4c-1.3-5.9-4.5-10.4-9.4-13.5
								c-4.9-3-10.2-4.6-15.8-4.6c-5.5,0-10.5,1.5-14.8,4.4c-4.3,2.9-6.5,7.1-6.5,12.5c0,7.5,5.5,12.6,16.5,15.2l18.9,4.4
								c17.3,4.2,26,13.5,26,28c0,8.8-3.3,16.1-9.8,21.9s-15.7,8.7-27.5,8.7C325.6,336.6,311.7,327,305,307.7z"/>
						</g>
						<g>
							<path d="M58.1,186.6H45.4V96.4h-29V85.3h70.8v11.1H58.1V186.6z"/>
							<path d="M131.8,188.7c-13,0-23.2-5.1-30.4-15.2C94,163.4,90.4,151,90.4,136.3c0-15.4,3.8-28,11.4-38c7.6-10,17.7-15,30.3-15
								c12.5,0,22.6,4.9,30.1,14.7c7.6,9.8,11.4,22.2,11.4,37.2c0,14.4-3.7,26.9-11,37.6S145,188.7,131.8,188.7z M132.1,178.4
								c8.9,0,15.8-4,20.8-12.1c5-8.1,7.5-18.5,7.5-31.2c0-13.1-2.6-23.3-7.8-30.5c-5.2-7.3-12-10.9-20.6-10.9c-8.7,0-15.5,3.9-20.6,11.8
								c-5.1,7.9-7.6,18.2-7.6,30.9c0,12.4,2.6,22.6,7.7,30.4C116.6,174.5,123.4,178.4,132.1,178.4z"/>
							<path d="M253.9,85.3L219.9,144v42.6h-12.7V144l-33.9-58.7h15l26.9,46.6l27.1-46.6H253.9z"/>
							<path d="M294.7,188.7c-13,0-23.2-5.1-30.4-15.2c-7.3-10.1-10.9-22.5-10.9-37.3c0-15.4,3.8-28,11.4-38c7.6-10,17.7-15,30.3-15
								c12.5,0,22.6,4.9,30.1,14.7c7.6,9.8,11.4,22.2,11.4,37.2c0,14.4-3.7,26.9-11,37.6S307.9,188.7,294.7,188.7z M295,178.4
								c8.9,0,15.8-4,20.8-12.1c5-8.1,7.5-18.5,7.5-31.2c0-13.1-2.6-23.3-7.8-30.5c-5.2-7.3-12-10.9-20.6-10.9c-8.7,0-15.5,3.9-20.6,11.8
								c-5.1,7.9-7.6,18.2-7.6,30.9c0,12.4,2.6,22.6,7.7,30.4C279.5,174.5,286.4,178.4,295,178.4z"/>
						</g>
					</g>
				</svg>
			</div> -->



		</div>
		<div class="loaderline"></div>
	</div>
</template>

<script>
	import {TimelineMax} from 'gsap'
	import { CSSRulePlugin } from "gsap/all"
	export default {
		name: 'preloader',
		data () {
			return {
			};
		},
		methods: {
			a1() {
				var tl = new TimelineMax();
				//tl.to(element, 1, {x:100});

				var ruleafter = CSSRulePlugin.getRule(".loaderline:after"); //get the rule
				var rulebefore = CSSRulePlugin.getRule(".loaderline:before"); //get the rule
				tl.to(ruleafter, 1.3, {cssRule:{width:"100%", ease: Sine.easeOut}})
				.to(rulebefore, 1.3, {cssRule:{left: '100%', ease: Sine.easeOut}})
				.to(ruleafter, .65, {cssRule:{left: '100%', ease: Sine.easeOut}}, '-=.65')
				.to("#app-preloader", .65, {opacity: 0})
				.to("#app-preloader", .65, {display: 'none'})
				//.to(".loaderline", 1.3, {width: 0, transformOrigin: 'left 100%'})

				//then later, control the whole thing...
				// tl.pause();
				// tl.resume();
				// tl.seek(1.5);
				// tl.reverse();
//transform-origin: center bottom 0px; transform: matrix(1, 0, 0, 1, 0, 0);
			}
		},
		mounted() {
			this.a1()
		}
	}
</script>

<style lang="sass">
	#app-preloader
		width: 100vw
		height: 100vh
		position: absolute
		z-index: 9999999
		background-image: url(../assets/preloadbg.jpg) 
		background-position: right 67% bottom 45%
		background-size: cover 
		top: 0
		left: 0
	.centralholder
		position: absolute
		top: 50%
		left: 50%
		transform: translate3d(-50%, -50%, 0)
		width: 130px
		
	.logoleft, .text-center, .logoright
		//position: absolute
		display: inline-block
		position: relative
		top: 50% 
	
	.logoleft
		width: 50px
		height: 100%
		svg #svgl2
			width: 100%
			height: 100%
			fill: white
		svg
			stroke: white
			stroke-width: 3
			fill: none
	.text-center
		font-size: 43px
		width: 130px
		height: 130px
		color: white 
		font-family: 'PermanentMarker-Regular'
		background-image: url(../assets/Bez_imeni-1-vosstanovleno.png) 
		background-position: right 67% bottom 45%
		background-size: cover
		
		span
			display: block
	.logoright
		width: 50px
		height: 100%
		svg
			width: 100%
			height: 100%
			&:after
				content: ""
				width: 100%
				height: 100%
				background-color: red
				color: red
	.st0
		fill-rule: evenodd
		clip-rule: evenodd
	.loaderline
		position: absolute
		bottom: 5%
		left: 50%
		transform: translate3d(-50%, -50%, 0)
		width: 50%
		height: 5px
		overflow: hidden
		&:before
			content: ''
			position: absolute
			top: 0
			left: 0
			height: 100%
			width: 100%
			background-color: #242424
		&:after
			content: ''
			position: absolute
			top: 0
			left: 0
			height: 100%
			width: 1%
			background-color: #F5F5F5
		
</style>
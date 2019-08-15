<template>
		
		<div id="app">

			<router-view/>
			<div class="nav" v-show="menuactive">
				<div class="navoverlay"></div>
				<ul>
					<li @click="menuactive = !menuactive"><router-link to="/">ПРОФИЛЬ</router-link></li>
					<li @click="menuactive = !menuactive"><router-link to="/soc">СООБЩЕСТВА</router-link></li>
					<li @click="menuactive = !menuactive"><router-link to="/club">КЛУБ</router-link></li>
					<li @click="menuactive = !menuactive"><router-link to="/events">СОБЫТИЯ</router-link></li>
					<li @click="menuactive = !menuactive"><router-link to="/map">КАРТА</router-link></li>
				</ul>
			</div>

			<button id="ui-burger-main" @click="burgerClick" @blur="burgerBlur">
				<div 
					id="ui-burger-line-1" 
					class="ui-burger-line" 
					ref="uiBurgerLine1"
				></div>
				<div 
					id="ui-burger-line-2" 
					class="ui-burger-line" 
					ref="uiBurgerLine2"
				></div>
				<div 
					id="ui-burger-line-3" 
					class="ui-burger-line" 
					ref="uiBurgerLine3"
				></div>
			</button>

		</div>
</template>
<script>
	import {mapActions} from 'vuex'
	import {TweenLite, TimelineMax} from 'gsap'
	export default {

		name: 'app',
		// props: {
		// 	componentControl: {
		// 		type: String,
		// 		required: true
		// 	}
		// },
		data () {
			return {
				burgerTL: null,
				burgerTLpaused: true,
				cssTop1: 10,
				cssTop2: 21,
				cssBot3: 10,
				cssTopCtr: 21,
				burgerTLstep: 0.3,
				cssOpasity2: 0,
				burgerBGCtime: 0,
				menuactive: false
			}
		},

		mounted(){
			let that = this;
			this.burgerTL = new TimelineMax({
				  paused: that.burgerTLpaused
				, onComplete: function(){
					that.burgerTLpaused = true;
					this.cssOpasity2 = 0;
				}
			});
			this.burgerAnimation();
		},

		methods: {
			...mapActions(['toggle_bool_state']),
			burgerAnimation(){
				this.burgerTL
					.to(
						'.ui-burger-line'
						, {
							css: {
								backgroundColor: '#fff'
							}
						}
						, this.burgerBGCtime
					)
					.to(
						  this.$refs.uiBurgerLine1
						, this.burgerTLstep
						, {
							css: {
								top: this.cssTopCtr
							}
						}
					)
					.to(
						  this.$refs.uiBurgerLine3
						, this.burgerTLstep
						, {
							css: {
								bottom: this.cssTopCtr
							}
						}
						, 0.0
					)
					.set(
						  this.$refs.uiBurgerLine2
						, {
							
								opacity: this.cssOpasity2
							
						},
						this.burgerTLstep
					)
					.to(
						  this.$refs.uiBurgerLine1
						, this.burgerTLstep / 2
						, {
							css: {
								rotation: "45deg"
							}
						}
						, this.burgerTLstep
					)
					.to(
						  this.$refs.uiBurgerLine3
						, this.burgerTLstep / 2
						, {
							css: {
								rotation: "-45deg"
							}
						}
						, this.burgerTLstep
					)
				;
			},
			burgerClick($event){
				this.menuactive = !this.menuactive;
				this.burgerBGCtime = this.burgerTLstep;
				this.burgerTLpaused = false;
				this.burgerTL.play();
			},
			burgerBlur($event){
				this.burgerBGCtime = 0;
				this.cssOpasity2 = 1;
				this.burgerTL.reverse(0);
				this.burgerTLpaused = false;
			}
		}

	}
</script>

<style scoped lang="sass">
@font-face
	font-family: 'Kosugi-Regular'
	src: url('~@/fonts/Kosugi-Regular.ttf')
#app
	font-family: 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
	width: 100vw
	height: 100vh
	padding: 0
	margin: 0
	position: absolute
	top: 0
	left: 0 
.nav
	position: fixed
	top: 0
	width: 100vw
	height: 100vh
	.navoverlay
		position: absolute
		top: 0
		width: 100vw
		height: 100vh
		background-color: #131313 
		opacity: .9 
	ul
		width: 100vw
		position: absolute 
		top: 50%
		transform: translateY(-50%)
		padding: 0 !important
	li 
		text-decoration: none !important
		font-family: 'LexendDeca-Regular' !important
		color: transparent !important
		font-size: 35px !important
		-webkit-text-stroke: 1px #fff !important
		transition: all .3s !important
		&:hover
			color: #fff
			-webkit-text-stroke: 0px #fff
a:-webkit-any-link 
	color: white !important
	cursor: pointer
	text-decoration: none !important
	text-decoration: none !important
	font-family: 'Kosugi-Regular' !important
	color: transparent !important
	font-size: 35px !important
	-webkit-text-stroke: 1px #fff !important
	transition: all .3s !important
#ui-burger-main
	position: absolute
	z-index: 11
	cursor: pointer
	padding: 1px 6px
	align-items: flex-start
	text-align: center
	cursor: default
	color: buttontext
	background-color: transparent
	box-sizing: border-box
	padding: 0px
	border: none
	border-style: none
	border-color: none
	border-image: none
	&:focus
		outline: none
	@media screen and (max-width: 1920px)
		width: 44px
		height: 44px
		bottom: 20px
		left: 50%
		transform: translateX(-50%)
.ui-burger-line
	background-color: #fff
	transition: background 183ms
	position: absolute
	width: 44px
	height: 2px
#ui-burger-line-1
	top: 10px
#ui-burger-line-2
	top: 21px
#ui-burger-line-3
	bottom: 10px
#nav
	position: fixed
	top: 0
	left: 0
	height: 100vh
	width: 100vw
	background-color: #131313 
</style>

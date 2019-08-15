<template>
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
</template>

<script>
	import {mapActions} from 'vuex'
	import {TweenLite, TimelineMax} from 'gsap'
	export default {

		name: 'burger',
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
				burgerBGCtime: 0
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

<style lang="sass">
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
</style>
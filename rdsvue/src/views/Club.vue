<template>
	<div id="app-club">
		<div class="clubmain">
			<div class="club1">
				<div class="club1img"></div>
				<div class="club1name">JDM 62</div>
			</div>
			<div class="club2">
				<div class="club2text">сбор членов клуба</div>
			</div>
			<div class="club3">
				<div class="club3span1">700м от вас</div>
				<div class="club3span2"><router-link to="/map">показать на карте</router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'club',
		data () {
			return {
			};
		},
		methods: {
		},
		mounted() {
		}
	}
</script>
<style lang="sass">
#app-club
	position: fixed
	top: 0
	left: 0
	width: 100%
	height: 100vh
	background-color: #131313 
	// background-image: url(../assets/club.jpg) 
	// background-position: right 67% bottom 45%
	// background-size: cover
.clubmain
	padding: 49px
.club1
	height: 40px
	width: 100%
	&:after
		content: ""
		width: 100%
		height: 1px
		/* color: white; */
		background-color: white
		display: block
		position: relative
		top: 118%
.club1img
	background-image: url(../assets/soclogo1.jpg) 
	background-size: cover
	display: inline-block
	height: 40px
	width: 40px
	float: left
.club1name
	display: inline-block
	height: 40px
	float: right
	color: white
	font-size: 40px 
	line-height: 40px
.club2
	margin-top: 10px
	color: white
	font-size: 30px 
.club2text
.club3
	height: 40px
	width: 100%
.club3span1
	display: inline-block
	height: 40px
	width: 100px
	float: left
	line-height: 40px
	color: gray
.club3span2
	display: inline-block
	height: calc(100% - 100px)
	float: right
	color: white
	line-height: 40px
	a
		text-decoration: none
		color: white 
</style>
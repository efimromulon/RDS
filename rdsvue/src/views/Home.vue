<template>
	<div class="home">
		<div class="bg">
		</div>
		<div class="overlay"></div>
		<div class="btn-accname">DENEVO</div>
	</div>
</template>

<script>

export default {
	name: 'home'
}
</script>
<style lang="sass">
	.home
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100%
	.bg
		position: absolute
		top: 0
		left: 0
		width: 100vw
		height: 100vh
		//background-color: #242424 
		background-image: url(../assets/i1.jpg) 
		background-position: right 67% bottom 45%
		background-size: cover
	.overlay 
		position: absolute
		top: 0
		left: 0
		width: 100vw
		height: 100vh
		background-color: #242424 
		opacity: .79
	.btn-accname
		position: absolute
		top: 13px
		right: 13px
		color: #fff
		font-family: 'LexendDeca-Regular'
		opacity: .7 

</style>

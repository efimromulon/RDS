<template>
	<div id="app-soc">
		<h1>СООБЩЕСТВА</h1>
		<ul>
			<li>
				<div class="imgsoc"></div>
				<div class="textsoc">JDM 62</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'soc',
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
	#app-soc
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100vh
		background-color: #131313
		h1
			font-size: 20px
			color: white 
		ul
			list-style: none
			padding: 0 13px 
			li
				display: block
				width: 100%
				background-color: #161616 
				margin-bottom: 5px 
				height: 65px
				.imgsoc
					display: inline-block
					background-image: url(../assets/soclogo1.jpg) 
					background-size: cover
					width: 65px
					height: 65px
					float: left
				.textsoc
					display: right
					height: 65px
					font-size: 20px
					vertical-align: middle
					line-height: 65px  
					color: white
					
				
</style>
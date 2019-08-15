<template>
	<div id="app-events">
		<div class="eventsbg"></div>
		<div class="eventsoverlay"></div>
	</div>
</template>

<script>
	export default {
		name: 'events',
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
	#app-events
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100vh
	.eventsbg
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100vh
		background-image: url(../assets/events.jpg) 
		background-position: right 52% bottom 45%
		background-size: cover
	.eventsoverlay
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100vh
		background-color: #131313
		opacity: .7 
</style>
<template>
	<div id="app-map">
		<l-map
			ref="map"
			:zoom="zoom"
			:center="center"
			@update:zoom="zoomUpdated"
			@update:center="centerUpdated"
			@update:bounds="boundsUpdated"
		>
			<l-tile-layer :url="url"></l-tile-layer>
		</l-map>
	</div>
</template>

<script>
	import leafletProviders from '@/libs/leaflet-providers.js'
	import L from 'leaflet'
	export default {
		name: 'map',
		data () {
			return {
				//url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				url: '',
				zoom: 3,
				center: [47.413220, -1.219482],
				bounds: null
			};
		},
		methods: {
			zoomUpdated (zoom) {
				this.zoom = zoom;
			},
			centerUpdated (center) {
				this.center = center;
			},
			boundsUpdated (bounds) {
				this.bounds = bounds;
			}
		},
		mounted() {
			var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				subdomains: 'abcd',
				maxZoom: 19
			});
			let map = this.$refs.map.mapObject;
			L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				subdomains: 'abcd',
				maxZoom: 19
			}).addTo(map);

		}
	}
</script>

<style lang="sass">
#app-map
	width: 100vw
	height: 100vh
	position: absolute 
	top: 0
	left: 0
.leaflet-control-attribution.leaflet-control
	display: none !important 
.leaflet-control-zoom.leaflet-bar.leaflet-control
	display: none !important 
</style>
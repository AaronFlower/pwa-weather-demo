<template>
	<div id="app-container">
		<t-header @on-refresh="onRefresh" @on-add-city="onAddCity"></t-header>
		<div class="main">
			<template v-for="weatherInfo in weatherList">
				<card :weather-info="weatherInfo"></card>
			</template>
		</div>
		<add-dialog 
			:show="show"
			@on-confirm="onConfirm"
			@on-cancel="onCancel"
		></add-dialog>
	</div>
</template>

<script>
	import THeader from 'components/header'
	import Card from 'components/card'
	import AddDialog from 'components/AddDialog'
	import {getCityForcast} from 'api'
	import findIndex from 'lodash/findIndex'

	export default {
		components: {
			THeader,
			Card,
			AddDialog
		},
		data () {
			return {
				show: false,
				weatherList: [],
				initialCity: ['2151849'],
				selectedCities: []
			}
		},
		methods: {
			onAddCity () {
				this.show = true
			},
			onRefresh () {
				console.log('on-refresh')
			},
			onConfirm (woeid) {
				if (findIndex(this.weatherList, {woeid: woeid}) === -1) {
					getCityForcast(woeid, this.updateForcastData.bind(this))
					this.selectedCities.push(woeid)
					localStorage.selectedCities = JSON.stringify(this.selectedCities)
				}
				this.show = false
			},
			onCancel () {
				this.show = false
			},
			updateForcastData (results) {
				let index = findIndex(this.weatherList, {woeid: results.woeid})
				if (index !== -1) {
					this.weatherList.splice(index, 1, results)
				} else {
					this.weatherList.push(results)
				}
			}
		},
		created () {
			this.selectedCities = localStorage && localStorage.selectedCities && JSON.parse(localStorage.selectedCities) || this.initialCity
			this.selectedCities.forEach(woeid => {
				getCityForcast(woeid, this.updateForcastData.bind(this))
			})
			localStorage.selectedCities = JSON.stringify(this.selectedCities)
		}
	}
</script>

<style>
@import url(./assets/styles/base.css);

.main {
	padding-top: 60px;
	flex: 1;
	overflow-x: hidden;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
}
</style>
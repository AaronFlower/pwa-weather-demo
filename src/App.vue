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
		<loading v-show="isLoading"></loading>
	</div>
</template>

<script>
	import THeader from 'components/header'
	import Card from 'components/card'
	import AddDialog from 'components/AddDialog'
	import Loading from 'components/loading'
	import {getCityForcast} from 'api'
	import findIndex from 'lodash/findIndex'

	export default {
		components: {
			THeader,
			Card,
			AddDialog,
			Loading
		},
		data () {
			return {
				show: false,
				weatherList: [],
				initialCity: ['2151849'],
				selectedCities: [],
				isLoading: false
			}
		},
		methods: {
			onAddCity () {
				this.show = true
			},
			onRefresh () {
				this.isLoading = true
				this.selectedCities.forEach(woeid => {
					getCityForcast(woeid, this.updateForcastData.bind(this))
				})
				setTimeout(function () {
					this.isLoading = false
				}.bind(this), 1000)
			},
			onConfirm (woeid) {
				if (findIndex(this.weatherList, {woeid: woeid}) === -1) {
					this.isLoading = true
					getCityForcast(woeid, this.updateForcastData.bind(this))
					this.selectedCities.push(woeid)
					localStorage.selectedCities = JSON.stringify(this.selectedCities)
					setTimeout(function () {
						this.isLoading = false
					}.bind(this), 1000)
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
			this.onRefresh()
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
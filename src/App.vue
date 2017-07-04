<template>
	<div>
		<t-header @on-refresh="onRefresh" @on-add-city="onAddCity"></t-header>
		<div class="main">
			<card></card>
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

	export default {
		components: {
			THeader,
			Card,
			AddDialog
		},
		data () {
			return {
				show: false
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
				this.show = false
				console.log('on-confirm', woeid)
			},
			onCancel () {
				console.log('on-cancel')
				this.show = false
			}
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
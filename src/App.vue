<template>
	<div>
		<t-header></t-header>
		<div class="main">
			<card></card>
		</div>
	</div>
</template>

<script>
	import THeader from 'components/header'
	import Card from 'components/card'

	export default {
		components: {
			THeader,
			Card
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
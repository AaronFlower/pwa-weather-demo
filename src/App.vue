<template>
	<div>
		<t-header></t-header>
		<card></card>
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
</style>
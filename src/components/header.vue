<template>
	<header>
		<h1 class="header__title">墨迹天气</h1>
		<button id="btn-refresh" class="header-button" aria-label="刷新" @click="onRefresh"></button>
		<button id="btn-add" class="header-button" aria-label="添加" @click="onAddCity"></button>
	</header>
</template>

<script>
	export default {
		methods: {
			onRefresh () {
				this.$emit('on-refresh')
			},
			onAddCity () {
				this.$emit('on-add-city')
			}
		}
	}
</script>

<style>
	header {
		width: 100%;
		height: 56px;
		color: #FFF;
		background: #3F51B5;
		position: fixed;
		font-size: 20px;
		box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
		padding: 16px 16px 0 16px;
		will-change: transform;
		display: flex;
	  flex-direction: row;
	  flex-wrap: nowrap;
	  justify-content: flex-start;
	  align-items: stretch;
	  align-content: center;
		transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
		z-index: 1000; 
	}
	.header__title {
	  font-weight: 400;
	  font-size: 20px;
	  margin: 0;
    flex: 1; 
	}
	.header-button {
		width: 24px;
    height: 24px;
    margin-right: 16px;
    text-indent: -30000px;
    overflow: hidden;
    opacity: 0.54;
    transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);
    border: none;
    outline: none;
    cursor: pointer;
	}
	#btn-refresh {
		background: url(/images/ic_refresh_white_24px.svg)
	}
	#btn-add {
		background: url(/images/ic_add_white_24px.svg)
	}
</style>
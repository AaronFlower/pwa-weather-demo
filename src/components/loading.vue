<template>
	<div id="app-loading-layer">
		<i class="loading"></i>
	</div>
</template>

<style>
	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	#app-loading-layer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.57);
		z-index: 2000;
	}
	.loading {
		display: inline-block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 30px;
		height: 30px;
		border: 2px solid #6436B6;
		border-bottom-color: transparent;
		border-radius: 50%;
		animation: rotating 1s linear infinite;
		transition: border-color 300s;
	}
</style>
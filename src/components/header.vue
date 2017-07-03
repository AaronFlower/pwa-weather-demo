<template>
	<header>
		<h1>墨迹天气</h1>
		<button id="btn-refresh" class="header-button" aria-label="刷新"></button>
		<button id="btn-add" class="header-button" aria-label="添加"></button>
	</header>
</template>

<style>
	header {
		background: #3F51B5;
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
</style>
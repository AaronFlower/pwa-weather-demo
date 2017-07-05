import Vue from 'vue'
import App from './App.vue'

new Vue({
	el: '#app',
	render: h => h(App)
})

/**
 * Register The service-worker
 */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./service-worker.js').then(() => {
	  console.log('service-woker registered')
	})
}
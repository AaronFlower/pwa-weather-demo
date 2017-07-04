<template>
	<div :class="classes"></div>
</template>

<script>
	const classPrefix = 'weather-forecast-icon'
	export default {
		props: {
			isCurrent: {
				type: Boolean,
				default: false
			},
			iconName: String
		},
		computed: {
			classes () {
				return [
					classPrefix,
					this.iconName,
					{
						'current': this.isCurrent
					}
				]
			}
		}
	}
</script>
<style>
.weather-forecast-icon {
	display: block;
	background-repeat: no-repeat;
	background-size: contain;
	height: 64px;
	width: 64px;

	&.current {
		height: 128px;
		width: 128px;
	}

	&.clear-day {
	  background-image: url("/images/clear.png"); 
	}
	
	&.clear-night {
	  background-image: url("/images/clear.png"); 
	}
	
	&.rain {
	  background-image: url("/images/rain.png"); 
	}
	
	&.snow {
	  background-image: url("/images/snow.png"); 
	}
	
	&.sleet {
	  background-image: url("/images/sleet.png"); 
	}
	
	&.windy {
	  background-image: url("/images/wind.png"); 
	}
	
	&.fog {
	  background-image: url("/images/fog.png"); 
	}
	
	&.cloudy {
	  background-image: url("/images/cloudy.png"); 
	}
	
	&.partly-cloudy-day {
	  background-image: url("/images/partly-cloudy.png"); 
	}
	
	&.partly-cloudy-night {
	  background-image: url("/images/partly-cloudy.png"); 
	}
	
	&.thunderstorms {
	  background-image: url("/images/thunderstorm.png"); 
	}
}
@media (max-width: 450px) {
  .weather-forecast-icon {
  	height: 32px;
  	width: 32px;
  }
  .weather-forecast-icon.current {
    width: 96px;
    height: 96px; 
	}
}

</style>
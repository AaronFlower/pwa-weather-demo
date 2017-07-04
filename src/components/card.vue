<template>
	<div class="weather-forcast-weather">
		<div class="location">{{weatherInfo.label}}</div>
		<div class="date">{{weatherInfo.channel.item.condition.date}}</div>
		<div class="desc">{{weatherInfo.channel.item.condition.text}}</div>
		<div class="current">
			<div class="visual">
				<icon class="icon"
					:is-current="true" 
					:icon-name="getIconClass(weatherInfo.channel.item.condition.code)"
				></icon>
				<div class="temperature">
					<span class="value">{{convertToCelsius(weatherInfo.channel.item.forecast[0].high)}}</span>
					<span class="scale">°C</span>
				</div>
			</div>
			<div class="desc">
				<div class="item-desc humidity">{{weatherInfo.channel.atmosphere.humidity}}%</div>
				<div class="item-desc wind">{{weatherInfo.channel.wind.speed}} mph</div>
				<div class="item-desc sunrise">{{weatherInfo.channel.astronomy.sunrise}}</div>
				<div class="item-desc sunset">{{weatherInfo.channel.astronomy.sunset}}</div>
			</div>
		</div>
		<div class="future">
			<template v-for="(item, index) in weatherInfo.channel.item.forecast">
				<div class="oneday">
					<div class="date">{{getDate(index)}}</div>
					<icon :icon-name="getIconClass(item.code)"></icon>
					<div class="temperature high">
						<span class="value">{{convertToCelsius(item.high)}}</span>
					</div>
					<div class="temperature low">
						<span class="value">{{convertToCelsius(item.low)}}</span>
					</div>
				</div>
			</template >
		</div>
	</div>
</template>

<script>
import Icon from './Icon'

export default {
	components: {
		Icon
	},
	props: {
		weatherInfo: {
			type: Object,
			default () {
				return {
					key: '2459115',
					label: 'New York, NY',
					created: '2016-07-22T01:00:00Z',
					channel: {
					  astronomy: {
					    sunrise: "5:43 am",
					    sunset: "8:21 pm"
					  },
					  item: {
					    condition: {
					      text: "Windy",
					      date: new Date().toUTCString(),
					      temp: 56,
					      code: 44
					    },
					    forecast: [
					      {code: 44, high: 86, low: 70},
					      {code: 44, high: 94, low: 73},
					      {code: 4, high: 95, low: 78},
					      {code: 24, high: 75, low: 89},
					      {code: 24, high: 89, low: 77},
					      {code: 44, high: 92, low: 79},
					      {code: 44, high: 89, low: 77}
					    ]
					  },
					  atmosphere: {
					    humidity: 56
					  },
					  wind: {
					    speed: 25,
					    direction: 195
					  }
					}
				}
			}
		}
	},
	data () {
		return {

		}
	},
	methods: {
		convertToCelsius (f) {
			return Number.parseInt((f - 32) * 5 / 9)
		},
		getIconClass (weatherCode) {
			// Weather codes: https://developer.yahoo.com/weather/documentation.html#codes
			weatherCode = parseInt(weatherCode);
			switch (weatherCode) {
			  case 25: // cold
			  case 32: // sunny
			  case 33: // fair (night)
			  case 34: // fair (day)
			  case 36: // hot
			  case 3200: // not available
			    return 'clear-day';
			  case 0: // tornado
			  case 1: // tropical storm
			  case 2: // hurricane
			  case 6: // mixed rain and sleet
			  case 8: // freezing drizzle
			  case 9: // drizzle
			  case 10: // freezing rain
			  case 11: // showers
			  case 12: // showers
			  case 17: // hail
			  case 35: // mixed rain and hail
			  case 40: // scattered showers
			    return 'rain';
			  case 3: // severe thunderstorms
			  case 4: // thunderstorms
			  case 37: // isolated thunderstorms
			  case 38: // scattered thunderstorms
			  case 39: // scattered thunderstorms (not a typo)
			  case 45: // thundershowers
			  case 47: // isolated thundershowers
			    return 'thunderstorms';
			  case 5: // mixed rain and snow
			  case 7: // mixed snow and sleet
			  case 13: // snow flurries
			  case 14: // light snow showers
			  case 16: // snow
			  case 18: // sleet
			  case 41: // heavy snow
			  case 42: // scattered snow showers
			  case 43: // heavy snow
			  case 46: // snow showers
			    return 'snow';
			  case 15: // blowing snow
			  case 19: // dust
			  case 20: // foggy
			  case 21: // haze
			  case 22: // smoky
			    return 'fog';
			  case 24: // windy
			  case 23: // blustery
			    return 'windy';
			  case 26: // cloudy
			  case 27: // mostly cloudy (night)
			  case 28: // mostly cloudy (day)
			  case 31: // clear (night)
			    return 'cloudy';
			  case 29: // partly cloudy (night)
			  case 30: // partly cloudy (day)
			  case 44: // partly cloudy
			    return 'partly-cloudy-day';
			}
		},
		getDate (index) {
			let daysMap = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			let startIndex = new Date(this.weatherInfo.channel.item.condition.date).getDay()
			return daysMap[(startIndex + index) % 7]
		}
	}
}
</script>

<style>
.weather-forcast-weather {
	margin: 16px;
	background: #fff;
	padding: 16px;
	border-radius: 2px;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);


	& .current {
		display: flex;
		& .visual {
			flex-grow: 1;
			display: flex;
			font-size: 4em;
			& .scale {
				font-size: 0.5em;
				vertical-align: super;
			}
		}
		& .desc {
			flex-grow: 1;
			font-size: 1.25em;
		}
		& .item-desc:before {
			color: #888;
		}	
		& .humidity:before {
			content: "Humidity: ";
		}
		& .wind:before {
			content: "Wind: ";
		}
		& .sunrise:before {
			content: "Sunrise: ";
		}
		& .sunset:before {
			content: "Sunset: ";
		}
	}

	& > .location {
		font-size: 1.75em;
	}
	& > .date, 
	& > .desc {
		font-size: 1.25em;
	}

	& .future {
		display: flex;
	}
	& .oneday {
		flex-grow: 1;
		text-align: center;
	}
	& .oneday .weather-forecast-icon {
		margin: auto;
	}
	& .temperature {
		display: inline-block;
	}
	& .temperature .value:after {
		content: "°";
	}
	& .temperature.low {
		color: #888;
	}
}

@media (max-width: 450px) {
	.weather-forcast-weather {
		& .current .visual {
			font-size: 3em;
		}
		& .current .desc {
			font-size: 0.9em;
		}
	}
}
</style>
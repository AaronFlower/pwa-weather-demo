<template>
	<div class="weather-forcast-weather">
		<div class="location">{{weatherInfo.channel.location.city}}</div>
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
				<template v-if="index < 7">
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
				</template>
			</template>
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
					"channel": {
					  "units": {
					    "distance": "mi",
					    "pressure": "in",
					    "speed": "mph",
					    "temperature": "F"
					  },
					  "title": "Yahoo! Weather - Shanghai, Shanghai, CN",
					  "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151849/",
					  "description": "Yahoo! Weather for Shanghai, Shanghai, CN",
					  "language": "en-us",
					  "lastBuildDate": "Wed, 05 Jul 2017 10:42 AM CST",
					  "ttl": "60",
					  "location": {
					    "city": "Shanghai",
					    "country": "China",
					    "region": " Shanghai"
					  },
					  "wind": {
					    "chill": "91",
					    "direction": "245",
					    "speed": "4"
					  },
					  "atmosphere": {
					    "humidity": "61",
					    "pressure": "1009.0",
					    "rising": "0",
					    "visibility": "16.1"
					  },
					  "astronomy": {
					    "sunrise": "4:55 am",
					    "sunset": "7:2 pm"
					  },
					  "image": {
					    "title": "Yahoo! Weather",
					    "width": "142",
					    "height": "18",
					    "link": "http://weather.yahoo.com",
					    "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
					  },
					  "item": {
					    "title": "Conditions for Shanghai, Shanghai, CN at 10:00 AM CST",
					    "lat": "31.247709",
					    "long": "121.472618",
					    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151849/",
					    "pubDate": "Wed, 05 Jul 2017 10:00 AM CST",
					    "condition": {
					      "code": "4",
					      "date": "Wed, 05 Jul 2017 10:00 AM CST",
					      "temp": "92",
					      "text": "Thunderstorms"
					    },
					    "forecast": [
					      {
					        "code": "4",
					        "date": "05 Jul 2017",
					        "day": "Wed",
					        "high": "91",
					        "low": "80",
					        "text": "Thunderstorms"
					      },
					      {
					        "code": "4",
					        "date": "06 Jul 2017",
					        "day": "Thu",
					        "high": "90",
					        "low": "81",
					        "text": "Thunderstorms"
					      },
					      {
					        "code": "4",
					        "date": "07 Jul 2017",
					        "day": "Fri",
					        "high": "92",
					        "low": "80",
					        "text": "Thunderstorms"
					      },
					      {
					        "code": "4",
					        "date": "08 Jul 2017",
					        "day": "Sat",
					        "high": "91",
					        "low": "82",
					        "text": "Thunderstorms"
					      },
					      {
					        "code": "26",
					        "date": "09 Jul 2017",
					        "day": "Sun",
					        "high": "90",
					        "low": "81",
					        "text": "Cloudy"
					      },
					      {
					        "code": "4",
					        "date": "10 Jul 2017",
					        "day": "Mon",
					        "high": "89",
					        "low": "81",
					        "text": "Thunderstorms"
					      },
					      {
					        "code": "4",
					        "date": "11 Jul 2017",
					        "day": "Tue",
					        "high": "89",
					        "low": "81",
					        "text": "Thunderstorms"
					      },
					      {
					        "code": "4",
					        "date": "12 Jul 2017",
					        "day": "Wed",
					        "high": "89",
					        "low": "80",
					        "text": "Thunderstorms"
					      },
					      {
					        "code": "30",
					        "date": "13 Jul 2017",
					        "day": "Thu",
					        "high": "88",
					        "low": "80",
					        "text": "Partly Cloudy"
					      },
					      {
					        "code": "4",
					        "date": "14 Jul 2017",
					        "day": "Fri",
					        "high": "88",
					        "low": "81",
					        "text": "Thunderstorms"
					      }
					    ],
					    "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/4.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Thunderstorms\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Wed - Thunderstorms. High: 91Low: 80\n<BR /> Thu - Thunderstorms. High: 90Low: 81\n<BR /> Fri - Thunderstorms. High: 92Low: 80\n<BR /> Sat - Thunderstorms. High: 91Low: 82\n<BR /> Sun - Cloudy. High: 90Low: 81\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2151849/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
					    "guid": {
					      "isPermaLink": "false"
					    }
					  }
					},
					"woeid": "2151849",
					"created": "2017-07-05T02:42:53Z"
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
const initialData = {
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
const baseUrl = 'https://query.yahooapis.com/v1/public/yql?format=json&q='
const statement = 'select * from weather.forecast where woeid='

export function getCityForcast (woeid, updateForcastData) {
  let url = `${baseUrl}${statement}${woeid}`
  let isHitCache = false
 	if ('caches' in window) {
 		caches.match(url).then((response) => {
 		  if (response) {
 		  	response.json().then((json) => {
 		  		isHitCache = true
 		  		let results = json.query.results
 		  		results.created = json.query.created
 		  		results.woeid = woeid
 		  	  updateForcastData(results)
 		  	})
 		  }
 		})
 	}

 	let request = new XMLHttpRequest();
 	request.onreadystatechange = function() {
 	  if (request.readyState === XMLHttpRequest.DONE) {
 	    if (request.status === 200) {
 	      let response = JSON.parse(request.response);
 	      let results = response.query.results;
 	      results.woeid = woeid;
 	      results.created = response.query.created;
 	      updateForcastData(results)
 	    } else {
 	    	!!!isHitCache && updateForcastData(initialData)
 	    }
 	  }
 	};
 	request.open('GET', url);
 	request.send();
}
const baseUrl = 'https://query.yahooapis.com/v1/public/yql?format=json&q='
const statement = 'select * from weather.forecast where woeid='

export function getCityForcast (woeid) {
	console.log('woeid:', 'woeid')
  let url = `${baseUrl}${statement}${woeid}`
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
		  if (request.readyState === XMLHttpRequest.DONE) {
		    if (request.status === 200) {
		      let response = JSON.parse(request.response);
		      let results = response.query.results;
		      results.woeid = woeid;
		      results.created = response.query.created;
		      resolve(results)
		    }
		  }
		};
		request.open('GET', url);
		request.send();
	})
}
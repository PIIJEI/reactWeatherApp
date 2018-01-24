var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f9e036e769a4916b6cea479247c5c1e5&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
      if(res.data.cod && res.data.message) {
        throw new Error('Error: City not found');
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error('Error: City not found');
    });
  }
}

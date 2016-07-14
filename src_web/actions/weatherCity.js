import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchWeatherCity(url, cityname) {
  var REQUEST_URL = 'http://apis.baidu.com/apistore/weatherservice/citylist';
  REQUEST_URL = REQUEST_URL+'?'+'cityname='+encodeURI(cityname);
  //console.log(REQUEST_URL);
  
  return dispatch => {
    return fetch(REQUEST_URL, {
      headers: {
        //'Content-type': 'application/json',
        'apikey': '1ec4165daff2447e6e09cd60822bc899'
      }
    }).then(req => req.json())
    .then(json => dispatch(receiveWeatherCity({ weatherCity: json })))
  }
}

function receiveWeatherCity(json) {
  return {
    type: constants.RECEIVE_WEATHERCITY,
    json: json,
    receivedAt: Date.now()
  }
}

module.exports = { fetchWeatherCity, receiveWeatherCity }

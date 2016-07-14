import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchWeatherItemInfo(url, cityid) {
  var REQUEST_URL = 'http://apis.baidu.com/apistore/weatherservice/recentweathers';
  REQUEST_URL = REQUEST_URL+'?'+'cityid='+cityid;
  //console.log(REQUEST_URL);

  return dispatch => {
    return fetch(REQUEST_URL, {
      headers: {
        //'Content-type': 'application/json',
        'apikey': '1ec4165daff2447e6e09cd60822bc899'
      }
    }).then(req => req.json())
    .then(json => dispatch(receiveWeatherItemInfo({ weatherItemInfo: json })))
  }
}

function receiveWeatherItemInfo(json) {
  return {
    type: constants.RECEIVE_WEATHERITEMINFO,
    json: json,
    receivedAt: Date.now()
  }
}

module.exports = { fetchWeatherItemInfo, receiveWeatherItemInfo }

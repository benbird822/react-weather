const constants = require('../constants');
const initialState = {}

function update(state = initialState, action) {

	switch (action.type) {
		case constants.RECEIVE_WEATHERCITY:
			const cityData = []
			
			/* detail data */
			//console.log(action.json);

			const data = action.json.weatherCity 
			
			if(data.errNum == 0){
				const retDataList = data.retData;
				retDataList.map(function (p, i) {
					cityData.push(
						{
							id: i,
							area_id: p['area_id'],
							area: p['name_cn'] + '('+p['name_en']+') - '
								+ (p['province_cn']!=p['district_cn'] ? p['province_cn'] + '省' : '')
								+ p['district_cn']+'市'
						}
					)
				})
			}
			
			return Object.assign({}, state, { 
				errNum: data.errNum,
				errMsg: data.errMsg,
				weatherCity: cityData
			})
		default:
			return state
  }
}

module.exports = update;

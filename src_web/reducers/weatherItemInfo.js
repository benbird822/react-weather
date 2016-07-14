const constants = require('../constants');
const initialState = {}

function update(state = initialState, action) {

	switch (action.type) {
		case constants.RECEIVE_WEATHERITEMINFO:
			const index = []
			
			/* detail data */
			// console.log(action.json);

			const retData = action.json.weatherItemInfo.retData;
			if(retData){
				const todayData = retData.today;
				
				if(todayData){
					todayData.index.map(function (p, i) {
						index.push(
							{
								id: i,
								name: p['name'],
								index: p['index'] == "" ? '无' : p['index'],
								details: p['details']
							}
						)
					})
					return Object.assign({}, state, { 
						city: retData.city,
						date: todayData.date,
						type: todayData.type,
						lowtemp: todayData.lowtemp,
						hightemp: todayData.hightemp,
						fengli: todayData.fengli,
						index: index, 
					} )
				}
			}
		default:
			return state
  }
}

module.exports = update;

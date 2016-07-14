import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchWeatherCity } from '../actions/weatherCity'

import Loader from '../components/Loader/Loader'
import { isEmpty } from '../utils'

class Search extends Component {
    constructor(props) {
        super(props)

        this.inputTimeout = null

        this.state = {
	     	text:''
	    }
    }

    handleChange(e) {
    	//console.log(this);

    	let that = this;
    	let value = e.target.value
    	
        if(this.inputTimeout){
            window.clearTimeout(this.inputTimeout);
        }
        
        that.setState({text:value})

        this.inputTimeout = setTimeout(function(){
    		that.props.dispatch(fetchWeatherCity(location.origin, value));
        }, 300);
    }

    render() {
    	const { searchData, errNum, errMsg } = this.props
		let listHtml = null

		if( isEmpty(searchData) ){
			if(errMsg){
		    	listHtml = (
		    		<li><p>{errMsg}</p></li>
		    	)
	    	}
    	}else{
    		listHtml = (
		        searchData.map(function (p) {
		          let id = "/city/"+p.area_id;
		          return (
		            <li key={p.id}>
		                <p><Link to={id}>{p.area}</Link></p>
		            </li>
		          )
		        })
		    )
    	}

		return (
			<div>
				< input type="text"
				placeholder="search..."
				value={this.state.text}
            	onChange={ this.handleChange.bind(this) } />
            	<ul>{ listHtml }</ul>
			</div>
		)
    }
}

function mapStateToProps(state) {
  //console.log(state)

  return { 
  	errNum: state.weatherCity.errNum,
	errMsg: state.weatherCity.errMsg,
  	searchData: state.weatherCity.weatherCity
  }
}

export default connect(mapStateToProps)(Search)
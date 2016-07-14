import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWeatherItemInfo } from '../actions/weatherItemInfo'
import styles from '../styles/base.css'//???
import Loader from '../components/Loader/Loader'
import { isEmpty } from '../utils'

class WeatherItemInfo extends Component {

  // static fetchData({ params, store, url }) {
  //   return store.dispatch(fetchWeatherItemInfo(url), params.cityid)
  // }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.setState({
      loading: true
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      loading: !isEmpty(nextProps.params.weatherItemInfo)
    })
  }

  componentDidMount () {
    //from routes
    let cityid = this.props.params.cityid 
    if(typeof(cityid) == 'undefined'){
      cityid = '101010100'
    }
    this.props.dispatch(fetchWeatherItemInfo(location.origin, cityid))
  }

  render () {
    // console.log(this.props.weatherItemInfo);

    const { weatherItemInfo } = this.props
    let loader = <Loader />
   
    if(this.state.loading){
      return (
        <div className={styles.home}>
          { loader }
        </div>
      )
    }else{
      loader = null
      let indexHtml = null
      indexHtml = (
        weatherItemInfo.index.map(function(p){
          var indexData = p['index'] == "" ? '无' : p['index'];
          return (
            <li key={p.id}>
                {p.name}：{indexData}「{p.details}」
            </li>
          )
        })
      )

      return (
        <div className={styles.item}>
          { loader }
          <div className={styles.list}>
            <h2>{weatherItemInfo.city}</h2>
            <h3>{weatherItemInfo.date}</h3>
            <p>{weatherItemInfo.type}</p>
            <p>{weatherItemInfo.lowtemp}~{weatherItemInfo.hightemp}</p>
            <p>{weatherItemInfo.fengli}</p>
            <ul>{indexHtml}</ul>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  // console.log(state.weatherItemInfo)
  return { 
    weatherItemInfo: state.weatherItemInfo
  }
}

export default connect(mapStateToProps)(WeatherItemInfo)

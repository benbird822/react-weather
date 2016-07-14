import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
      return (
        <p>
    			<Link to="/city/101010100">北京</Link> | 
    			<Link to="/city/101020100">上海</Link> | 
    			<Link to="/city/101280101">广州</Link> | 
    			<Link to="/city/101280601">深圳</Link> | 
    			<Link to="/city/101270101">成都</Link> | 
    			<Link to="/city/101040100">重庆</Link> | 
    			<Link to="/city/101180101">郑州</Link>
        </p>
      )
  }
}

export default Home
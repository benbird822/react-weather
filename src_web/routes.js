import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from './containers/App'
import WeatherItemInfo from './containers/weatherItemInfo'
import Home from './containers/Home'
import NoMatch from './containers/NoMatch'
import Search from './containers/Search'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/city/:cityid" component={WeatherItemInfo}/>
    <Route path="/search" component={Search}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)

export default routes

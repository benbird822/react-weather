import React, {Component} from 'react';
import {AppRegistry, Navigator,} from 'react-native';

import Home from './src_native/home.js'
import SearchDetail from './src_native/searchDetail.js'
import Search from './src_native/search.js'
import My from './src_native/my.js'

/*
http://stackoverflow.com/questions/33196334/how-to-do-a-multi-page-app-in-react-native
*/

class Weather extends Component {
  renderScene(route, navigator) {
    if (route.navId === 'home') {
      return <Home navigator={navigator} route={route} />
    }else if (route.navId === "searchDetail") {
      return <SearchDetail navigator={navigator} route={route} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{navId: 'home', }}
        renderScene={this.renderScene} />
    );
  }
}

AppRegistry.registerComponent('weather', () => Weather);
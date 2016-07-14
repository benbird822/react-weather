import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Navigator} from 'react-native';

import SearchDetail from './searchDetail.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
});

class init extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedNav:'my'
    }
  }

  onPress(cityid){
    this.props.navigator.push({
      navId:"searchDetail",//for android
      
      title: "详情",
      component: SearchDetail,
      passProps: {cityid:cityid}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight underlayColor ='#eef0f3' onPress={this.onPress.bind(this, 101010100)}><Text>北京</Text></TouchableHighlight>
        <TouchableHighlight underlayColor ='#eef0f3' onPress={this.onPress.bind(this, 101020100)}><Text>上海</Text></TouchableHighlight>
        <TouchableHighlight underlayColor ='#eef0f3' onPress={this.onPress.bind(this, 101280101)}><Text>广州</Text></TouchableHighlight>
        <TouchableHighlight underlayColor ='#eef0f3' onPress={this.onPress.bind(this, 101280601)}><Text>深圳</Text></TouchableHighlight>
        <TouchableHighlight underlayColor ='#eef0f3' onPress={this.onPress.bind(this, 101270101)}><Text>成都</Text></TouchableHighlight>
        <TouchableHighlight underlayColor ='#eef0f3' onPress={this.onPress.bind(this, 101040100)}><Text>重庆</Text></TouchableHighlight>
        <TouchableHighlight underlayColor ='#eef0f3' onPress={this.onPress.bind(this, 101180101)}><Text>郑州</Text></TouchableHighlight>
      </View>
    );
  }
}

export default init

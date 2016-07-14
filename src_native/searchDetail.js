import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';



class init extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cityid: Platform.OS === 'ios' ? this.props.cityid : this.props.route.passProps.cityid , //for android
      responseData: null
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    var REQUEST_URL = 'http://apis.baidu.com/apistore/weatherservice/recentweathers?cityid='+this.state.cityid;

    fetch(REQUEST_URL, {
      method: 'POST',
      headers: {
        'apikey': '1ec4165daff2447e6e09cd60822bc899'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        responseData: responseData
      })
    })
    .catch((error) => {
      console.warn(error);
    })
    .done();
  }

  render() {
    // console.log(this.state.responseData);

    if(this.state.responseData){
      var retData = this.state.responseData.retData;
      var data = {};
      var index = [];
      var indexHtml = '';
      var todayData = retData.today;

      if (todayData) {
        //console.log(todayData);
        indexHtml = (
          todayData.index.map(function(p){
            var indexData = p['index'] == "" ? '无' : p['index'];
            return (
              <Text key={p.code}>
                  {p.name}：{indexData}「{p.details}」
              </Text>
            )
          })
        )

        return (
           <View style={styles.item}>
              <Text>{retData.city}</Text>
              <Text>{todayData.date}</Text>
              <Text>{todayData.type}</Text>
              <Text>{todayData.lowtemp}~{todayData.hightemp}</Text>
              <Text>{todayData.fengli}</Text>
              <View>{indexHtml}</View>
          </View>
        )
      } 
    }else{
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>
            loading...
          </Text>
        </View>
      );
    }   
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },  
  item:{

  }
});

export default init

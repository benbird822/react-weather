import React, {Component} from 'react';
import {View, Text } from 'react-native';


class init extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedNav:'category'
    }
  }

  render() {
    return (
      <View>
        <Text>this is my page</Text>
      </View>
    );
  }
}

export default init
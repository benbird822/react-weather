import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class init extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedNav:'my',
      searchString: '',
    }
  }

  onChang(event){
    this.setState({ searchString: event.nativeEvent.text }); 
  }

  render() {
    return (
      <View>
        <Text>this is search page</Text>
        <TextInput 
          style={styles.searchInput}
          varlue={this.state.searchString}
        onChange={this.onChang.bind(this)}
          placeholder='name'/>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
})

export default init
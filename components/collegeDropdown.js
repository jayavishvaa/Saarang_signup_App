import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

 
export default class CollegeDropdown extends Component {
  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
 
    return (
      <Dropdown
        label='College'
        mode="outlined"
        selectionColor="blue"        
        underlineColor="red"
        pickerStyle={{borderBottomColor:'transparent'}}
        selectedItemColor="red"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        labelFontSize={15}
        placeholderTextColor="black"
        style={{height:40,width:310,borderColor:"grey",padding:10,borderWidth:1,marginBottom:15}}
        data={data}
      />
    );
  }
}
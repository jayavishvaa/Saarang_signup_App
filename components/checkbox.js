import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export default class CheckIcon extends React.Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked: !checked }); }}
        
        style={{marginTop:20}}
      />
    );
  }
}
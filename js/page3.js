import React from 'react';
import {View, Text, Button} from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Page3</Text>
      </View>
    );
  }
}

export default LoginScreen;

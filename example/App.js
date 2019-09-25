import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
// import TestNativeModule from 'react-native-use-health-kit';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(NativeModules);
    console.log(NativeModules.TestNativeModule);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆TestNativeModule example☆</Text>
        <Text style={styles.instructions}>STATUS: loaded</Text>
        <Text style={styles.welcome}>☆☆☆</Text>
        <Text style={styles.welcome}>count : {this.state.count}</Text>
        <TouchableOpacity onPress={this.onPressIncrement}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressDecrement}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPressIncrement = () => {
    NativeModules.TestNativeModule.increment(this.state.count, callbackValue => {
      this.setState({count: callbackValue});
    });
  };

  onPressDecrement = async () => {
    try {
      const count = await NativeModules.TestNativeModule.decrement(
        this.state.count,
      );
      this.setState({count});
    } catch (error) {
      console.log(error);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

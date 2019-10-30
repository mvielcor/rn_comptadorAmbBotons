/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Comptador extends Component {
  state = { compta: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState({ compta: this.state.compta + 1 });
    }, 1000);
  }

  render() {
    const { compta } = this.state;
    const { color, size } = this.props;

    return (
      <Text style={{ color, fontSize: size }}>
        {compta}
      </Text>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Comptador color={'lightblue'} size={16} />
        <Comptador color={'skyblue'} size={32} />
        <Comptador color={'steelblue'} size={80} />
        <Comptador color={'darkblue'} size={140} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

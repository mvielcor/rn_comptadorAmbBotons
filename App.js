/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Comptador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({valor: this.state.valor + 1});
    }, 1000);
  }
  
  render() {
    return (
      <View>
        <Text style={{color: this.props.color, fontSize: this.props.tamany}}>
          {this.state.valor}
        </Text>
      </View>
    );
  }
  
  
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Comptador color={'red'} tamany={30} />
        <Comptador color={'green'} tamany={60} />
        <Comptador color={'yellow'} tamany={90} />
        <Comptador color={'darkblue'} tamany={120} />
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

export class Comptador extends Component {
  //Constructor del Component
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      intervalId: undefined,
      activat: false,
      textBoto: "STOP",
    };
  }
  engegaComptador() {
    if (!this.state.activat) {    //Si no esta activat el botó
      const id = setInterval(() => {
        this.setState({valor: this.state.valor + 1});
      }, 1000);
      this.state.intervalId = id; //No necessite que me'l repinte!!!!
      this.setState({activat: true, textBoto: 'STOP'});
    }
  }

  aturaComptador() {
    if (this.state.activat) {    //Si esta activat el botó
      clearInterval(this.state.intervalId);
      this.setState({activat: false, textBoto: 'START'});
    }
  }
  //Posem el mètode del cicle de vida dins la classe del component
  componentDidMount() {
    //this.engegaComptador();
  }

  //Altre mètode del cicle de vida del component
  render() {
    let minuts, segons;
    //minuts: La part entera de dividir la quantitat de segons que portem entre 60
    minuts = Math.trunc(this.state.valor / 60);
    //segons: És el residu de la divisió entre el numero de segons i 60
    segons = this.state.valor % 60;
    //Utilitzem la funció padStart per a afegir dos '0' als minuts i als segons
    // format mm:ss
    return (
      <View style={styles.comptador}>
        <Text style={{color: this.props.color, fontSize: this.props.tamany}}>
          {minuts.toString().padStart(2, '0')} : {segons.toString().padStart(2, '0')}
        </Text>
        <Button
          title={this.state.textBoto}
          onPress={() => (this.state.activat)?this.aturaComptador():this.engegaComptador()}
        />
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
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  comptador: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

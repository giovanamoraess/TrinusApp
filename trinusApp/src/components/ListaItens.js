import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
 
  constructor (props) {
    super(props);

    this.state = { 
        listaItens: [],
        latitude: null,
        longitude: null,
        error: null
    };
  }

  componentDidMount() {
    //Busca localização da pessoa
    const { latitude, longitude } = this.state;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        
        //Ao encontrar as cordenadas da localização, faz chamada a API de excursões
        axios.get('http://excursoes.herokuapp.com/api/excursion/search', {
          params: {
            term: "''",
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            range_km: 50
          }
        })
          .then((response) => { 
            console.log('responseeee', response)
            this.setState({ listaItens: response.data}); })
          .catch(function (error) {
             console.log(error);
          })

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    const { listaItens } = this.state;

    if (listaItens.length < 1) {
      return (
        <View>
          <Text> Carregando... </Text>
        </View>
      )
    }

    return (
     <ScrollView style={{backgroundColor: '#f3f3f3'}}> 
        <Text style={styles.textHeader}> Excursões próximas á você </Text>
       {this.state.listaItens.map(item => (<Itens key={item.id} item={item} /> ))}
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    color: '#F9BF3B',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 10
  }


});

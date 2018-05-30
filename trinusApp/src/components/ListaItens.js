import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView
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
        error: null,
    };
  }

  componentDidMount() {
    const { latitude, longitude } = this.state;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });

        //axios.get('http://excursoes.herokuapp.com/api/excursion/search?term=""&lat='+latitude+'&lng='+longitude+'&range_km=20')  
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

  componentWillMount() {
    const {latitude, longitude} = this.state; 
    // axios.get('http://excursoes.herokuapp.com/api/excursion/search?term=""&lat='+latitude+'&lng='+longitude+'&range_km=20')  
    // // axios.get('http://excursoes.herokuapp.com/api/excursion/search', {
    // //   params: {
    // //     term: "",
    // //     lat: latitude,
    // //     lng: longitude,
    // //     range_km: 20
    // //   }
    // // })
    //   .then((response) => { 
    //     console.log('responseeee', response)
    //     this.setState({ listaItens: response.data}); })
    //   .catch(function (error) {
    //      console.log(error);
    //   })  
  }   

  render() {
    return (
     <ScrollView style={{backgroundColor: '#ddd'}}> 
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
       {this.state.listaItens.map(item => (<Itens key={item.id} item={item} /> ))}
     </ScrollView>
    );
  }
}

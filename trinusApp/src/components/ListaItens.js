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

    this.state = { listaItens: [] };
  }

  componentWillMount() {
  //requisição http
    axios.get('http://excursoes.herokuapp.com/api/excursion/search?term&lat=-22.8311538&lng=-47.0518525&range_km')
      .then((response) => { this.setState({ listaItens: response.data}); })
      .catch(() => { alert('erro ao recuperar os dados'); }); 
  }   
  render() {
    return (
     <ScrollView style={{backgroundColor: '#ddd'}}> 
       {this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} /> ))}
     </ScrollView>
    );
  }
}

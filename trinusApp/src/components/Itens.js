import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
var moment = require('moment');

import ReadMore from 'react-native-read-more-text';

export default class Itens extends Component {


	
	render() {
	  console.log('propss', this.props)
	  moment.locale();
    return (
     <View style={styles.item}> 
     	<View style={styles.foto}>
		 {this.props.item.pictures.lenght > 0 ? <Image style={{height: 100, width: 100}} source={{uri: this.props.item.pictures[0].url}} /> : null }
	    </View>
	    <View style={styles.detalhesItens}> 
	     	<Text style={{fontWeight: '500'}}> {this.props.item.title} </Text>
	     	<ReadMore
			 numberOfLines={2}
			 style={styles.descricao}>
				<Text>{this.props.item.description}</Text>
			</ReadMore>
	     	<Text> Capacidade: {this.props.item.capacity} </Text>
	     	<Text> Data: {moment(this.props.item.departure_date).format('L')} </Text>
	    </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: '#f3f3f3',
		borderRadius: 10,
		marginHorizontal: 10, 
		marginVertical: 5,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 150
	},
	foto: {
		width: 102,
		height: 102
	},
	detalhesItens: {
		marginLeft:20,
		flex: 1
	},
	textoTitulo: {
		fontSize: 19,
		color: '#4ECDC4',
		marginBottom: 5
	},
	textoValor: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	textoDetalhes: {
		fontSize: 14
	},
	descricao: {
		height: 40
	}


});

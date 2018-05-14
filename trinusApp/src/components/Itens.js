import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';



export default class Itens extends Component {
  render() {
      console.log('propss', this.props)
    return (
     <View style={styles.item}> 
     	<View style={styles.foto}>
	     	<Image style={{height: 100, width: 100}} source={{uri: this.props.item.pictures[0].url}} />
	    </View>
	    <View style={styles.detalhesItens}> 
	     	<Text style={styles.textoTitulo}> {this.props.item.title} </Text>
	     	<Text style={styles.textoDetalhes}> Descrição: {this.props.item.description} </Text>
	     	<Text style={styles.textoValor}> Capacidade: {this.props.item.capacity} </Text>
	     	<Text style={styles.textoDetalhes}> Data: {this.props.item.departure_date} </Text>
	    </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10, 
		padding: 10,
		flexDirection: 'row'
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
	}


});

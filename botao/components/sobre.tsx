import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Home from './home';

export default function App(){
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if(page === 'sobre') {
            return (
                <View style={styles.container}>
                    <Text style={styles.titulo}>GeoCheck</Text>
                    <Image style={styles.imagem} source={require('../assets/images/Aviao.png')} />
                    <Text style={styles.subtitulo}>Localização Atual</Text>
                    <Text style={styles.coordenadas}>Latitude: </Text>
                    <Text style={styles.coordenadas}>Longitude: </Text>
                    
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Obter Localização</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonVoltar} onPress={() => setPage('home')}>
                  <Text style={styles.buttonVoltarTexto}>Retornar ao Início</Text>
                </TouchableOpacity>

              </View>
            );
        } else if(page === 'home'){
            return <Home />
        }
    };

    return <View style={styles.container}>{renderPage()}</View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      backgroundColor: '33513B',
    },
    imagem:{
        width: 301,
        height: 105,
        marginTop: 20,
        marginBottom: 20,
    },
    titulo: {
      fontSize: 32,
      color: '#FFF',
      marginBottom: 20,
      fontWeight: 'bold',
    },
    subtitulo: {
      fontSize: 24,
      color: '#FFF',
      marginBottom: 20,
      fontWeight: 'bold',
      marginTop: 40,
    },
    coordenadas: {
      fontSize: 18,
      color: '#FFF',
      marginBottom: 5,
      textAlign: 'justify',
    },
    button: {
      backgroundColor: '#FFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginVertical: 10,
      marginTop: 20,
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonVoltar: {
      backgroundColor: '#556B2F',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginVertical: 10,
      marginTop: 20,
    },
    buttonVoltarTexto: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
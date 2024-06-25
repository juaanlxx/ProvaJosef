import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Sobre from './sobre';

export default function App(){
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
                return (
                    <View style={styles.container}>
                      <View style={styles.imagemContainer}>
                      <Image style={styles.usuarioImagem} source={require('../assets/images/Usuario.png')} />
                      </View>
                      <Text style={styles.usuario}>Usuário</Text>
                      <Text style={styles.titulo}>GeoCheck</Text>
                      <Text style={styles.descricao}>
                        O "GeoCheck" é um aplicativo que permite aos usuários verificar facilmente sua localização atual por meio da obtenção das coordenadas de latitude e longitude do dispositivo móvel. Seja para navegação, planejamento de viagens ou simplesmente por curiosidade, o GeoCheck é uma ferramenta útil para explorar o mundo ao seu redor.
                      </Text>
                      <Image style={styles.mapaImagem} source={require('../assets/images/Mapa.png')} />
                      <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')} >
                        <Text style={styles.buttonText}>Explorar Localizações</Text>
                      </TouchableOpacity>
                    </View>
            )
        } else if(page === 'sobre'){
            return <Sobre />
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#33513B',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    imagemContainer: {
      backgroundColor: '#3b6d4d',
      borderRadius: 50,
      padding: 20,
      marginBottom: 20,
    },
    usuarioImagem: {
      width: 100,
      height: 100,
    },
    usuario: {
      color: '#fff',
      fontSize: 20,
      marginBottom: 30,
      fontWeight: 'bold',
    },
    titulo: {
      color: '#fff',
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    descricao: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'justify',
      marginBottom: 40,
      margin: 0,
    },
    mapaImagem: {
      width: 299,
      height: 141,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      marginTop: 30,
    },
    buttonText: {
      color: '#305239',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
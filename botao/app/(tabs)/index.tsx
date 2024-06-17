import { Text, View, StyleSheet } from 'react-native';

import Button from '../../components/Button'

export default function HomeScreen() {

  const Clicar = () => {
    alert("Apertei o botão")
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>OLÁ</Text>
      <Button title="Clique aqui" onPress={Clicar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#000',
    padding: 20,
  }
});

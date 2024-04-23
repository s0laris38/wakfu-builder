import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
//import jsonVersion from './db/files/version.json';

export default function App() {

  function updateDB() {
   /* const shell = require('shelljs')
    shell.echo('hi')*/
  };


  return (
    <View style={styles.container}>
      <Button onPress={() => updateDB()}>Mettre à jour</Button>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

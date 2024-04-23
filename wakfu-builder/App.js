import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import jsonVersion from './db/files/version.json';
import jsonItems from './db/files/items.json';
import jsonActions from './db/files/actions.json';
import jsonItemsProps from './db/files/itemProperties.json';
import jsonEquipItemTypes from './db/files/equipmentItemTypes.json';


export default function App() {
  const [text, setText] = useState("");

  function displayItems(x) {
    for (var item of jsonItems) {
      {
        console.log(item.title.fr)
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextInput value={text} onChangeText={text => setText(text)}></TextInput>
      <Button onPress={() => displayItems(text)}>Rechercher</Button>
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

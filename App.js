import { StatusBar } from 'expo-status-bar';
//import { useState } from 'react';
import { Button, StyleSheet, Text, View,  } from 'react-native';



const Word = () => {

  const cards = [
    { french: "désespéré", english: "forlorn" },
    { french: "boiter", english: "to limp" },
    { french: "accablant", english: "damning" },
    { french: "précurseur", english: "forerunner" },
  ];
  
  const frenchWords = cards.map(card => card.french)

  const randomWord = frenchWords[Math.floor(Math.random() * frenchWords.length)];
  
  return (
      <Text>{randomWord}</Text>
  );
};




export default function App() {
  
  return (
    <View style={styles.container}>
      <Text id="flashcards">{Word()}
        </Text>
      <Button title="Suivant" />
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

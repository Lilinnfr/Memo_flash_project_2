import { Button, StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Word = () => {

  const cards = [
    { french: "désespéré", english: "forlorn" },
    { french: "boiter", english: "to limp" },
    { french: "accablant", english: "damning" },
    { french: "précurseur", english: "forerunner" },
  ];

  const words = {
    "clôture" : "fence",
    "tas" : "heap",
    "persil" : "parsley",
  }
  
  const frenchWords = Object.keys(words);

  const randomWord = frenchWords[Math.floor(Math.random() * frenchWords.length)];
  
  return (
      <Text>{randomWord}</Text>
  );
};


const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text id="flashcards" style={styles.text} >{Word()}
        </Text>
        <Button title="Suivant" color="#FFB266" />
      </View>
    )
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      marginBottom: 40,
  },
});
  

export default HomeScreen;
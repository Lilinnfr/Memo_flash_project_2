import { Button, StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../styles';


const Word = () => {


  const words = {
    "désespéré" : "forlorn",
    "boiter" : "to limp",
    "accablant" : "damning",
    "clôture" : "fence",
    "tas" : "heap",
    "précurseur" : "forerunner",
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
      <View style={commonStyles.container}>
        <Text id="flashcards" style={commonStyles.text} >{Word()}
        </Text>
        <Button title="Suivant" color="#F79F95"  />
      </View>
    )
  };
  

export default HomeScreen;
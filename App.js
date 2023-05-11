//import { StatusBar } from 'expo-status-bar';
//import { useState } from 'react';
import { Button, StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text> Bonjour ! </Text>
    </View>
  )
}
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text> Settings </Text>
    </View>
  )
}
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text> Profile </Text>
    </View>
  )
}



// const Word = () => {

//   const cards = [
//     { french: "désespéré", english: "forlorn" },
//     { french: "boiter", english: "to limp" },
//     { french: "accablant", english: "damning" },
//     { french: "précurseur", english: "forerunner" },
//   ];

//   const words = {
//     "clôture" : "fence",
//     "tas" : "heap",
//     "persil" : "parsley",
//   }
  
//   const frenchWords = Object.keys(words);

//   const randomWord = frenchWords[Math.floor(Math.random() * frenchWords.length)];
  
//   return (
//       <Text>{randomWord}</Text>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == "Home") {
            iconName = "home-outline";
          } else if (route.name == "Settings") {
            iconName = "settings-outline";
          } else if (route.name == "Profile") {
            iconName = "person-outline";
          }
          return <Ionicons name={iconName} size={30} color="red" />
        }
      })}>
        <tab.Screen name="Home" component={HomeScreen} />
        <tab.Screen name="Settings" component={SettingsScreen} />
        <tab.Screen name="Profile" component={ProfileScreen} />
      </tab.Navigator>
    </NavigationContainer>
  )
}



// export default function App() {
  
//   return (
//     <View style={styles.container}>
//       <Text id="flashcards" style={styles.text} >{Word()}
//         </Text>
//       <Button title="Suivant" color="#FFB266" />
//       <StatusBar style="auto" />
//     </View>
//   );
// }


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
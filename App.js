
//import { useState } from 'react';
import { Button, StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile'
import SettingsScreen from './screens/Settings';

const tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == "Accueil") {
            iconName = "home-outline";
          } else if (route.name == "Paramètres") {
            iconName = "settings-outline";
          } else if (route.name == "Profil") {
            iconName = "person-outline";
          }
          return <Ionicons name={iconName} size={30} color="#F79F95" />
        }
      })}>
        <tab.Screen name="Profil" component={ProfileScreen} />
        <tab.Screen name="Accueil" component={HomeScreen} />
        <tab.Screen name="Paramètres" component={SettingsScreen} />
      </tab.Navigator>
    </NavigationContainer>
  )
}


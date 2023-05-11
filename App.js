
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


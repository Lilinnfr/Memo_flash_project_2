import { Button, StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../styles';


const SettingsScreen = () => {
    return (
      <View style={commonStyles.container}>
        <Text> Paramètres </Text>
      </View>
    )
};



export default SettingsScreen;
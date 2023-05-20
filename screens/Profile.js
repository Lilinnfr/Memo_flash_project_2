import { Button, StyleSheet, Text, TextInput, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../styles';


const ProfileScreen = () => {
    return (
      <View style={commonStyles.container}>
        <Text> Ajouter une traduction :  {"\n"}</Text>
        <TextInput style={commonStyles.input} defaultValue="Entrez le mot français" />
        <TextInput style={commonStyles.input} defaultValue="Entrez le mot anglais" />
        <Button title="Ajouter" color="#F79F95" />
      </View>
    )
};
  


export default ProfileScreen;
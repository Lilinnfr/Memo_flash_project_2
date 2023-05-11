import { Button, StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text> Settings </Text>
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


export default SettingsScreen;
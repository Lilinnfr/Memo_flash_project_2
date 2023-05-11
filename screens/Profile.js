import { Button, StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
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


export default ProfileScreen;
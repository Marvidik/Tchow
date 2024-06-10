import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/Authentication/LoginScreen';
import RegisterScreen from './Screens/Authentication/RegisterScreen';
import OTPScreen from './Screens/Authentication/OTPScreen';
import ForgottenPasswordScreen from './Screens/Authentication/ForgottenPasswordScreen';
import ChangePasswordScreen from './Screens/Authentication/ChangePasswordScreen';
import HomeScreen from './Screens/ServiceScreens/HomeScreen';
import FoodScreen from './Screens/ServiceScreens/FoodScreen';
import CartScreen from './Screens/ServiceScreens/CartScreen';
import OrderScreen from './Screens/ServiceScreens/OrderScreen';

export default function App() {


  return (
    <View style={styles.container}>
      <FoodScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

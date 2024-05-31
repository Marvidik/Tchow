import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/Authentication/LoginScreen';
import RegisterScreen from './Screens/Authentication/RegisterScreen';
import OTPScreen from './Screens/Authentication/OTPScreen';
import ForgottenPasswordScreen from './Screens/Authentication/ForgottenPasswordScreen';
import ChangePasswordScreen from './Screens/Authentication/ChangePasswordScreen';

export default function App() {

  // colors 3E09145   #FCD9B8
  // #17181D  #292C35
  return (
    <View style={styles.container}>
      <ChangePasswordScreen/>
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

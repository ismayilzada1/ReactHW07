import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from "./src/Screens/RegisterScreen/RegisterScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen"  screenOptions={{ headerShown: false }}>
          <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
          />
          <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
          />
          <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
});

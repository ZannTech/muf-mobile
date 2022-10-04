import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import { Dimensions } from 'react-native';
import ForgotScreen from '../screens/ForgotScreen';
const Stack = createNativeStackNavigator();


const MainNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        animation: 'simple_push',
        headerTitle: '',
      }}
    >
      <Stack.Screen 
        component={LoginScreen}
        name='Login'
      />
      <Stack.Screen 
        component={Signup}
        name='Signup'
      />
        <Stack.Screen 
        component={ForgotScreen}
        name='Forgot'
      />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigation
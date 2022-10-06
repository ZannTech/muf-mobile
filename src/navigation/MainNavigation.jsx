import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import { Dimensions } from 'react-native';
import ForgotScreen from '../screens/ForgotScreen';
import { AuthNavigation } from './AuthNavigation';


const Stack = createNativeStackNavigator();


const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: '#f1f1f1',
          statusBarStyle: 'dark',
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent'
          },
          cardStyle: {
            backgroundColor: 'white'
          },
          animation: 'simple_push',
          headerTitle: '',
        }}

      >
        <Stack.Screen
          component={LoginScreen}
          name='Login'
          initialParams={{
            register: false
          }}

        />
        <Stack.Screen
          component={Signup}
          name='Signup'
        />
        <Stack.Screen
          component={ForgotScreen}
          name='Forgot'
        />
        <Stack.Screen
          component={AuthNavigation}
          name='MainScreen'
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainNavigation
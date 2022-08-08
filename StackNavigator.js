import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name='Register'
          component={Register}
        />
        <Stack.Screen
          name='Login'
          component={Login}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name='Home'
          component={Home}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator
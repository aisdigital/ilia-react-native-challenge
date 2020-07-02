import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import {
  Home, Details
} from '../pages'

const Stack = createStackNavigator()

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      headerMode='none'
      initialRouteName='Home'
      gestureEnabled={false}
    >
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='Details'
        component={Details}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router

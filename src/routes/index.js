import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useLanguageController } from '../hooks'

import {
  Home, Details
} from '../pages'
import { HeaderBackIcon, HeaderRight } from '../components'

const Stack = createStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(107, 210, 119)',
    background: 'rgba(10, 28, 36, 0.2)',
    text: 'rgb(10, 28, 36)',
    placeholder: 'rgba(10, 28, 36, 0.7)'
  }
}

const HeaderStyle = {
  headerStyle: {
    backgroundColor: 'rgb(10, 28, 36)'
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white'
  },
  headerTitleAlign: 'center',
  headerBackImage: HeaderBackIcon,
  headerBackTitleVisible: false,
  headerRight: () => <HeaderRight />
}

const Router = () => {
  const { labels } = useLanguageController()

  return (
    <NavigationContainer
      theme={MyTheme}
    >
      <Stack.Navigator
        initialRouteName='Home'
        gestureEnabled={false}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            ...HeaderStyle,
            title: labels.home
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            ...HeaderStyle,
            title: labels.details
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

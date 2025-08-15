import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Inicial from './src/pages/Inicial'
import Login from './src/pages/Login'

const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicial'
      screenOptions={{headerTitle: '', headerLeft: () => null, headerStyle: { backgroundColor: '#00000042', height: 30 }}}>
        <Stack.Screen name='Inicial' component={Inicial} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
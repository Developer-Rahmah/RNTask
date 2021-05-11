import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from 'RNTask/src/screens/products/ProductsScreen'
import CreateNewProductScreen from 'RNTask/src/screens/newProduct/CreateNewProductScreen'

const AppNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='ProductsScreen' component={ProductsScreen} />

      <Stack.Screen
        name='CreateNewProductScreen'
        component={CreateNewProductScreen}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator

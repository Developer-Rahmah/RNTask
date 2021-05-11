import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from 'RNTask/src/navigations/AppNavigator'
import StatusBar from 'RNTask/src/layout/statusBar/index'
import { ItemProvider } from './src/context/ItemContext'
import { AlertProvider } from './src/context/AlertContext'

const App = () => {
  return (
    <ItemProvider>
      <AlertProvider>
        <NavigationContainer>
          <StatusBar />
          <AppNavigator />
        </NavigationContainer>
      </AlertProvider>
    </ItemProvider>
  )
}

export default App

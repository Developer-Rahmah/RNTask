import styles from 'RNTask/assets/styles'
import Colors from 'RNTask/assets/styles/Colors'
import React from 'react'
import { Platform, StatusBar as ReactStatusBar, View } from 'react-native'

const index = ({}) => (
  <View>
    {Platform.OS == 'android' ? (
      <ReactStatusBar backgroundColor={Colors.LIGHT_BLUE} />
    ) : (
      <View
        style={[
          styles.Layout.fullWidth,
          styles.Layout.statusBarHight,
          styles.General.blueBackground
        ]}
      />
    )}
  </View>
)

export default index

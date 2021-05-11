import React from 'react'
import Summary from 'RNTask/src/elements/Summary'
import Colors from 'RNTask/assets/styles/Colors'
import { View } from 'react-native'
import styles from 'RNTask/assets/styles'

export default function ErrorMsg ({ errorMsg }: { errorMsg: string }) {
  return (
    <View
      style={[
        styles.Layout.largeHorizontalMargin,
        styles.Layout.smallMarginMinus
      ]}
    >
      <Summary description={errorMsg} color={Colors.RED} />
    </View>
  )
}

import React from 'react'
import { Text } from 'react-native'
import Styles from 'RNTask/assets/styles'
import Colors from 'RNTask/assets/styles/Colors'
export default function Summary ({
  description,
  color = Colors.BLACK,
  numberOfLines = 3,
  onPress,
  style = {},
  textDecorationLine
}: {
  description?: string
  color?: string
  numberOfLines?: number
  onPress?: () => void
  textDecorationLine?: string
  style?: object
}) {
  return (
    <Text
      onPress={() => (onPress != undefined ? onPress() : null)}
      style={[
        Styles.Elements.summary,
        {
          color: color,
          textDecorationLine: textDecorationLine ? 'underline' : 'none',
          ...style
        }
      ]}
      numberOfLines={numberOfLines}
    >
      {description}
    </Text>
  )
}

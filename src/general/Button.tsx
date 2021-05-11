import React, { useState } from 'react'
import styles from 'RNTask/assets/styles'
import { TouchableOpacity } from 'react-native'
import Title from 'RNTask/src/elements/Title'
import Colors from 'RNTask/assets/styles/Colors'
import { Entypo } from '@expo/vector-icons'

export default function Button (props: {
  name: Icon
  onClick: () => void
  locked?: boolean
  title: string
  withBorder?: boolean
  backgroundColor: Colors
  txtColor: Colors
  style?: StyleSheet
}) {
  const handlePress = async () => {
    if (!props.locked) {
      await props.onClick()
      return
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={props.locked}
      style={[
        styles.Layout.radius,
        styles.General.greenBackground,
        styles.Layout.flexDirectionRow,
        styles.Layout.flexCenter,
        styles.Layout.smallCardPadding,
        props.style,
        {
          backgroundColor: props.backgroundColor,
          opacity: props.locked ? 0.3 : 1
        }
      ]}
    >
      <Title title={props.title} color={props.txtColor} />
      <Entypo
        color={Colors.WHITE}
        name={props.name}
        size={30}
        style={styles.Layout.largeHorizontalMargin}
      />
    </TouchableOpacity>
  )
}

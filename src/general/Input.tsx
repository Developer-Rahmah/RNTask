import React from 'react'
import styles from 'RNTask/assets/styles'
import { KeyboardType, View } from 'react-native'
import Colors from 'RNTask/assets/styles/Colors'
import { TextField } from 'rn-material-ui-textfield'

export default function Input ({
  onChangeText,
  label,
  keyboardType
}: {
  onBlur?: () => void
  onChangeText?: any
  value?: string
  label: string
  keyboardType?: KeyboardType
}) {
  return (
    <View style={[styles.Layout.inputContainer]}>
      <TextField
        variant='filled'
        lineWidth={0.7}
        activeLineWidth={0.7}
        baseColor={Colors.GRAY}
        inputContainerStyle={styles.Layout.fieldContainerStyle}
        labelTextStyle={styles.Layout.smallMarginMinus}
        onChangeText={onChangeText}
        containerStyle={styles.Layout.input}
        tintColor={Colors.BLACK}
        label={label}
        keyboardType={keyboardType}
      />
    </View>
  )
}

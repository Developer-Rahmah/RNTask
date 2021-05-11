import styles from 'RNTask/assets/styles'
import Title from 'RNTask/src/elements/Title'
import React from 'react'
import Colors from 'RNTask/assets/styles/Colors'
import { View } from 'react-native'

const EmptyListMessage = ({}) => {
  return (
    <View
      style={[
        styles.Layout.flexCenter,
        styles.Elements.noItemsMessageContainer,
        styles.Layout.fullWidth
      ]}
    >
      <Title
        color={Colors.GRAY}
        numberOfLines={0}
        title='You do not have any products.
Press the green button below to 
add new ones'
      />
    </View>
  )
}

export default EmptyListMessage

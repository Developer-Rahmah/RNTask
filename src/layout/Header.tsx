import React from 'react'
import { View } from 'react-native'
import Colors from 'RNTask/assets/styles/Colors'
import Title from 'RNTask/src/elements/Title'
import styles from 'RNTask/assets/styles'

const Header = ({
  titleColor,
  greenHeader = true,
  title = 'Items'
}: {
  titleColor?: Colors
  greenHeader?: boolean
  title?: string
}) => {
  return (
    <View style={[greenHeader ? styles.Layout.header : null]}>
      {/* screen title */}
      <View style={styles.Layout.cardPadding}>
        <Title
          title={title}
          bold
          color={titleColor ? titleColor : Colors.WHITE}
        />
      </View>
    </View>
  )
}

export default Header

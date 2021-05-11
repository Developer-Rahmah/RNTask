import styles from 'RNTask/assets/styles'
import React from 'react'
import { View } from 'react-native'
import Summary from 'RNTask/src/elements/Summary'
import Swipeout from 'react-native-swipeout'
import Colors from 'RNTask/assets/styles/Colors'

export default function ProductCard ({
  ProductName,
  ProductType,
  ProductPrice,
  onClick
}: {
  ProductName: string
  ProductType: string
  ProductPrice: string
  onClick: () => void
}) {
  const swipeBtn = [
    {
      component: (
        <View style={[styles.Layout.flexCenter, styles.General.fullScreen]}>
          <Summary description='DELETE' color={Colors.WHITE} />
        </View>
      ),
      backgroundColor: Colors.RED,
      onPress: () => {
        onClick()
      }
    }
  ]

  return (
    <View style={styles.Layout.smallCardPadding}>
      <Swipeout backgroundColor='transparent' right={swipeBtn}>
        <View
          style={[
            styles.Layout.justifyContentSpaceBetween,
            styles.Layout.mediumCardPadding,
            styles.Layout.flexDirectionRow,
            styles.General.border,
            styles.Layout.radius,
            styles.General.lightGrayBackground
          ]}
        >
          <Summary description={ProductName} />
          <Summary description={ProductType} />
          <Summary description={ProductPrice} />
        </View>
      </Swipeout>
    </View>
  )
}

import styles from 'RNTask/assets/styles'
import React from 'react'
import { View } from 'react-native'
import Summary from 'RNTask/src/elements/Summary'

export default function ColumnsTitles ({
  firstTitle,
  secTitle,
  ThirdTitle
}: {
  firstTitle: string
  secTitle: string
  ThirdTitle: string
}) {
  return (
    <View
      style={[
        styles.Layout.justifyContentSpaceBetween,
        styles.Layout.mediumCardPadding,
        styles.Layout.flexDirectionRow,
        styles.Elements.separator
      ]}
    >
      <Summary description={firstTitle} />
      <Summary description={secTitle} />
      <Summary description={ThirdTitle} />
    </View>
  )
}

import { Entypo } from '@expo/vector-icons'
import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from 'RNTask/assets/styles'
import Colors from 'RNTask/assets/styles/Colors'
import { ItemContext } from 'RNTask/src/context/ItemContext'
import Summary from 'RNTask/src/elements/Summary'
import Title from 'RNTask/src/elements/Title'
import LocalStorage from 'RNTask/src/services/helper/LocalStorage'
export default function Alert ({ item, onCancel }) {
  const [items, setItems] = useContext(ItemContext)
  const onDelete = () => {
    setItems(items.filter(it => it !== item))
    if (items.length == 1) {
      setItems([])
      LocalStorage.set('products', [])
      LocalStorage.remove('products')
    }

    onCancel()
  }
  useEffect(() => {}, [items])
  return (
    <View style={[styles.General.fullScreen, styles.Layout.flexCenter]}>
      <View
        style={[
          styles.Elements.customAlert,
          styles.General.shadow,
          styles.Elements.inputContainer,
          styles.General.smallHeight
        ]}
      >
        <View
          style={[styles.Layout.fullWidth, styles.Elements.deleteContainer]}
        >
          <Title title='Delete' bold />
        </View>
        <Summary
          style={styles.Elements.msgContainer}
          description={'Are you sure you want to delete ' + `${item.name}`}
          numberOfLines={0}
        />

        <View
          style={[styles.Layout.fullWidth, styles.Elements.buttonsContainer]}
        >
          <TouchableOpacity onPress={() => onCancel()}>
            <Title
              bold
              color={Colors.PINK}
              title='CANCEL'
              style={styles.Layout.margin}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Layout.flexDirectionRow}
            onPress={() => onDelete()}
          >
            <Title bold title='DELETE' color={Colors.PINK} />
            <Entypo name='trash' color={Colors.LIGHT_BLUE} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </Modal>
  )
}

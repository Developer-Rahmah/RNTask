import { Entypo } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'
import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from 'RNTask/assets/styles'
import Colors from 'RNTask/assets/styles/Colors'
import { ItemContext } from '../context/ItemContext'
import Summary from '../elements/Summary'
import Title from '../elements/Title'
export default function Alert ({ item, onCancel }) {
  const [items, setItems] = useContext(ItemContext)
  const onDelete = () => {
    setItems(items.filter(it => it !== item))
    if (items.length == 1) {
      setItems([])

      AsyncStorage.setItem('products', JSON.stringify([]))
      AsyncStorage.removeItem('products')
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

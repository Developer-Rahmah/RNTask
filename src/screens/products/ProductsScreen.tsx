import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { Fab } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import Alert from 'RNTask/src/general/Alert'
import styles from 'RNTask/assets/styles'
import { ItemContext } from 'RNTask/src/context/ItemContext'
import ColumnsTitles from 'RNTask/src/general/ColumnsTitles'
import Rows from 'RNTask/src/general/rows'
import Header from 'RNTask/src/layout/Header'
import ProductCard from './displays/ProductCard'
import { AlertContext } from 'RNTask/src/context/AlertContext'
import AsyncStorage from '@react-native-community/async-storage'
import { Modal } from 'react-native'

const ProductsScreen = () => {
  const navigation = useNavigation()
  const [items, setItems] = useContext(ItemContext)
  const [selectedItem, setSelectedItem] = useState()

  const [showAlert, setShowAlert] = useContext(AlertContext)

  const removeItem = item => {
    setShowAlert(true)
    setSelectedItem(item)
  }

  useEffect(() => {
    if (items.length > 0) {
      AsyncStorage.setItem('products', JSON.stringify(items))
      setItems(items)
    }
  }, [showAlert])

  return (
    <>
      <Header />
      <ColumnsTitles firstTitle='Name' secTitle='Type' ThirdTitle='Price' />
      <Rows
        usePadding
        data={items}
        renderItem={({ item }) => (
          <ProductCard
            onClick={() => removeItem(item)}
            ProductName={item.name}
            ProductType={item.type}
            ProductPrice={item.price + ''}
          />
        )}
        keyExtractor={(item, index) => String(index)}
      />
      {showAlert ? (
        <Modal transparent={true} animationType='slide' visible={showAlert}>
          <Alert onCancel={() => setShowAlert(false)} item={selectedItem} />
        </Modal>
      ) : null}

      <Fab
        active={true}
        onPress={() => navigation.navigate('CreateNewProductScreen')}
        direction='up'
        position='bottomRight'
        style={styles.General.greenBackground}
      >
        <Entypo name='plus' />
      </Fab>
    </>
  )
}
export default ProductsScreen

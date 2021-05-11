import React, { createContext, useEffect, useState } from 'react'
import LocalStorage from '../services/helper/LocalStorage'

export const ItemContext = createContext(undefined)

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const updateInfo = val => {
    setItems(val)
  }

  const getUserProducts = async () => {
    const products = await LocalStorage.get('products')
    if (products.length > 0) {
      updateInfo(products)
    }
  }
  useEffect(() => {
    getUserProducts()
  }, [])
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {children}
    </ItemContext.Provider>
  )
}

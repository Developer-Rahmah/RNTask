import React, { createContext, useState } from 'react'

export const AlertContext = createContext(undefined)

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false)
  return (
    <AlertContext.Provider value={[showAlert, setShowAlert]}>
      {children}
    </AlertContext.Provider>
  )
}

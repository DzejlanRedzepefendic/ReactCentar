import React, { useState } from 'react'
import { getThemeFromLocalStorage } from './util'
export const AppContext = React.createContext()

function Context({ children }) {
  const [theme, setTheme] = useState(getThemeFromLocalStorage() ?? 'light')
  const [test, setTest] = useState('This is test')

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        test,
        setTest,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default Context

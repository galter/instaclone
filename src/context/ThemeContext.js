import React, { useState, createContext } from 'react'
import { lightTheme } from '../styles/theme'

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme)

  console.log(theme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

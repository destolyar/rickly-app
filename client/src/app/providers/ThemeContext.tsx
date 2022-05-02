import { createContext, useMemo, useState } from "react";
import { ThemeProviderProps } from "styled-components";
import { ThemeContextProps } from "../enities/interfaces/ThemeContext";

export const ThemeContext = createContext<ThemeContextProps>({type: "Light", setType: () => {}})

export const ThemeProvider = ({children}: ThemeProviderProps<object>) => {
  const [type, setType] = useState<'Light' | 'Dark'>('Light')

  const value = useMemo(() => ({type, setType}), [type])
  
  return(
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>)
} 
import { createContext, useState } from "react";
import { ThemeProviderProps } from "styled-components";
import { ThemeContextProps } from "../enities/interfaces/ThemeContext";

export const ThemeContext = createContext<ThemeContextProps>({type: "Light", setType: () => {}})

export const ThemeProvider = ({children}: ThemeProviderProps<object>) => {
  const [type, setType] = useState<'Light' | 'Dark'>('Dark')
  
  return(
  <ThemeContext.Provider value={{type, setType}}>
    {children}
  </ThemeContext.Provider>)
} 
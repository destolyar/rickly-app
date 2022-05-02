import { LayoutProps } from "../enities/interfaces/Layout"
import '../../styles/layout.scss'
import { useContext } from "react"
import { ThemeContext } from "../providers/ThemeContext"


export const Layout = ({children}: LayoutProps) => {
  const {type} = useContext(ThemeContext)
  console.log(type)
  return(
    <div className={type === 'Light' ? 'layout' : "layout-dark"}>{children}</div>
  )
}
import './Header.scss'
import { MarketInfo } from './MarketInfo/MarketInfo'
import { Navigation } from './Navigation/Navigation'

export const Header: React.FunctionComponent = () => {
  return(
    <header className="header">
      <MarketInfo/>
      <Navigation/>
    </header>
  )
}
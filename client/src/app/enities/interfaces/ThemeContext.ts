import { TypeSetState } from "../types/TypeSetState"

export interface ThemeContextProps {
  type: 'Light' | 'Dark',
  setType: TypeSetState<'Light' | 'Dark'>
}

// arquivo de definição de tipos onde só vai conter tipagens.
import 'styled-components'
import { defaultTheme } from './../styles/themes/default'

type ThemeType = typeof defaultTheme

// criando uma tipagem para o modulo styled componentes
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

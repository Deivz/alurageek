import 'styled-components';
import { defaultTheme, lightTeme } from '@/';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
import 'styled-components';
import theme from '../assets/styles/themes/default';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeType['colors'];
  }
}

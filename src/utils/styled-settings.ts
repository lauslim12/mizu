import { type DefaultTheme, createGlobalStyle } from 'styled-components';

/**
 * Global CSS resets.
 */
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.primaryDark};
    background-size: cover;
    background-repeat: no-repeat;
    font-family: ${({ theme: { font } }) =>
      font}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin: 0 auto;
    max-width: 1400px;
    min-height: 100vh;
  }

  ::selection {
    background-color: ${({ theme }) => theme.secondaryDark};
    color: ${({ theme }) => theme.black};
  }
`;

/**
 * Returns the theme of the application based on several metrics.
 *
 * @param theme - Theme name.
 * @param font - Font family.
 * @returns Prepared theme to be placed in the application.
 */
export const theme = (theme = 'original', font = 'Lato'): DefaultTheme => ({
  /**
   * Color theme.
   */
  primary:
    theme === 'original' ? '#008cef' : theme === 'dark' ? '#203A43' : '#e74c3c',
  primaryLight:
    theme === 'original' ? '#07cbfd' : theme === 'dark' ? '#2C5364' : '#BD3F32',
  primaryDark:
    theme === 'original' ? '#003cbe' : theme === 'dark' ? '#0F2027' : '#CB356B',
  secondaryLight:
    theme === 'original' ? '#7bed9f' : theme === 'dark' ? '#799F0C' : '#11998e',
  secondaryDark:
    theme === 'original' ? '#2ed573' : theme === 'dark' ? '#FFE000' : '#38ef7d',
  tertiaryLight:
    theme === 'original' ? '#e52d27' : theme === 'dark' ? '#C33764' : '#5C258D',
  tertiaryDark:
    theme === 'original' ? '#b31217' : theme === 'dark' ? '#1D2671' : '#4389A2',

  /**
   * Collection of gray colors.
   */
  greyLightOne: '#f3f3f3',
  greyDarkOne: '#6d6d6d',

  /**
   * Shadows.
   */
  shadowDark: '0 2rem 6rem rgba(0, 0, 0, 0.15)',

  /**
   * Neutral colors.
   */
  black: '#000',
  white: '#fff',

  /**
   * Special font families.
   */
  font,

  /**
   * Media queries, from largest to smallest in normal
   * pixels: [3810px, 1920px, 1500px, 1200px, 1100px, 900px, 600px, 500px].
   */
  media: {
    ultra: '@media only screen and (max-width: 238.12em)',
    hd: '@media only screen and (max-width: 120em)',
    largest: '@media only screen and (max-width: 93.75em)',
    extra: '@media only screen and (max-width: 75em)',
    large: '@media only screen and (max-width: 60.75em)',
    medium: '@media only screen and (max-width: 56.25em)',
    small: '@media only screen and (max-width: 37.5em)',
    smallest: '@media only screen and (max-width: 31.25em)',
  },
});

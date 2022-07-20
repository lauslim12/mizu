import 'react-i18next';
import 'styled-components';

import { resources } from './utils/i18n';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondaryLight: string;
    secondaryDark: string;
    tertiaryLight: string;
    tertiaryDark: string;

    greyLightOne: string;
    greyDarkOne: string;

    shadowDark: string;

    black: string;
    white: string;

    font: string;

    media: {
      ultra: string;
      hd: string;
      largest: string;
      extra: string;
      large: string;
      medium: string;
      small: string;
      smallest: string;
    };
  }
}

declare module 'react-i18next' {
  export interface CustomTypeOptions {
    resources: {
      en: typeof resources['en']['translation'];
      ja: typeof resources['ja']['translation'];
      id: typeof resources['id']['translation'];
    };
  }
}

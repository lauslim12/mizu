import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import drinksReducer from '../components/Drinks/slice';
import settingsReducer from '../components/Settings/slice';
import i18n from './i18n';
import type { RootState, Store } from './store';
import { theme } from './styled-settings';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: Store;
}

/**
 * Allows components to be rendered with Styled Components' `ThemeProvider` and Redux Toolkit's
 * `Provider` for unit tests.
 *
 * @param ui - User interface.
 * @param params - Several objects, consisting of a default store, preloaded state, and render options.
 * @returns React Component, hydrated for testing.
 */
export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {
      settings: { language: 'en', theme: 'original', font: 'Lato' },
      drinks: [],
    },
    store = configureStore({
      reducer: {
        drinks: drinksReducer,
        settings: settingsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    i18n.init();

    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme()}>{children}</ThemeProvider>
        </I18nextProvider>
      </Provider>
    );
  };

  // Return an object with the store and all of RTL's query functions.
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

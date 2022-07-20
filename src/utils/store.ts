import { configureStore } from '@reduxjs/toolkit';

import drinkReducer from '../components/Drinks/slice';
import settingsReducer from '../components/Settings/slice';

/**
 * Redux store to store all global states inside the application. We store
 * our configurations in the `localStorage`. It allows our
 * configurations to persist even after the user exits the browser.
 */
const store = configureStore({
  reducer: {
    settings: settingsReducer,
    drinks: drinkReducer,
  },
});

/**
 * We subscribe to the store. However, we try to debounce requests to
 * prevent someone spamming on his/her local storage saves. The average
 * delay is 500ms.
 */
store.subscribe(() => {
  setTimeout(() => {
    localStorage.setItem('mizu', JSON.stringify(store.getState()));
  }, 500);
});

/**
 * Several types to be inferred, more specifically; to infer the Redux
 * store so it can be used 'type-safely'.
 */
type Store = typeof store; // If `store` is made into a closure function, then `ReturnType<typeof store>`.
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

export default store;

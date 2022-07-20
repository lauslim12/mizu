import './utils/i18n';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { hydrate as drinksHydrate } from './components/Drinks/slice';
import { hydrate as settingsHydrate } from './components/Settings/slice';
import { App } from './pages/_app';
import reportWebVitals from './report-web-vitals';
import * as serviceWorkerRegistration from './service-worker-registration';
import store from './utils/store';

// Fetches our configurations and data from the local storage.
const configureStore = () => {
  const localData = localStorage.getItem('mizu');
  if (localData) {
    const parsedLocalData = JSON.parse(localData);
    store.dispatch(settingsHydrate(parsedLocalData.config));
    store.dispatch(drinksHydrate(parsedLocalData.drinks));
  }

  return store;
};

// Hydrates the whole application.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

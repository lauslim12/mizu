import {
  type Dispatch,
  type ReactNode,
  createContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

/**
 * Special types for declaring constants.
 */
type Drink = { intake: number; time: string };
type Font = 'Inconsolata' | 'Lato' | 'Noto Sans JP';
type Language = 'en' | 'id' | 'ja';
type Theme = 'original' | 'dark' | 'light';

/**
 * Action typing for our reducer.
 */
type Action =
  | { type: 'ADD_DRINK'; payload: Drink }
  | { type: 'CHANGE_FONT'; payload: Font }
  | { type: 'CHANGE_LANGUAGE'; payload: Language }
  | { type: 'CHANGE_THEME'; payload: Theme }
  | { type: 'INCREMENT_DRINK'; payload: string }
  | { type: 'RESET_STATE'; payload: null };

/**
 * Config typing for our context.
 */
type Config = {
  config: { language: Language; font: Font; theme: Theme };
  drinks: Drink[];
};

/**
 * Default configuration settings for the Context.
 */
const DefaultConfig: Config = {
  config: { language: 'en', font: 'Lato', theme: 'original' },
  drinks: [],
};

/**
 * Reducer (or a makeshift Redux) is a native replacement of Redux and is
 * used to manage the global state of the application. This is useful, as we require
 * most of the application to be dynamic.
 *
 * @param state - Current state of the application.
 * @param action - Action to take with the state.
 * @returns The newly updated state.
 */
const AppReducer = (state: Config, action: Action): Config => {
  // Destructure the action in beforehand to simplify below code.
  const { type, payload } = action;

  switch (type) {
    case 'ADD_DRINK':
      return { ...state, drinks: [...state.drinks, payload] };

    case 'CHANGE_FONT':
      return { ...state, config: { ...state.config, font: payload } };

    case 'CHANGE_LANGUAGE':
      return { ...state, config: { ...state.config, language: payload } };

    case 'CHANGE_THEME':
      return { ...state, config: { ...state.config, theme: payload } };

    case 'INCREMENT_DRINK':
      // If today has not yet drunk, do nothing and return state. We expect the 'payload'
      // object to be the current date, changed into the appropriate form with `.toDateString()`.
      const todayDrinkIndex = state.drinks.findIndex(
        (drink) => drink.time === payload
      );
      if (todayDrinkIndex === -1) {
        return state;
      }

      // If today has drunk, create a copy (deep copy) of the array, increment the counter,
      // and then replace the array in the state with the newly made one. This is to ensure pure functions. I actually
      // want to use `structuredClone(state.drinks)`, but I don't want to bother with polyfills.
      const newDrinks = state.drinks.map((d) => ({ ...d }));
      newDrinks[todayDrinkIndex].intake += 1;

      return { ...state, drinks: newDrinks };

    case 'RESET_STATE':
      return DefaultConfig;

    default:
      throw new Error('Reducer does not support that action type.');
  }
};

/**
 * Application context which will store all the required data for the
 * application to be interactive.
 */
export const AppContext = createContext<{
  state: Config;
  dispatch: Dispatch<Action>;
}>({
  state: DefaultConfig,
  dispatch: () => {},
});

/**
 * Provider to manipulate global states. Please place this on top of the DOM root, preferably in
 * `pages/_app/index.tsx`.
 *
 * @param params - React children.
 * @returns React component (provider of the context) to be used at the top of a component.
 */
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, DefaultConfig, () => {
    const localData = localStorage.getItem('mizu');
    return localData ? JSON.parse(localData) : DefaultConfig;
  });

  // Effect causes the application to repaint every time there are state changes.
  useEffect(() => localStorage.setItem('mizu', JSON.stringify(state)), [state]);

  // Memoize values to prevent unnecessary re-rendering.
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

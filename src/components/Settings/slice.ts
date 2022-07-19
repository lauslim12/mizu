import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

/**
 * Special types for declaring constants.
 */
type Font = 'Inconsolata' | 'Lato' | 'Noto Sans JP';
type Language = 'en' | 'id' | 'ja';
type Theme = 'original' | 'dark' | 'light';

/**
 * Config typing for our Redux.
 */
type Config = {
  language: Language;
  font: Font;
  theme: Theme;
};

/**
 * Default configuration settings for the Redux store.
 */
export const DefaultConfig: Config = {
  language: 'en',
  font: 'Lato',
  theme: 'original',
};

/**
 * Declare slice to allow state management.
 */
export const settingsSlice = createSlice({
  name: 'settings',
  initialState: DefaultConfig,

  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes.
  reducers: {
    /**
     * Changes the font of the application.
     *
     * @param state - Current state.
     * @param action - Font to be changed to.
     */
    changeFont: (state, action: PayloadAction<Font>) => {
      state.font = action.payload;
    },

    /**
     * Changes the language of the application.
     *
     * @param state - Current state.
     * @param action - Language to be changed to.
     */
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },

    /**
     * Changes the theme of the application.
     *
     * @param state - Current state.
     * @param action - Theme to be changed to.
     */
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },

    /**
     * Hydrates the slice with external data.
     *
     * @param action - All configurations data.
     */
    hydrate: (_, action: PayloadAction<Config>) => action.payload,

    /**
     * Resets the whole Redux store.
     */
    resetSettings: () => DefaultConfig,
  },
});

/**
 * Export all reducer function to be placed inside our store.
 */
export const {
  changeFont,
  changeLanguage,
  changeTheme,
  hydrate,
  resetSettings,
} = settingsSlice.actions;

/**
 * Default export in order to use it as a reducer / dispatch.
 */
export default settingsSlice.reducer;

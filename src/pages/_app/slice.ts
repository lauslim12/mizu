import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

/**
 * Special types for declaring constants.
 */
type Drink = { intake: number; time: string };

/**
 * Declare slice to allow state management.
 */
export const drinkSlice = createSlice({
  name: 'drinkSlice',
  initialState: [] as Drink[],

  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes.
  reducers: {
    /**
     * Adds a single drink into our Redux store.
     *
     * @param state - Current state.
     * @param action - Today's drink data.
     */
    addDrink: (state, action: PayloadAction<Drink>) => {
      state.push(action.payload);
    },

    /**
     * Hydrates the slice with external data.
     *
     * @param action - All drinks data.
     */
    hydrate: (_, action: PayloadAction<Drink[]>) => action.payload,

    /**
     * Increments drinks for today. If one has not yet drunk, do not do anything.
     *
     * @param state - Current state.
     * @param action - Action, consisting of the date being the current data, changed into
     * the appropriate form with `.toDateString()`.
     */
    incrementDrink: (state, action: PayloadAction<{ time: string }>) => {
      const todayDrinkIndex = state.findIndex(
        (drink) => drink.time === action.payload.time
      );
      if (todayDrinkIndex === -1) {
        return state;
      }

      state[todayDrinkIndex].intake += 1;
    },

    /**
     * Resets the whole Redux store.
     */
    resetSettings: () => [],
  },
});

/**
 * Export all reducer function to be placed inside our store.
 */
export const { addDrink, hydrate, incrementDrink } = drinkSlice.actions;

/**
 * Default export in order to use it as a reducer / dispatch.
 */
export default drinkSlice.reducer;

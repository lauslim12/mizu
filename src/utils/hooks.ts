import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './store';

/**
 * Aims to provide typing to the normal `useDispatch` method from
 * `react-redux` (to provide the mutator function to our state value).
 * Please use this instead of the usual `useDispatch`.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Aims to provide typing to the normal `useSelector` method from
 * `react-redux` (to provide the state value). Please use this
 * instead of the usual `useSelector`.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
/**
 * Use the funcitons of the slice reducers
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
/**
 * Use the state a specific reducer in the store
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

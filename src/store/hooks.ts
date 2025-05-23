import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";

// Use this instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;

// Use this instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

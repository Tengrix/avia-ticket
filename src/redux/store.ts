import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {searchReducer} from "./slice";

export const store = configureStore({
    reducer: {
        search: searchReducer
    }
})

export type RootStateType = ReturnType<typeof store.getState>;
export type ThunkAppDispatchType = ThunkDispatch<RootStateType, any, AnyAction>;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>();
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Infer types for AppDispatch and RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for usage in components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

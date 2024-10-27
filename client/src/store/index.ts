
import { configureStore } from '@reduxjs/toolkit';
import socketReducer from './socketSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        socket: socketReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = (state: RootState) => state;

export default store;

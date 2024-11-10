import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

//object
export const store = configureStore({
    reducer: todoReducer
});

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import productosReducer from './reducers/productosReducer';
export const store = configureStore({
  reducer: {
    count: counterReducer,
    productos: productosReducer
  },
});
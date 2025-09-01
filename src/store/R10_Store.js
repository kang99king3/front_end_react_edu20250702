// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './R10_counterSlice';

// 여러 slice들을 합쳐서 store 생성
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

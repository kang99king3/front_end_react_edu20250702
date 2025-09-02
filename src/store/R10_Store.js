// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './R10_counterSlice';
// export default counterSlice.reducer에 
//               -> counterReducer로 이름 정의해서 사용함

// 여러 slice들을 합쳐서 store 생성
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

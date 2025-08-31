// src/store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 상태 정의
const counterSlice = createSlice({
  name: 'counter',   // slice 이름 (액션 type prefix로 사용됨)
  initialState: { value: 0 },  // 초기 상태
  reducers: {
    increment: (state) => {
      state.value += 1;  // immer 덕분에 불변성 관리 자동
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

// 액션과 리듀서를 export
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

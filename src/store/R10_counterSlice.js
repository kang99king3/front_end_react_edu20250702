// src/store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 상태 정의 및 createSlice 생성
//  - createSlice에서 reducer와 action을 동시 정의 -> 예전 버전에서는 따로정의해서 사용
//  Redux는 설정할 내용도 많고 복잡했는데 redux toolkit(RTK) 나오면서 복잡한 설정 줄이고 사용이 편리해짐(2019년 공식 권장도구)

const counterSlice = createSlice({
  name: 'counter',   // slice 이름 (액션 type prefix로 사용됨)
  initialState: { value: 0 },  // 초기 상태
  reducers: { 
    //리듀서 함수들
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

// counterSlice 객체 안에는 여러 가지가 들어 있음
// counterSlice.reducer   → 리듀서 함수
// counterSlice.actions   → { increment, decrement } 액션 생성 함수들
// counterSlice.name      → "counter"

// 액션과 리듀서를 export
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer; // 이걸 내보내면 reducer 역할을 함

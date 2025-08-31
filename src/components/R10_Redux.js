// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // store 값 가져오기
  const dispatch = useDispatch(); // 액션 실행 준비

  return (
    <div>
      <h1>Redux Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
    </div>
  );
};

export default Counter;

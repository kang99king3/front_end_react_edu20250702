// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/R10_counterSlice';
//npm install @reduxjs/toolkit react-redux  :API 설치하기
const R10_Redux_Counter = () => {
  const count = useSelector((state) => state.counter.value); // store 값 가져오기
  const dispatch = useDispatch(); // store에 액션 실행 요청을 위해 준비.
                                 //  클릭하면 () => dispatch(increment()) 요청함
                               
  return (
    <div>
      <h1>Redux Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <hr/>
      <R10_Redux_Counter_Child />
    </div>
  );
};

//자식 컴포넌트에서 store에 접근하여 상태 값을 가져올 수 있다. 
// -> 부모에서 자식 컴포넌트로 단방향 하위로 전달해야 됐었는데 이제는 store에 접근해서 
//    상태값을 가져올 수 있다.(부모->하위자식->하위하위자식.. 이렇게 안해도 됨)
const R10_Redux_Counter_Child = () => {
  const count = useSelector((state) => state.counter.value); // store 값 가져오기
  const dispatch = useDispatch();
  return (
    <div>{count}
    <button onClick={() => dispatch(increment())}>증가</button>
    </div>
  );
}

export default R10_Redux_Counter;

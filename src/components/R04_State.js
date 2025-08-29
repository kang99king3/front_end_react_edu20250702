import React, { useState } from 'react';

// state는 컴포넌트 내부에서 바뀌는 데이터를 의미한다.
//   - useState hook을 사용해서 상태 변수와 상태 변경 함수를 얻을 수 있다.
//   - setState(여기서는 setCount)를 호출하면 React가 UI를 다시 렌더링한다
function R04_State() {
    // count2 변수의 값을 1씩증가시켜서 렌더링시킨다.
    // 하지만 리렌더링되지 않기 때문에 브라우저에는 변경되는 값이 반영되지 않는다
    //-> 리렌더링 되는 경우 1.state 변경 시 2.props 변경 시 3.부모컴포넌트 리렌더링 시
    let count2=0;
    const increase2=()=>{
        count2++;
        console.log("count2:"+count2);
    }

    // count: 상태 값(현재 카운트)
    // setCount: 상태를 변경하는 함수
    // useState(0): count의 초기값을 0으로 설정
    const [count, setCount] = useState(0);

    //상태변경시 이전값을 기준으로 변경해야 한다면 콜백 함수 권장(안정적)
    const increase= () => setCount((prev)=>prev+1);
    const decrease=() => setCount((prev)=>prev-1);
    const reset = () => setCount(0);

   

    //1. 함수안에서 setCount()를 여러번 실행했다면? 결과는 1씩 증가함
    //리액트는 성능최적화를 위해 여러 상태 업데이트를 모아서(batch) 처리함
    //-> setState를 실행해도 바로 바뀌는 것이 아님(이전 값을 참조)
    //-> 그래서 바뀌지 않은 count값 0에 +1을 계속 해도 1밖에 증가하지 못함
    // const increase = () => { setCount(count+1);
    //                          setCount(count+1);
    //                          setCount(count+1);
    //                        }; 

     //2.콜백함수로 작성하면 상태업데이트시 가장 최신값을 참조함
    // const increase = () =>{ setCount((prev)=>prev+1);
    //                         setCount((prev)=>prev+1);
    //                         setCount((prev)=>prev+1);}; 
    
    return (
        <div>
            <p>현재 카운드:{count2}</p>
            <button onClick={increase2}>+1</button>
            <br/>
            <p>현재 카운드:{count}</p>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default R04_State;
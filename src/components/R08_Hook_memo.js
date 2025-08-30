import React, { useCallback, useEffect, useMemo, useState } from 'react';

// useMemo는 계산결과값 재생성 방지, useCallback은 함수 재생성 방지

// useMemo: 이전에 계산한 결과를 저장해두고, 같은 입력이 들어오면 다시 계산하지 않고 저장된 값을 돌려주는 기법(메모이제이션)
//  - 계산 비용이 큰 값을 메모이제이션해서 성능 최적화
//  - 렌더링 과정에서 실행됨( 렌더링 이후가 아님: 이후실행은 useEffect)
//  - 특정 값이 바뀌지 않으면 이전에 계산해둔 값을 재사용
//  - 계산된 결과를 반환함 

// 일반적인 방법으로 확인
const MemoTest = () => {
     //같은 값이 입력되더라도 계산을 실행한다.
    const memoTest1=(n)=>{
        return n*n;
    }
    console.log(memoTest1(5)); 
    console.log(memoTest1(5));

    //같은 값이 입력되면 계산하지 않고 이전에 저장해둔 결과를 사용한다.
    const memo={};

    const memoTest2=(n)=>{
        if(memo[n]!==undefined){//키에 대한 값이 정의되어 있다면
            return memo[n];
        }
        //처음 계산이면 결과 저장 
        memo[n]=n*n;
        return memo[n];
    }
    console.log("memo구현:",memoTest2(5)); 
    console.log("memo구현:",memoTest2(5));
    return (
        <div>메모테스트</div>
    );
}

const ExpensiveComponent = ({value}) => {
      return <div>비용 큰 계산 결과: {value}</div>
}

const R08_Hook_memo = () => {
    const[num, setNum] = useState(0);//계산에 사용될 값
    const[other, setOther] = useState(false);

    //복잡한 계산을 하는 함수
    const expensiveCalculation = (n) => {
        let total = 0;
        for(let i = 0;i < 5000000;i++){
            total += i%(n+1);
        }
        return total;
    }

    // useMemo를 이용하여 계산 기능을 설정하면 num의 값이 변경될때만 실행함
    const memoizedValue=useMemo(()=>expensiveCalculation(num),[num]);

    // useCallback(func,[])
    // 함수 memoization을 제공한다. -> 리렌더링되면 함수도 새로 생성됨
    // 해당 hook을 사용하면 의존배열에 지정한 상태값이 변경될 때만 새로 생성해서 사용
    const handleClick=useCallback( () => {
        setNum((prev)=>prev+1);
    },[setNum]);

    return (
        <div>
            <div>
                <h1>메모이제이션 개념</h1>
                <MemoTest />
            </div>
            <div>
                <h1>useMemo 사용하기</h1>
                <p>num:{num}</p>
                <button onClick={handleClick}>num 증가</button>
                <p>other:{other?'true':'false'}</p>
                {/* 다른 상태를 토글해도 expensiveCalculation이 재실행되지 않음을 보여주기 위해 other상태를 토글해봄. */}
                <button onClick={()=>setOther((s)=>!s)}>
                    other 토글(memo 동작 확인용)
                </button>

                <div style={{marginTop:12}}>
                    {/* memoizedValue는 num이 바뀔 때만 재연산 된다. */}
                    <ExpensiveComponent value={memoizedValue} />
                </div>
            </div>
        </div>
    );
};

export default R08_Hook_memo;
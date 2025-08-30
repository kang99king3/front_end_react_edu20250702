import React, { useEffect, useState } from 'react';

//useEffect hook: 
// - 컴포넌트 렌더링 후 실행되는 효과처리 기능
// - 의존성 배열 [] 로 실행 시점 제어 가능
//   (빈배열은 처음한번만 실행, 배열에 상태 정의 하면 변경될때마다 실행)
// - return 으로 cleanup(정리 작업) 가능
// - 구현해볼 기능: 컴포넌트가 마운트될 때 타이머를 시작하고, 언마운트될 때 종료한다.
const R07_Hook_Effect = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        //콜백함수는 컴포넌트가 마운트(화면에 처음 실행될때)될 때 실행됨
        const id = setInterval(()=>{
            //상태 업데이트시 이전 상태값을 안전하게 사용하도록 함수형 업데이트 사용
            setSeconds(prev=>prev+1);
        },1000);

        //cleanup 함수로 컴포넌트가 언마운트시 실행
        //의존성 배열이 변경될 때 cleanup이 먼저 호출된다. 
        //아래 코드에서는 타이머를 제거하여, 메모리/백그라운드 작업 정리
        return () => {
            clearInterval(id);
        }
    },[]);// 빈배열일 경우 effect가 마운트시 1회만 실행함

    return (
        <div>
            <p>타이머: {seconds}초</p>
        </div>
    );
};

export default R07_Hook_Effect;
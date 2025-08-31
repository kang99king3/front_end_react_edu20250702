import React, { useState } from 'react';

// React에서 입력요소는 보통 "제어 컴포넌트"로 다룬다
//   - value를 state로 관리하고, onChange에서 state를 업데이트함
//   - 이 패턴으로 입력값을 제어 및 관리한다.

// state로 관리하는 이유
//  - React철학(단방향 데이터 흐름, Single Source of Truth:데이터를 신뢰할 수 있는 하나의 출처 규칙)
//  - 입력값을 다른 로직에서 활용하거나 전달하기 편함
//  - 리렌더링 시에도 입력값이 일관되게 유지됨
const R05_Event = () => {

    const [text, setText] = useState("");

    //e.target: 해당 이벤트가 발생한 요소
    const handleChange=(e)=>{
        setText(e.target.value);//입력값을 state로 반영
    }

    const handleClick=()=>{
        console.log("입력한 값:", text);

        // 입력요소를 기본 dom탐색 메서드로 제어할 수 도 있지만  React 철학과 어긋남
        // -> 리렌더링 최적화, 데이터 흐름관리가 어렵다
        const txt=document.querySelectorAll("input")[0].value;
        console.log("입력한 값(Dom탐색이용):", txt);
    }

    return (
        <div>
            <input type='text'
                   placeholder='아무 글자나 입력하세요'
                   value={text}
                   onChange={handleChange}
            />
            <button onClick={handleClick}>확인</button>
            <p>미리보기:{text}</p>
        </div>
    );
};

export default R05_Event;
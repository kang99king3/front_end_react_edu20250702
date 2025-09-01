import React from 'react';

//JSX는 javascript + XML 문법
// - 반드시 하나의 부모 요소로 감싸야 한다.
// - 중괄호 {} 안에서 javascript 표현식을 사용할 수 있다. 
// - 속성은 camelCase(className, onClick 등)로 표기한다.

function R01_JSXBasic() {

    const name ="hong";
    const isStudent=true;
    const score = 87;
    const upper = (s) => s.toUpperCase(); 

    // CSS 인라인 방식으로 정의할 경우 객체로 작성한다.
    const highlight = {color:"blue", fontWeight:"bold"};

    return (
        // JSX는 최상위에 하나의 부모요소(div)를 둬야 한다.
        // 중괄호 {}안에서는 JS표현식을 사용할 수 있다. 
        // 삼항 연산자를 통한 조건부 렌더링 가능
        // 함수 호출 결과도 표현 가능
        // 계산과 연산 결과 표현 가능
        <div>
            <p>안녕하세요, {name}님!!</p>
            <p>{isStudent?"학생입니다":"학생이 아닙니다"}</p>
            <p>대문자 이름: {upper(name)}</p>
            <p>점수:{score}점, 다음 시험 목표:{score + 10}점</p>
            <p style={highlight}>이 문장은 노란색, 굵게 표시됩니다.</p>
            <button onClick={()=>alert("버튼 클릭!")}>클릭</button>
        </div>
    );
}

export default R01_JSXBasic;

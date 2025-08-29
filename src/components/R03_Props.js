import React from 'react';

//props는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터
//  - props는 읽기 전용으로 자식이 직접 수정하지 못한다.
//  - 구조 분해 할당을 사용하면 가독성에 좋음
function R03_Props({name, age}) {
    // 전달받은 name과 age를 화면에 출력한다.
    // JSX 안에서 텍스트와 변수를 조합하여 사용할 수 있다.
    return (
        <div>
            <p>안녕하세요, <strong>{name}</strong> ({age}세) 님!!</p>
        </div>
    );
}

export default R03_Props;
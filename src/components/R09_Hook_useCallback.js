import React, { useCallback, useState } from 'react';

// 자식 컴포넌트
// props로 받은 onClick 함수를 버튼 클릭 시 실행
const ChildButton = React.memo(({ onClick }) => {
    console.log("자식 컴포넌트 렌더링됨");
    return <button onClick={onClick}>자식 버튼 클릭</button>;
});

const R09_Hook_useCallback = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // useCallback으로 함수를 메모이제이션
    // 두 번째 인자의 배열([]) 값이 바뀌지 않는 한,
    // 동일한 함수 객체를 재사용함
    // 성능 최적화 : 부모 컴포넌트에서 state가 자주 바뀌는데, 자식은 꼭 다시 렌더링될 필요가 없을 때 효과가 크다.
    const handleClick = useCallback(() => {
        alert("자식 버튼 클릭됨!");
    }, []);

    //일반 함수를 사용하면 자식 컴포넌트로 전달할때마다 새로 생성된 함수가 전달되기 때문에 
    //props가 변경되므로 자식 컴포넌트는 리렌더링 된다.
    const handleClick2 = () =>{
        alert("자식 버튼 클릭됨!!")
    }

    return (
        <div>
            <h2>useCallback 예제</h2>
            <p>부모 count: {count}</p>
            <button onClick={() => setCount(count + 1)}>부모 count 증가</button>

            <br />
            <input
                type="text"
                placeholder="부모 state 변경"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {/* 자식에게 콜백을 props로 전달 */}
            <ChildButton onClick={handleClick2} />
        </div>
    );
};

export default R09_Hook_useCallback;
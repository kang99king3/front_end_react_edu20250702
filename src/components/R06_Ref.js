import React, { useRef } from 'react';

// ref는 특정 DOM 요소나 자식 컴포넌트를 직접 참조하고 싶을 때 사용함
//   - 주로 포커스 제어, 스크롤 제어, 비제어 input값 읽기 등에 활용
//   - ref는 current 프로퍼티로 실제 DOM 노드를 가리킴
const R06_Ref = () => {

    //input 요소에 참조할 ref를 선언한다.
    const inputRef = useRef(null);

    //버튼 클릭시 입력창에 포커스를 준다.
    const focusInput = ()=>{
        //current는 현재 참조된 DOM을 가리킨다. 
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    //버튼 클릭시 입력창에 
    const fillValue = ()=>{
        if(inputRef.current){
            inputRef.current.value="자동으로 입력되었습니다.";
        }
        //비제어 input이므로 화면에는 바로 반영되지만
        //state로 값이 연결된 경우에는 setState로 동기화해야 한다.
    }

    //버튼 클릭시 현재 입력값을 읽어 경고창으로 보여준다.
    const readValue = ()=>{
        if(inputRef.current){
            alert(`현재 입력값:${inputRef.current.value}`);
        }
    }
    return (
        <div>
            {/* ref 속성으로 dom에 참조를 연결한다. */}
            <input ref={inputRef} type="text" placeholder='ref테스트용 입력창'/>

            {/* ref로 DOM을 직접 제어하는 예시들 */}
            <div style={{display:'flex',gap:8,marginTop:8}}>
                <button onClick={focusInput}>포커스 주기</button>
                <button onClick={fillValue}>값 자동 입력</button>
                <button onClick={readValue}>현재 값 읽기</button>
            </div>
        </div>
        
    );
};

export default R06_Ref;
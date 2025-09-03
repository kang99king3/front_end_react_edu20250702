import React, { useRef, useState } from 'react';

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

    // 값 저장에 활용 가능
    //  - 리렌더링 없이 값을 변경
    //  - 리렌더링 되도 값 유지 
    const valueRef=useRef(0);
    const [num, setNum]=useState(0);
    let count=0;

    //useRef 값 변경
    const updateRefValue=()=>{
        valueRef.current+=1;
        console.log("ref:",valueRef.current);
    }
    //일반변수 값 변경
    const updateValue=()=>{
        count++;
        console.log("일반:",count);
    }
    //State 값 변경
    const updateStateValue=()=>{
        setNum((prev)=>prev+1);
        console.log("State:",num);
        //콘솔에 0부터 출력되는 이유는 state가 바로 실행되는것이 아니라
        //한번에 모아서 렌더링될때 실행되기 때문에 콘솔이 실행될때에는 아직 num의 값이 0이다
    }

    return (
        <div>
            {/* ref 속성으로 dom에 참조를 연결한다. */}
            <input ref={inputRef} type="text" placeholder='ref테스트용 입력창'/>

            {/* ref로 DOM을 직접 제어하는 예시들 */}
            <div>
                <button onClick={focusInput}>포커스 주기</button>
                <button onClick={fillValue}>값 자동 입력</button>
                <button onClick={readValue}>현재 값 읽기</button>
            </div>
            <div>
                <h2>값저장에 사용</h2>
                <span>{valueRef.current}</span>
                <button onClick={updateRefValue}>값변경(ref)</button>
                <button onClick={updateValue}>값변경(일반)</button>
                <span>{num}</span>
                <button onClick={updateStateValue}>값변경(state)</button>
            </div>
        </div>
        
    );
};

export default R06_Ref;
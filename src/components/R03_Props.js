import React, { Component } from 'react';

//props는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터
//  - props는 읽기 전용으로 자식이 직접 수정하지 못한다.
//  - 구조 분해 할당을 사용하면 가독성에 좋음
function R03_Props({name, age}) {
    //R03_Props(props)으로 받고 출력은 {props.name},{props.age} 한다.

    // 전달받은 name과 age를 화면에 출력한다.
    // JSX 안에서 텍스트와 변수를 조합하여 사용할 수 있다.
    return (
        <div>
            <p>안녕하세요, <strong>{name}</strong> ({age}세) 님!!</p>
        </div>
    );
}

function R03_Props2(props){ 
    const {name, age} = props;
    return (
        <div>{name}, {age}</div>
    )
}

function R03_Props3(props){ 
    return(
        <div>{props.name}, {props.age}</div>
    )
}

//클래스형 컴포넌트
class R03_Props_Class extends Component {

    render() {
        const{name,children}=this.props;//구조분해할당 문법
        return (
            <div className='c1'>
                <h2>난 컴포넌트1이야:{name}</h2>
                <h2>클래스형컴포넌트지..:{children}</h2>
            </div>
        );
    }
}

export default R03_Props;
export {R03_Props_Class};
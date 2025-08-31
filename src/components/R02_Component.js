import React, { Component } from 'react';

// 컴포넌트는 독립된 UI 조각으로 재사용성이 좋음
// 종류는 함수형 컴포넌트와 클래스형 컴포넌트가 있다. 
// 현재 함수형 컴포넌트가 표준이다.
// 컴포넌트에는 props, state등 여러 구성요소가 있다. 
function R02_Component() {

    return (
        <div>
            <h3>welcome to React!!</h3>
        </div>
    );
}

//클래스형 컴포넌트: Componet객체를 상속받아 구현한다. 레거시방식
class R02_ComponentClass extends Component {
    render() {
        return (
            <div>
                <h3>클래스형 컴포넌트</h3>
            </div>
        );
    }
}

// default는 기본으로 반드시 작성
export default R02_Component;
// 여러 컴포넌트를 추가할 수 있다. 
export {R02_ComponentClass};

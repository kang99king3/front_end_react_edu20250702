import React, { Component } from 'react';

// 컴포넌트는 각각의 독립된 UI 조각 개념으로 재사용성에 좋음
// 종류는 함수형 컴포넌트와 클래스형 컴포넌트가 있다. 
// 컴포넌트에는 props, state등 여러 구성요소가 있다. 

//함수형 컴포넌트
// - 함수작성방식으로 구현한다.
// - 기존에 클래스형 컴포넌트에서 사용하던 state, 생명주기 등의 기능을 사용못함
//    -> Hooks를 통해 구현 가능
// 클래스형과 기본 문법이 다소 다른 부분이 있음
// 현재 함수형 컴포넌트가 표준이다.
function R02_Component() {

    return (
        <div>
            <h3>welcome to React!!</h3>
        </div>
    );
}

//클래스형 컴포넌트: Componet객체를 상속받아 구현한다. 레거시방식
//                 render()메서드를 사용해서 렌더링 구현
class R02_ComponentClass extends Component {
    render() {
        return (
            <div>
                <h3>클래스형 컴포넌트</h3>
            </div>
        );
    }
}

//export는 다른 객체에서 사용할 수 있도록 설정하는 방식이다.
// default는 기본으로 반드시 작성-> 기본이기 때문에 import시 꼭 이름을 일치시키지 않아도 됨
export default R02_Component;
// 여러 컴포넌트를 추가할 수 있다. 
export {R02_ComponentClass};

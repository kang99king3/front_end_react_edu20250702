import React, { useState } from 'react';


const ExpensiveComponent = ({value}) => {
      return <div>비용 큰 계산 결과: {value}</div>
}

const R08_Hook_memo = () => {
    const[num, setNum] = useState(0);
    const[other, setOther] = useState(false);

    const expensiveCalculation = (n) => {
        let total = 0;
        for(let i = 0;i < 5000000;i++){
            total += i%(n+1);
        }
        return total;
    }

    const handleClick= () => {
        
    }

    return (
        <div>
            <p>num:{num}</p>
            <buttnon onClick={handleClick}>num 증가</buttnon>
        </div>
    );
};

export default R08_Hook_memo;
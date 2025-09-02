import React, { useState } from "react";

const FormDateState=()=>{

    // 많은 양의 input 요소를 state를 각각 연결할 경우 
    // 코드량도 많아지고 복잡해지는 문제가 있음
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
    );

}

//입력필드가 적을때는 useState 여러개를 사용
//입력필드가 많을때는 객체 state, onChange로 공통처리
//규모가 크고 검증이나 조건이 많을 경우 useReducer를 사용

//하나의객체와 onChange공통처리로 구현
const FormDateObj = () => {
  //하나의 객체로 state 관리
  const [formData, setFormData] = useState({
                                        name: "",
                                        email: "",
                                        phone: ""
                                    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value   // name 속성에 맞는 값만 업데이트
    });
  };

  return (
    <div>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="이름"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="이메일"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="전화번호"
      />

      <p>입력값: {JSON.stringify(formData)}</p>
    </div>
  );
};

export default FormDateObj;

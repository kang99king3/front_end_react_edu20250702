import './App.css';
import R01_JSXBasic from './components/R01_JSXBasic';
import R02_Component, { R02_ComponentClass } from './components/R02_Component';
import R03_Props from './components/R03_Props';
import R04_State from './components/R04_State';

function App() {

  const sectionStyle ={
    border : "1px solid grey",
    borderRadius : "12px",
    padding: "16px",
    marginBottom : "24px",
  }
  return (
    <div style={{maxWidth:720,margin:"40px auto", fontFamily:"sans-serif"}}>
      <section style={sectionStyle}>
        <h1>1. JSX Basics</h1>
        <R01_JSXBasic/>
      </section>

      <section style={sectionStyle}>
        <h1>2. Component</h1>
        <R02_ComponentClass />
        <R02_Component />
      </section>

      <section style={sectionStyle}>
        <h1>3. Props</h1>
        {/*문자열은 "", 숫자,bool등은 {}사용. 안그럼 문자열로 넘어감 */}
        <R03_Props name="Kang" age={45} /> 
        <R03_Props name="Kim" age={45} /> 
      </section>

      <section style={sectionStyle}>
        <h1>4. State</h1>
        {/*문자열은 "", 숫자,bool등은 {}사용. 안그럼 문자열로 넘어감 */}
        <R04_State />
      </section>
    </div>
  );
}

export default App;

import './App.css';
import R01_JSXBasic from './components/R01_JSXBasic';
import R02_Component, { R02_ComponentClass } from './components/R02_Component';
import R03_Props from './components/R03_Props';
import R04_State from './components/R04_State';
import R05_Event from './components/R05_Event';
import R06_Ref from './components/R06_Ref';
import R07_Hook_Effect from './components/R07_Hook_Effect';
import R08_Hook_useMemo from './components/R08_Hook_useMemo';
import R09_Hook_useCallback from './components/R09_Hook_useCallback';

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
        <R04_State />
      </section>

      <section style={sectionStyle}>
        <h1>5. Event</h1>
        <R05_Event />
      </section>

      <section style={sectionStyle}>
        <h1>6. Hook useRef</h1>
        <R06_Ref />
      </section>

      <section style={sectionStyle}>
        <h1>7. Hook useEffect</h1>
        <R07_Hook_Effect/>
      </section>

      <section style={sectionStyle}>
        <h1>8. Hook useMemo</h1>
        <R08_Hook_useMemo />
      </section>

      <section style={sectionStyle}>
        <h1>9. Hook useCallback</h1>
        <R09_Hook_useCallback />
      </section>
    </div>
  );
}

export default App;

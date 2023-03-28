import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ){
      return;
    }
      setCalc(calc + value);
      if (!ops.includes(value)){
        setResult(eval(calc +  value).toString())
      }
  };

  const createDigits = () => {
    const digits = [];

    for (let number = 1; number < 10; number++) {
      digits.push(
        <button onClick={() => updateCalc(number.toString())} key={number}>
          {number}
        </button>
      );
    }
    return digits;
  };
  
  const calculate = () => {
    try {
      setCalc(eval(calc).toString())
      setResult("");
    } catch (error) {
      setCalc("Error");
      setResult("");
    }
  }
  
  const deleteLast = () => {
    if(calc == ""){
      return
    } 
    const value = calc.slice(0, -1);
    setCalc(value)
  }

  const clean = () => {
    setCalc("");
    setResult("")
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={clean}>C</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

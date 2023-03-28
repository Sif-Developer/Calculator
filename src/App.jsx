import { useState } from "react";

function App() {

  const[calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  


  const createDigits = () => {
    const digits = [];

    for (let number = 1; number < 10; number++) {
      digits.push(<button key={number}>{number}</button>);
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>

        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>

          <button>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

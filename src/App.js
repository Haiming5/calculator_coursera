import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [inputVal, setInputVal] = useState(null);
  const inputRef = useRef(inputVal);

  function plus(e) {
    e.preventDefault();
    setResult((res) => res + inputVal);
  }

  function minus(e) {
    e.preventDefault();
    setResult((res) => res - inputVal);
  }

  function times(e) {
    e.preventDefault();
    setResult((res) => res * inputVal);
  }

  function divide(e) {
    e.preventDefault();
    setResult((res) => res / inputVal);
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
    inputRef.current.focus();
    setInputVal("");
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  function inputChangeHandler(e) {
    if (e.target.value.length > 0) {
      setInputVal(Number(e.target.value));
    } else {
      setInputVal(null);
    }
  }

  let disabled = typeof inputVal != "number";
  let divisionDisable = inputVal === 0;

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <h2>
          <span>{result}</span>
        </h2>
        <input
          ref={inputRef}
          onChange={inputChangeHandler}
          pattern="[0-9]"
          type="number"
          placeholder="Type a number"
        />
        <button disabled={disabled} onClick={plus}>
          add
        </button>
        <button disabled={disabled} onClick={minus}>
          subtract
        </button>
        <button disabled={disabled} onClick={times}>
          multiply
        </button>
        <button disabled={disabled || divisionDisable} onClick={divide}>
          divide
        </button>
        <button disabled={disabled} onClick={resetInput}>
          reset input
        </button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;

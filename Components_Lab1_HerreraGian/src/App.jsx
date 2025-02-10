import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (value) => {
    if (isDisabled && value !== "AC") return;

    if (value === "AC") {
      clearDisplay();
    } else if (value === "DE") {
      deleteLastChar();
    } else if (value === "=") {
      calculateResult();
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const clearDisplay = () => {
    setDisplay("");
    setIsDisabled(false);
  };

  const deleteLastChar = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString()); 
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="container"> 
      <div className="calculator">
        <div className="display">{display || "0"}</div>

        <div className="buttons">
          <button className="empty"></button>
          <button className="empty"></button>
          <button onClick={() => handleClick("AC")}>AC</button>
          <button onClick={() => handleClick("DE")}>DE</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>×</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>−</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button className="zero" onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;


import { useState } from "react";
import { evaluateExpression } from "./utils";

const App = () => {
  const [display, setDisplay] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (value) => {
    if (isDisabled && value !== "AC") return;

    switch (value) {
      case "AC":
        clearDisplay();
        break;
      case "DE":
        deleteLastChar();
        break;
      case "=":
        calculateResult();
        break;
      default:
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
    const result = evaluateExpression(display);
    setDisplay(result);
    setIsDisabled(result === "Error");
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{display || "0"}</div>
        <div className="buttons">
          <button onClick={() => handleClick("AC")}>AC</button>
          <button onClick={() => handleClick("DE")}>DE</button>
          <button onClick={() => handleClick("=")}>=</button>
          {["/","7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", '', '', "0", "."].map((char) => (
            <button key={char} onClick={() => handleClick(char)}>{char}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

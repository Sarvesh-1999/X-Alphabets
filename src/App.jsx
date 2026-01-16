import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const handleClick = (letter) => {
    setResult((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setResult((prev) => prev.slice(0, -1));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Alphabet Buttons</h1>
        <p>Click letters</p>

        <div className="output" data-testid="output">
          {result}
        </div>

        <div className="backspace-row">
          <button className="key" onClick={handleBackspace}>
            Backspace
          </button>
        </div>

        <div className="keyboard">
          {alphabets.map((letter) => (
            <button
              key={letter}
              className="key"
              onClick={() => handleClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

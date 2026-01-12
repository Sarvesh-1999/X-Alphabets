import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const handleLetterClick = (letter) => {
    setText((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Alphabet Buttons</h1>
        <p className="subtitle">
          Click letters (or use your keyboard) to build text.
        </p>

        <div className="output">
          {text || "Your text will appear here..."}
        </div>

        <div className="backspace-row">
          <button className="key backspace" onClick={handleBackspace}>
            Backspace
          </button>
        </div>

        <div className="keyboard">
          {alphabets.map((letter) => (
            <button
              key={letter}
              className="key"
              onClick={() => handleLetterClick(letter)}
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

import "./App.css";
import Phrase from "./phrase/Phrase";
import generatePhrase from "./generate-phrase/generatePhrase";
import { useState } from "react";

function App() {
  const [measures, setMeasures] = useState(generatePhrase());

  return (
    <div className="App">
      <button
        onClick={() => {
          setMeasures(generatePhrase());
        }}
      >
        Generate strumming pattern
      </button>
      <Phrase measures={measures} />
    </div>
  );
}

export default App;

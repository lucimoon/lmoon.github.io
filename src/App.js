import "./App.css";
import Phrase from "./phrase/Phrase";
import generatePhrase from "./generate-phrase/generatePhrase";

const measures = generatePhrase();

function App() {
  return (
    <div className="App">
      <Phrase measures={measures} />
    </div>
  );
}

export default App;

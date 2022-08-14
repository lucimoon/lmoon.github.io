import "./App.css";
import Phrase from "./phrase/Phrase";

const measures = [
  ["up", "down", "rest", "mute"],
  ["up", "down", "rest", "mute"],
  ["up", "down", "rest", "mute"],
  ["up", "down", "rest", "mute"],
];

function App() {
  return (
    <div className="App">
      <Phrase measures={measures} />
    </div>
  );
}

export default App;

import './App.css';
import PilotBattle from "./components/b1-pilotBattle";
import Carrom from "./components/b1.2-carrom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CSS Battle Collection</h1>
        <PilotBattle />
        <Carrom />
      </header>
    </div>
  );
}

export default App;

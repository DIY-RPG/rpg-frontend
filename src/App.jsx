// import './App.css';
import "./Styles.css";
import Character from "./pages/Character";
import { Lazaro } from "./pages/Character";
import "./characterComponents/ActionCard.css";

function App() {
  return (
    <div className="background-container">
      <div className="main-container">
        <Character {...Lazaro} />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import CharacterSheetInterface from './pages/CharacterSheetInterface';
import './characterComponents/ActionCard.css';

function App() {
  return (
    <div className="background-container">
      <div className="main-container">
         <CharacterSheetInterface/>
        </div>
    </div>
  );
}

export default App;

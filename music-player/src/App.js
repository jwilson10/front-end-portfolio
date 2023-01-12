import './App.css';
import Player from "./components/Player";

function App() {
  return (
    <div className="main">
      <div className="mainHead">
        <h1>My Fantastic Web Player</h1>
      </div>
      <div className='page'>
        <Player></Player>
      </div>
      <div className="footer">Made with &hearts; by J. Wilson</div>
    </div>
  );
}

export default App;

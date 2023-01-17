import './App.css';
import HelloWorld from "./components/HelloWorld.js";
import AboutMe from './components/AboutMe';
import JumpTo from './components/JumpTo';

function App() {
  return (
    <div>
      <div className="head">
          <HelloWorld></HelloWorld>
          <JumpTo></JumpTo>
        </div>
        <body>
            <AboutMe></AboutMe>
        </body>
        <footer>

        </footer>
    </div>
  );
}

export default App;

import logo from './quiz.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div  className="App-button-container">
          <button className="App-button start">Start</button>
          <button className="App-button history">History</button>
        </div>
      </header>
    </div>
  );
}

export default App;

import logo from './img/cats_clicker.gif';
import './App.css';

function App() {

  const handleButtonClick = () => {
    console.log('button clicked');
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className='mainButton' onClick={handleButtonClick}><img src={logo} className="App-logo" alt="logo" /></button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

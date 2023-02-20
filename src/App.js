import logo from './img/cats_clicker.gif';
import './App.css';
import { useState } from 'react';

function App() {
  const [numClicked, setNumClicked] = useState(0);

  const handleButtonClick = () => {
    console.log('button clicked');
    setNumClicked(numClicked+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='numberClickStyle'>{numClicked}</h2>
        <button className='mainButton' onClick={handleButtonClick}><img src={logo} className="App-logo" alt="logo" /></button>
        
      </header>
    </div>
  );
}

export default App;

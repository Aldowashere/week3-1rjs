import React, { useState } from 'react';
import './App.css';
import headsImage from './assets/heads.png';
import tailsImage from './assets/tails.png';

function App() {
  const [isHeads, setIsHeads] = useState(true);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const flipCoin = () => {
    const randomNumber = Math.random(); 
    if (randomNumber < 0.5) {
      setIsHeads(true);
      setHeadsCount(headsCount + 1);
    } else {
      setIsHeads(false);
      setTailsCount(tailsCount + 1);
    }
  };

  const resetCounts = () => {
    setIsHeads(true);
    setHeadsCount(0);
    setTailsCount(0);
  };

  return (
    <div className="tosscontainer">
      <div className="left">
        <code>HEADS <p id='totalHeads'>{headsCount}</p></code>
        <code>TAILS <p id='totalTails'>{tailsCount}</p></code>
        <button className='toss-btn' onClick={flipCoin}>FLIP THE COIN</button>
        <button className='reset-btn' onClick={resetCounts}>RESET</button>
      </div>
      <div className="right">
        <div className="coin" id='coin'>
          <img src={isHeads ? headsImage : tailsImage} alt={isHeads ? 'Heads' : 'Tails'} />
        </div>
      </div>
    </div>
  );
}

export default App;

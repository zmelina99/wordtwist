import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './atoms/button';
import { Timer } from './atoms/timer';
import { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Letter } from './atoms/letter';

function App() {
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    const newTime = timer - 1;
    timer > 0 && setTimeout(() => setTimer(newTime), 1000);
    return () => clearTimeout(timer);
  }, [timer]);
  return (
    <div className="App">
      <Button label="play" variant="primary" />
      <Timer timer={timer} />
      <Letter label='A'/>
    </div>
  );
}

export default App;

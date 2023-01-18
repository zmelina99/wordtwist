import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './atoms/button';
import { Timer } from './atoms/timer';
import { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

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
      <p>{timer}</p>{' '}
      <div>
        <CircularProgressbar
          value={timer}
          minValue={0}
          maxValue={120}
          strokeWidth={50}
          counterClockwise={true}
          background={true}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
    </div>
  );
}

export default App;

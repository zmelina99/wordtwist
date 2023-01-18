import React from 'react';
import clock from './clock.png';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import styles from './timer.module.scss';


interface ITimer {
  timer: number;
}
const Timer: React.FC<ITimer> = ({ timer }) => {
  const { Timer__Clock, Timer__Piechart } = styles;
  return (
    <div className={styles.Timer}>
      <img src={clock} className={Timer__Clock}></img>{' '}
      <div className={Timer__Piechart}>
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
            pathColor: `#e61a5a`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
    </div>
  );
};

export default Timer;

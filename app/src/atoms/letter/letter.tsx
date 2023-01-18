import React from 'react';
import styles from './letter.module.scss';

type ILetter = { label: string };
const Letter: React.FC<ILetter> = ({ label }) => {
  const { Letter__Label } = styles;
  return (
    <div className={styles.Letter}>
      <span className={Letter__Label}>{label}</span>
    </div>
  );
};

export default Letter;

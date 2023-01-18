import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({ variant, label, ...props }) => {
  const { Button__Label } = styles;
  return (
    <button
      className={`${styles.Button} ${styles[`Button--${variant}`]}`}
      {...props}
    >
      <span className={Button__Label}> {label}</span>
    </button>
  );
};

export default Button;

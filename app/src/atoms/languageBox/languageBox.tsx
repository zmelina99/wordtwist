import React from 'react';
import styles from './languageBox.module.scss';

type ILanguageBox = {
  label: string;
  onSelected(): void;
};
const LanguageBox: React.FC<ILanguageBox> = ({ label, onSelected }) => {
  const { LanguageBox__Label } = styles;
  return (
    <div className={styles.LanguageBox} onClick={onSelected}>
      <span className={LanguageBox__Label}>{label}</span>
    </div>
  );
};

export default LanguageBox;

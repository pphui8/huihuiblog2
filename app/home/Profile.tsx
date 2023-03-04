'use client';

import React, { useContext } from 'react'
import styles from './Profile.module.css'
import { ThemeContext } from "../ThemeContext";

type Props = {}

const Index = (props: Props) => {
  const { isNight } = useContext(ThemeContext);
  const sakamoto = {
    normal: "https://i.postimg.cc/CMPtn4yB/sakamoto.jpg",
    sleep: "https://i.postimg.cc/XqRkcqch/sakamoto-Night.jpg",
  };
  const hakase = {
    normal: "https://i.postimg.cc/d3y81vP9/hakase.jpg",
    sleep: "https://i.postimg.cc/Qtq2zLn0/hakase-Night.jpg",
  };
  return (
    <div className={isNight ? styles.profile_night : styles.head}>
      <div className={styles.profile} title="単純な馬鹿でありたい"></div>
      <img
        src={isNight ? sakamoto.sleep : sakamoto.normal}
        alt="sakamoto"
        className={styles.sakamoto}
      />
      <img
        src={isNight ? hakase.sleep : hakase.normal}
        alt="hakase"
        className={styles.hakase}
      />
      <div className={styles.line_l}></div>
      <div className={styles.line_r}></div>
    </div>
  );
};

export default Index;
import React, { useContext } from 'react'
import styles from './Footer.module.css'
import { ThemeContext } from "../../ThemeContext";

type Props = {}

export default function index({}: Props) {
  const { isNight } = useContext(ThemeContext);
  const ashiato = {
    normal:
      "https://tvax3.sinaimg.cn/large/006z6YU4ly1h0fl1nqkmhj30lk0brwf8.jpg",
    night:
      "https://tvax2.sinaimg.cn/large/006z6YU4ly1h0gh6q19bdj30lk0braau.jpg",
  };
  return (
    <footer className={isNight ? styles.footer_night : styles.footer}>
      <div className={styles.line}></div>
      <p className={styles.at}>@pphui8</p>
      <p className={styles.touunn}>-東雲研究所-</p>
      <img
        src={isNight ? ashiato.night : ashiato.normal}
        alt="sakamotosanno"
        className={styles.ashiato}
      />
    </footer>
  );
}
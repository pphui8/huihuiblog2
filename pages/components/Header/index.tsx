import Link from 'next/link';
import React, { useContext } from 'react'
import styles from './Header.module.css'
import { ThemeContext } from "../../ThemeContext";

type Props = {}

export default function index({}: Props) {
  const { isNight, toggleTheme } = useContext(ThemeContext);
  const [switchLoc, setSwitchLoc] = React.useState("up");
  const lightSwitch = () => {
    // 设置拉开关的小动画
    setSwitchLoc("down");
    toggleTheme();
    setTimeout(() => {
      setSwitchLoc("up");
    }, 300);
  };

  return (
    <header className={isNight ? styles.header_night : styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/home">
              <h1>huihuiblog</h1>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <p>home</p>
            </Link>
          </li>
          <li>
            <Link href="/aboutme">
              <p>about</p>
            </Link>
          </li>
          <li>
            <Link href="https://pphui8.com">
              <p>pphui8</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.lighter}>
        <div className={styles.himo}></div>
        <div
          className={switchLoc === "up" ? styles.switch : styles.switchDown}
          onClick={lightSwitch}
        ></div>
      </div>
    </header>
  );
}
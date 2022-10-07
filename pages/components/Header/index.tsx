import Link from 'next/link';
import React from 'react'
import styles from './Header.module.css'

type Props = {}

export default function index({}: Props) {
  const isNight = false;
  const [switchLoc, setSwitchLoc] = React.useState("switch");
  const setNight = null;
  const lightSwitch = () => {
    // 设置拉开关的小动画
    setSwitchLoc("switchDown");
    // setNight();
    setTimeout(() => {
      setSwitchLoc("switch");
    }, 300);
  };

  return (
    <header className={isNight ? styles.header_night : styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <h1>huihuiblog</h1>
            </Link>
          </li>
          <li>
            <Link href="https://pphui8.com">
              <p>home</p>
            </Link>
          </li>
          <li>
            <Link href="/API">
              <p>API</p>
            </Link>
          </li>
          <li>
            <Link href="/aboutme">
              <p>about</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.lighter}>
        <div className={styles.himo}></div>
        <div className={switchLoc} onClick={lightSwitch}></div>
      </div>
    </header>
  );
}
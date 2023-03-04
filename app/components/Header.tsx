"use client";

import Link from "next/link";
import React, { useContext, useEffect } from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "../ThemeContext";

type Props = {};

export default function Index({}: Props) {
  const { isNight, toggleTheme } = useContext(ThemeContext);
  const [switchLoc, setSwitchLoc] = React.useState("up");
  const lightSwitch = () => {
    // 设置拉开关的小动画
    setSwitchLoc("down");
    toggleTheme();
    window.localStorage.setItem("isNight", isNight ? "false" : "true");
    setTimeout(() => {
      setSwitchLoc("up");
    }, 300);
  };
  useEffect(() => {
    let origin_light = window.localStorage.getItem("isNight");
    // 如果是第一次启动
    if (origin_light == null) {
      window.localStorage.setItem("isNight", "false");
      origin_light = "false";
    }
    if (isNight.toString() !== origin_light) {
      toggleTheme();
    }
  }, []);

  return (
    <header className={isNight ? styles.header_night : styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/home" style={{ textDecoration: "none" }}>
              <h1>huihuiblog</h1>
            </Link>
          </li>
          <li>
            <Link href="/home" style={{ textDecoration: "none" }}>
              <p>home</p>
            </Link>
          </li>
          <li>
            <Link href="/aboutme" style={{ textDecoration: "none" }}>
              <p>about</p>
            </Link>
          </li>
          <li>
            <Link href="https://pphui8.com" style={{ textDecoration: "none" }}>
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

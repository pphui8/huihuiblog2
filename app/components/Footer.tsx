"use client";

import React, { useContext } from "react";
import styles from "./Footer.module.css";
import { ThemeContext } from "../ThemeContext";

type Props = {};

export default function Index({}: Props) {
  const { isNight } = useContext(ThemeContext);
  const ashiato = {
    normal: "https://i.postimg.cc/wjr8GqXc/ashiato.jpg",
    night: "https://i.postimg.cc/zGbP3nhK/ashiato-Night.jpg",
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

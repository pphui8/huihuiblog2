import React, { useContext } from "react";
import styles from "../styles/error.module.css";
import { ThemeContext } from "./ThemeContext";

const index = () => {
  const { isNight } = useContext(ThemeContext);
  return (
    <div
    className={
    isNight ? 
    styles.errorPageContainerNight : 
    styles. errorPageContainer
    }
    >
      <img
          src={
          isNight
              ? "https://img1.imgtp.com/2022/10/19/8LJEmBVd.png"
              : "https://img1.imgtp.com/2022/10/15/Eu34tPL2.png"
          }
          alt="hakaseQAQ"
      />
      <h1>backend error</h1>
      <p>ごめんなさい(｡•́︿•̀｡)</p>
    </div>
  );
};
export default index;

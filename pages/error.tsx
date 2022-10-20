import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import styles from "../styles/error.module.css";
import { ThemeContext } from "./ThemeContext";

let isShow = false;
const index = () => {
  useEffect(() => {
    if (isShow) {
      toast.error("error Σ(°ロ°)");
    }
    isShow = true;
    return () => {
      isShow = false;
    };
  }, [isShow]);

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

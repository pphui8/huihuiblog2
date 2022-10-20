import React, { useContext, useEffect } from 'react'
import styles from '../styles/404.module.css'
import { toast } from 'react-hot-toast';
import { ThemeContext } from "./ThemeContext";

let isShow = false;
const index = () => {

  useEffect(() => {
    if(isShow) {
      toast.error("404 Not Found（￣□￣；）");
    }
    isShow = true;
    return () => {
      isShow = false;
    }
  }, [isShow]);

  const { isNight } = useContext(ThemeContext);  
  return (
    <div className={isNight ? styles.midContainerNight : styles.midContainer}>
      <img
        alt="hakasedayo"
        src={
          isNight
            ? "https://img1.imgtp.com/2022/10/19/8LJEmBVd.png"
            : "https://img1.imgtp.com/2022/10/15/Eu34tPL2.png"
        }
      ></img>
      <h1>404 Not Found</h1>
      <p>ごめんなさい(｡•́︿•̀｡)</p>
    </div>
  );
}

export default index
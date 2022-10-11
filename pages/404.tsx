import React, { useEffect } from 'react'
import Image from "next/image";
import styles from '../styles/404.module.css'
import hakase from '../public/hakase.png'
import { toast } from 'react-hot-toast';

let isShow = false;
const index = () => {

  useEffect(() => {
    if(isShow) {
      toast.error("404 Not Found（￣□￣；）");
    }
    isShow = true;
  }, [isShow]);
  
  return (
    <div className={styles.midContainer}>
    <Image alt="hakasedayo" src={hakase} width={102} height={160} className={styles.img}></Image>
    <p className={styles.p}>
        404 Not Found
    </p>
    </div>
  );
}

export default index
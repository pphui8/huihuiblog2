import React, { useContext } from 'react'
import styles from './Profile.module.css'
import { ThemeContext } from "../../ThemeContext";

type Props = {}

const Index = (props: Props) => {
  const { isNight } = useContext(ThemeContext);
  const sakamoto = {
    normal:
      "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0fl000u43j31e00u8afz.jpg",
    sleep: "https://tva3.sinaimg.cn/large/006z6YU4ly1h0gh1hv12kj31b80xcdi6.jpg",
  };
  const hakase = {
    normal:
      "https://tvax2.sinaimg.cn/large/006z6YU4ly1h0fl171sxoj30ej0f4wgy.jpg",
    sleep:
      "https://tvax1.sinaimg.cn/large/006z6YU4ly1h0lx84djhej30gt0gq76p.jpg",
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
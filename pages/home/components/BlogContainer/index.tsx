import React, { useContext } from 'react'
import BlogCard from '../BlogCard';
import styles from './BlogContainer.module.css'
import { ThemeContext } from "../../../ThemeContext";

type Props = {
  data: Res[];
}

export type Res = {
  descript: string;
  id: number;
  name: string;
  tag: string;
};

const Index = (props: Props) => {
  const { isNight } = useContext(ThemeContext);
  let data = props.data === undefined ? [] : props.data;
  const index = data.sort((a, b) => b.id - a.id);

  const tomodati = {
    light:
      "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lz7hc81hj30dw0u075l.jpg",
    night:
      "https://tvax3.sinaimg.cn/large/006z6YU4ly1h0lz7mre07j30dw0u0t9y.jpg",
  };
  
  return (
    <div className={styles.blogs}>
      <div className={styles.container}>
        {index.map((elem, index) => {
          return <BlogCard data={elem} key={elem.id} delay={index} />;
        })}
      </div>
      <img
        className={styles.tomodati}
        src={isNight ? tomodati.night : tomodati.light}
        alt="ともだち！"
      />
    </div>
  );
}

export default Index
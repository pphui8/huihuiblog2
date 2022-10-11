import React from 'react'
import BlogCard from '../BlogCard';
import styles from './BlogContainer.module.css'

type Props = {
  data: Res[];
}

export type Res = {
  descript: string;
  id: number;
  name: string;
  tag: string;
};

const index = (props: Props) => {
  const isNight = false;
  const index = props.data.sort((a, b) => b.id - a.id);

  const tomodati = {
    light:
      "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lz7hc81hj30dw0u075l.jpg",
    night:
      "https://tvax3.sinaimg.cn/large/006z6YU4ly1h0lz7mre07j30dw0u0t9y.jpg",
  };
  
  return (
    <div className={styles.blogs}>
      <div className={styles.container}>
        {index.map((elem) => {
          return (
            <BlogCard
              data={elem}
              key={elem.id}
            ></BlogCard>
          );
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

export default index
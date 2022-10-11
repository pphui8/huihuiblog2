import Link from 'next/link';
import React from 'react'
import styles from "./BlogCard.module.css";

type Props = {
  data: Res;
};

export type Res = {
  descript: string;
  id: number;
  name: string;
  tag: string;
};


const index = (props: Props) => {
  const data = props.data;
  const isNight = false;
  return (
    <div className={isNight ? styles.blog_night : styles.blog}>
      <Link href={`/article/${data.name}`}>
        <div className={styles.title}>
          <p>{data.name}</p>
        </div>
      </Link>
      <div className={styles.blog_line}></div>
      <div className={styles.disc}>
        <p>{data.descript}</p>
      </div>
      <div className={styles.blog_line}></div>
      <div className={styles.blog_footer}>
        <div className={styles.tag}>{data.tag}</div>
      </div>
    </div>
  );
}

export default index
'use client';

import Link from 'next/link';
import React, { useContext } from 'react'
import styles from "./BlogCard.module.css";
import { ThemeContext } from "../../ThemeContext";
import { InView } from "react-intersection-observer";

type Props = {
  data: Res;
  delay: number;
};

export type Res = {
  descript: string;
  id: number;
  name: string;
  tag: string;
};

const Index = (props: Props) => {
  const data = props.data === undefined ? { descript: "", id: 0, name: "", tag: "" } : props.data;
  const dataurl = Buffer.from(data.name).toString("base64");
  let delay = props.delay < 3 ? props.delay * 2 : 3;
  const { isNight } = useContext(ThemeContext);
  const [inView, setInView] = React.useState(false);
  return (
    <InView
      onChange={(inView) => {
        if (!inView) return;
        setInView(inView);
      }}
    >
      {({ ref }) => (
        <div
          className={inView ? styles.inView : ""}
          style={{ animationDelay: delay * 0.1 + "s" }}
        >
          <div className={isNight ? styles.blog_night : styles.blog} ref={ref}>
            <Link href={`/blog/${dataurl}`}>
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
        </div>
      )}
    </InView>
  );
};

export default Index
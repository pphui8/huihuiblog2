"use client";

import React, { Suspense, useContext, useEffect } from "react";
import BlogCard from "./BlogCard";
import Load from "./load"
import styles from "./BlogContainer.module.css";
import config from "../../../config";
import { ThemeContext } from "../../ThemeContext";
import toast from "react-hot-toast";

type Props = {};

export type Res = {
  descript: string;
  id: number;
  name: string;
  tag: string;
};

async function getData() {
  const res = await fetch(config.baseURL + "index");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Page() {
  const { isNight } = useContext(ThemeContext);
  const [index, setIndex] = React.useState<Res[]>([]);
  useEffect(() => {
    getData()
      .then((res) => res.sort((a: any, b: any) => b.id - a.id))
      .then((res) => setIndex(res))
      .catch((err) => toast.error(err.message));
  }, []);

  const tomodati = {
    light: "https://i.postimg.cc/qRnsB4dx/home-sanningumi.jpg",
    night: "https://i.postimg.cc/mhxM0nn6/home-sanningumi-night.jpg",
  };

  return (
    <div className={styles.blogs}>
      <div className={styles.container}>
        {
          // if index is empty, show loading
          index.length === 0 && (
            <Load />
          )
        }
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

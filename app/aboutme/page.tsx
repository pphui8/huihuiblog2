"use client";

import React, { useContext, useEffect, useState } from "react";
import mystyles from "./Article.module.css";
import toast from "react-hot-toast";
import Filing from "./components/Filing";
import styles from "../../styles/markdown.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeContext } from "../ThemeContext";

type Props = {
  aboutMe: string;
  aboutBlog: string;
};

async function getData() {
  const aboutme = await fetch(
    `https://api.github.com/repos/pphui8/pphui8/git/blobs/49c667a9827ac71f588d93f3db5698f60b0d1491`
  );
  const aboutblog = await fetch(
    `https://api.github.com/repos/pphui8/huihuiblog2/git/blobs/fa17d8088966513ccb4ecf8d448fc8054b483842`
  );

  // Recommendation: handle errors
  if (!aboutme.ok || !aboutblog.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return {
    aboutme: aboutme.json(),
    aboutblog: aboutblog.json(),
  };
}

let isShow = false;
const Index = (props: Props) => {
  const [article, setArticle] = useState("Loading...");
  const [blog, setBlog] = useState("Loading...");
  const { isNight } = useContext(ThemeContext);
  const kakoiitoomou = {
    light: "https://i.postimg.cc/9FVxtrkw/aboutme-sanningumi.jpg",
    night: "https://i.postimg.cc/nhTccjy4/aboutme-sanningumi-Night.jpg",
  };
  const showArticles = async () => {
    if (isShow) return;
    await getData().then((data: any) => {
        data.aboutme.then((aboutme: any) => {
            setArticle(Buffer.from(aboutme.content, "base64").toString("utf-8"));
        }).catch((err: any) => {
            toast.error("Failed to fetch data");
        })
        data.aboutblog.then((aboutblog: any) => {
            setBlog(Buffer.from(aboutblog.content, "base64").toString("utf-8"));
        }).catch((err: any) => {
            toast.error("Failed to fetch data");
        })
    }).catch((err: any) => {
        toast.error("Failed to fetch data");
    })
    isShow = true;
  };
  useEffect(() => {
    showArticles();
  }, [isShow]);
  return (
    <div className={mystyles.aboutMe}>
      <div className={mystyles.container}>
        <div
          className={
            isNight
              ? mystyles.article + " " + styles.markdown_body_dark
              : mystyles.article + " " + styles.markdown_body
          }
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article}</ReactMarkdown>
        </div>
        <Filing />
        <div
          className={
            isNight
              ? mystyles.blogArticle + " " + styles.markdown_body_dark
              : mystyles.blogArticle + " " + styles.markdown_body
          }
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog}</ReactMarkdown>
        </div>
      </div>
      <img
        className={mystyles.kakoiitoomou}
        src={isNight ? kakoiitoomou.night : kakoiitoomou.light}
        alt="かっこういいと思うこと！"
      />
    </div>
  );
};

export default Index;

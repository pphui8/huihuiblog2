import React, { useContext, useEffect, useState } from 'react'
import mystyles from "./Article.module.css";
import toast from 'react-hot-toast';
import Filing from './components/Filing';
import styles from '../../styles/markdown.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { ThemeContext } from "../ThemeContext";
import { GetStaticProps } from "next";
import config from '../../config';

type Props = {
  aboutMe: string;
  aboutBlog: string;
}

let isShow = false;
const Index = (props: Props) => {
  const [article, setArticle] = useState("Loading...");
  const [blog, setBlog] = useState("Loading...");
  const { isNight } = useContext(ThemeContext);
  const kakoiitoomou = {
    light:
      "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lxd388pej30m60epag8.jpg",
    night: "https://tva4.sinaimg.cn/large/006z6YU4ly1h0lxkzqvbgj30m60ep0yt.jpg",
  };
  const showArticles = () => {
    if(isShow) return;
    setArticle(Buffer.from(props.aboutMe, "base64").toString("utf-8"));
    setBlog(Buffer.from(props.aboutBlog, "base64").toString("utf-8"));
    isShow = true;
  }
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
}

type GithubReturnValue = {
  content: string;
  encoding: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const getAboutMe = async () => {
    const aboutMe = await fetch(
      `https://api.github.com/repos/pphui8/pphui8/git/blobs/49c667a9827ac71f588d93f3db5698f60b0d1491`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Buffer.from(config.token, "base64").toString(
            "utf-8"
          )}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res: GithubReturnValue) => {
        return res.content;
      })
      .catch((err) => {
        return "Loading...";
      });
    return aboutMe;
  }
  const getAboutBlog = async () => {
    const aboutBlog = await fetch(
      `https://api.github.com/repos/pphui8/huihuiblog2/git/blobs/fa17d8088966513ccb4ecf8d448fc8054b483842`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Buffer.from(
            config.token,
            "base64"
          ).toString("utf-8")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res: GithubReturnValue) => {
        return res.content;
      })
      .catch((err) => {
        return "Loading...";
      });
    return aboutBlog;
  }

  return {
    props: { aboutMe: await getAboutMe(), aboutBlog: await getAboutBlog() },
    revalidate: 12000,
  };
};


export default Index
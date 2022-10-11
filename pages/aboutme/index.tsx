import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import Message from './components/Message';
import styles from "./markdown.module.css";
import mystyles from "./Article.module.css";
import toast from 'react-hot-toast';
import Filing from './components/Filing';

type Props = {}

let isShow = false;
const index = (props: Props) => {
  const [article, setArticle] = useState("Loading...");
  const isNight = false;
  const kakoiitoomou = {
    light:
      "https://tvax4.sinaimg.cn/large/006z6YU4ly1h0lxd388pej30m60epag8.jpg",
    night: "https://tva4.sinaimg.cn/large/006z6YU4ly1h0lxkzqvbgj30m60ep0yt.jpg",
  };
  const getReadMe = () => {
    fetch(`https://raw.githubusercontent.com/pphui8/pphui8/main/README.md`)
      .then((response) => response.text())
      .then((res) => setArticle(res))
      .catch((err) => {
        if(isShow === false) {
          setArticle("获取文章失败")
          if(isShow === false) {
            toast.error("获取文章失败")
            isShow = true;
          }
        }
      });
  };
  useEffect(() => {
    getReadMe();
  }, [isShow]);
  return (
    <div className={mystyles.aboutMe}>
      <div className={mystyles.container}>
        <div
          className={
            isNight
              ? mystyles.article + " " + styles.markdown_body_dark
              : mystyles.article + " " + styles.markdown_body_light
          }
        >
          <ReactMarkdown children={article}></ReactMarkdown>
        </div>
        <Filing />
        <Message />
      </div>
      <img
        className={mystyles.kakoiitoomou}
        src={isNight ? kakoiitoomou.night : kakoiitoomou.light}
        alt="かっこういいと思うこと！"
      />
    </div>
  );
}

export default index
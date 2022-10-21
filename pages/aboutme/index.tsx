import React, { useContext, useEffect, useState } from 'react'
import mystyles from "./Article.module.css";
import toast from 'react-hot-toast';
import Filing from './components/Filing';
import styles from '../../styles/markdown.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { ThemeContext } from "../ThemeContext";

type Props = {}

let isShow = false;
const index = (props: Props) => {
  const [article, setArticle] = useState("Loading...");
  const { isNight } = useContext(ThemeContext);
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
        if (isShow === false) {
          setArticle("failed to load");
          if (isShow === false) {
            toast.error("failed to load");
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
              : mystyles.article + " " + styles.markdown_body
          }
        >
          <ReactMarkdown children={article} remarkPlugins={[remarkGfm]} />
        </div>
        <Filing />
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
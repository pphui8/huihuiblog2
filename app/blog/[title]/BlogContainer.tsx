"use client";

import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillFile, AiOutlineFolder } from "react-icons/ai";
import myStyles from "./article.module.css";
import { nanoid } from "nanoid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../../../styles/markdown.module.css";
import { ThemeContext } from "../../ThemeContext";

export type BlogProps = {
  data: FiletreeList | undefined;
};

export interface FiletreeNode {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
}

export interface FiletreeList {
  sha: string;
  url: string;
  tree: FiletreeNode[];
  truncated: boolean;
}

export default function Index({ data }: BlogProps) {
  const [article, setArticle] = useState("");
  

  return (
    <div className={myStyles.article}>
      <div className={myStyles.container}>
        {/* <PojIndex cur_file={cur_file} cur_index={cur_index} /> */}
        {
          // while there is no article, show loading
          article === "" ? (
            <div className={myStyles.loading}>
              <p>abc</p>
            </div>
          ) : (
            <Article article={article} />
          )
        }
      </div>
    </div>
  );

  type PojProps = {
    cur_index: FiletreeNode[];
    cur_file: FiletreeNode[];
  };

  function PojIndex(data: PojProps) {
    const cur_index = data.cur_index;
    const cur_file = data.cur_file;
    const { isNight } = useContext(ThemeContext);
    return (
      <ul
        className={isNight ? myStyles.index_night : myStyles.index}
        id="blogTreeContainer"
      >
        {cur_index.map((value) => {
          return (
            <li key={nanoid()} onClick={() => toIndex(value)}>
              <AiOutlineFolder className={myStyles.svg} />
              {value.path}
            </li>
          );
        })}
        {cur_file.map((value) => {
          return (
            <li key={nanoid()} onClick={() => toFile(value)}>
              <AiFillFile className={myStyles.svg} />
              {value.path}
            </li>
          );
        })}
      </ul>
    );
  }

  function Article({ article }: { article: string }) {
    const { isNight } = useContext(ThemeContext);
    const [articleContent, setArticleContent] = useState("");
    useEffect(() => {
      setArticleContent(article);
    }, []);
    return (
      <div
        className={
          isNight
            ? myStyles.article + " " + styles.markdown_body_dark
            : myStyles.article + " " + styles.markdown_body
        }
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{articleContent}</ReactMarkdown>
      </div>
    );
  }
}

"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillFile, AiOutlineFolder } from "react-icons/ai";
import myStyles from "./article.module.css";
import { nanoid } from "nanoid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../../../styles/markdown.module.css";
import { ThemeContext } from "../../ThemeContext";
import config from "../../../config";

interface pageProps {
  params: { title: string };
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

// index of the current directory
let cur_index: FiletreeNode[] = [];
// file of the current directory
let cur_file: FiletreeNode[] = [];
let get_data_once = false;
// rootStack is used to record the path of the current directory
let rootStack: string[] = [];
let err_show_once = false;
const Page: FC<pageProps> = ({ params }) => {
  const urlParam = decodeURIComponent(params.title);
  const title = Buffer.from(urlParam, "base64").toString("utf-8");
  const [data, setData] = useState<FiletreeList>();

  const [article, setArticle] = useState("");
  
  useEffect(() => {
    if(get_data_once) return;
    else {
      getData(title)
        .then((res: FiletreeList) => {
          if(res.tree.length === 0) {
            toast.error("Failed to get blog data");
            return;
          }
          setData(res);
          dealIndex(res.tree);
        })
        .catch((err) => {
          if (!err_show_once) {
            toast.error("Failed to get blog data");
            err_show_once = true;
          }
        });
      get_data_once = true;
    }
    return () => {
      get_data_once = false;
      cur_index = [];
      cur_file = [];
    };
  }, []);

  const dealIndex = (data: FiletreeNode[]) => {
    if (cur_index.length === 0) {
      cur_index.push({
        path: "..",
        mode: "",
        type: "",
        sha: "",
        size: 0,
        url: "",
      });
    }
    data.map((item) => {
      // 是目录
      if (item.type === "tree") {
        cur_index.push(item);
      } else {
        cur_file.push(item);
      }
    });
    // 自动展示一个页面(优先README.md)
    if (cur_file.length != 0) {
      let has_rm = false;
      for (let cur of cur_file) {
        if (cur.path === "README.md") {
          showFile(cur.url, cur.path);
          has_rm = true;
          break;
        }
      }
      if (!has_rm) showFile(cur_file[0].url, cur_file[0].path);
    }
    setArticle(article);
  }

  const showFile = (url: string, filename: string) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((article) => {
        let tmp = Buffer.from(article.content, article.encoding).toString();
        // 如果不是 Markdown 则使用代码块包裹
        if (filename.search(".md") === -1) tmp = "```" + tmp + "```";
        setArticle(tmp);
      })
      .catch((err) => toast.error(`Request Failed`));
  };

  const toFile = (item: FiletreeNode) => {
    if (item.path.endsWith(".rar")) {
      setArticle("zip file is not supported");
      return;
    }
    showFile(item.url, item.path);
  };

  const toIndex = (item: FiletreeNode) => {
    cur_index = [];
    cur_file = [];
    get_data_once = false;
    if (item.path === "..") {
      if (rootStack.length === 1) {
        toast.error("This is the root directory");
        return;
      } else {
        rootStack.pop();
        const preRoot = rootStack[rootStack.length - 1];
        if (preRoot === undefined) {
          // bug here
          toast.error("Emmm... Something wrong");
          return;
        }
        fetch(preRoot, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            dealIndex(data.tree);
          })
          .catch((err) => toast.error(`Request Failed`));
      }
    } else {
      fetch(item.url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          dealIndex(data.tree);
        })
        .catch((err) => toast.error(`Request Failed`));
      rootStack.push(item.url);
    }
  };

  console.log(cur_index);

  return (
    <div className={myStyles.article}>
      <div className={myStyles.container}>
        {data === undefined ? (
          <div className={myStyles.loadingContainer}>
            <p className={myStyles.loadingText}>少女祈祷中...</p>
          </div>
        ) : (
          <>
            <PojIndex cur_file={cur_file} cur_index={cur_index} />
            <Article article={article} />
          </>
        )}
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
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {articleContent}
        </ReactMarkdown>
      </div>
    );
  }
}

export default Page;

async function getData(title: string) {
  // rewirte this shit
  const blogRoot = await fetch(`${config.baseURL}blog/${title}`)
    .then((res) => res.json())
    .catch((err) => {
      return err;
    });
  
  let Files;
  if (blogRoot.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  } else {
    const tmpRoot = blogRoot.blog_root.replace('"', "").replace('"', "");
    const tmpurl = `https://api.github.com/repos/pphui8/${tmpRoot}/git/trees/main`;

    Files = await fetch(tmpurl)
      .then((res) => res.json())
      .catch((err) => {
        return err;
      });
  }

  return Files;
};

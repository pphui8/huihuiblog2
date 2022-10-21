import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillFile, AiOutlineFolder } from "react-icons/ai";
import myStyles from "./article.module.css";
import { nanoid } from "nanoid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../../../styles/markdown.module.css";
import { ThemeContext } from "../../ThemeContext";
import { toUnicode } from "punycode";

export type BlogProps = {
  data: FiletreeNode[];
  blogRoot: string;
};

export type FiletreeNode = {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
};

export type FiletreeList = {
  tree: FiletreeNode[];
};

let cur_index: FiletreeNode[] = [];
let cur_file: FiletreeNode[] = [];
let indexHasDeal = false;
let rootStack: string[] = [];

export default function index({ data, blogRoot }: BlogProps) {
  const [article, setArticle] = useState("");

  const dealIndex = (data: FiletreeNode[]) => {
    if (indexHasDeal) return;
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
    indexHasDeal = true;
    // rootStack.push(blogRoot);
    // refresh the page
    setArticle(article);
  };

  useEffect(() => {
    rootStack.push(blogRoot);
    dealIndex(data);
    return () => {
      indexHasDeal = false;
      cur_index = [];
      cur_file = [];
      rootStack = [];
    };
  }, [indexHasDeal]);

  const showFile = (url: string, filename: string) => {
    fetch(url, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${config.token}`,
      },
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
    indexHasDeal = false;
    if (item.path === "..") {
      console.log(rootStack);
      if (rootStack.length === 1) {
        toast.error("This is the root directory");
        return;
      } else {
        todo!()
        const preRoot = rootStack[rootStack.length - 1];
        rootStack.pop();
        if (preRoot === undefined) {
          toast.error("Emmm... Something wrong");
          return;
        }
        fetch(preRoot, {
          method: "GET",
          headers: {
            // Authorization: `Bearer ${config.token}`,
          },
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
        headers: {
          // Authorization: `Bearer ${config.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dealIndex(data.tree);
        })
        .catch((err) => toast.error(`Request Failed`));
        rootStack.push(item.url);
      }
  };

  return (
    <div className={myStyles.article}>
      <div className={myStyles.container}>
        <PojIndex cur_file={cur_file} cur_index={cur_index} />
        <Article article={article} />
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
        <ReactMarkdown children={articleContent} remarkPlugins={[remarkGfm]} />
      </div>
    );
  }
}

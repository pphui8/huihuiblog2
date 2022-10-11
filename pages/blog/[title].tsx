import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from "next";
import config from '../../config';
import { toast } from 'react-hot-toast';
import { AiFillFile, AiOutlineFolder } from "react-icons/ai";
import myStyles from './article.module.css'
import { nanoid } from "nanoid";
import ReactMarkdown from 'react-markdown';

type Props = {
  data: FiletreeNode[];
};

type BlogRoot = {
  blog_root: string;
  status: number;
};

type FiletreeNode = {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
};

type FiletreeList = {
  tree: FiletreeNode[];
};

let cur_index: FiletreeNode[] = [];
let cur_file: FiletreeNode[] = [];
let indexHasDeal = false;
let cur_url = "";
let pre_url = "";

function index({ data }: Props) {
  const [index, setIndex] = useState<FiletreeNode[]>([]);
  const [article, setArticle] = useState("");

  const dealIndex = (data: FiletreeNode[]) => {
    if(indexHasDeal) return;
    if(cur_index.length === 0) {
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
      if(item.type === "tree") {
        cur_index.push(item);
      } else {
        cur_file.push(item);
      }
    });
    // 自动展示一个页面(优先README.md)
    if(cur_file.length != 0) {
      let has_rm = false;
      for(let cur of cur_file) {
        if(cur.path === "README.md") {
          showFile(cur.url, cur.path);
          has_rm = true;
          break;
        }
      }
      if(!has_rm) showFile(cur_file[0].url, cur_file[0].path);
    }
    indexHasDeal = true;
    setIndex(cur_index);
  }
  
  useEffect(() => {
    dealIndex(data);
  }, [indexHasDeal]);

  const showFile = (url: string, filename: string) => {
    fetch(url)
      .then(response => response.json())
      .then(article => {
        let tmp = Buffer.from(article.content, article.encoding).toString();
        // 如果不是 Markdown 则使用代码块包裹
        if(filename.search(".md") === -1) tmp = "```" + tmp + "```";
        setArticle(tmp);
      })
      .catch(err => toast.error(`Request Failed`));
  }

  const toFile = (item: FiletreeNode) => {
    if(item.path.endsWith(".rar")) {
      setArticle("暂不支持预览压缩文件");
      return;
    }
    showFile(item.url, item.path);
  }

  const toIndex = (item: FiletreeNode) => {
    if (item.path === "..") {
      toast.success("返回上一级");
      return;
    }
    cur_index = [];
    cur_file = [];
    indexHasDeal = false;
    fetch(item.url)
      .then(response => response.json())
      .then(data => {
        dealIndex(data.tree);
      })
      .catch(err => toast.error(`Request Failed`));
    
  }

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
    const isNight = false;
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
            <li key={nanoid()} onClick={() => toFile(value)} >
              <AiFillFile className={myStyles.svg} />
              {value.path}
            </li>
          );
        })}
      </ul>
    );
  };

  function Article({ article }: { article: string }) {
    const isNight = false;
    return (
      <div
        className={
          isNight ? myStyles.article + ' ' + " markdown-body-dark" :  myStyles.article + ' ' +  "markdown-body"
        }
      >
        <ReactMarkdown children={article}></ReactMarkdown>
      </div>
    );
  }
  
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const title = context.query.title;
  const res = await fetch(`${config.baseURL}blog/${title}`)
    .then((res) => res.json())
    .then((res: BlogRoot) => {
      return res.blog_root.replace('"', "").replace('"', "");
    })
    .then(async (blogRoot) => {
      const tmpurl = `https://api.github.com/repos/pphui8/` + blogRoot + `/git/trees/main`;
      return await fetch(tmpurl)
        .then((res) => res.json())
        .then((res: FiletreeList) => {
          return res.tree;
        });
    });
  
  return {
    props: { data: res },
  };
};

export default index;
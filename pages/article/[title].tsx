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
    console.log(cur_index);
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
            <li key={nanoid()}>
              <AiOutlineFolder className={myStyles.svg} />
              {value.path}
            </li>
          );
        })}
        {cur_file.map((value) => {
          return (
            <li key={nanoid()}>
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
  // const res = await fetch(`${config.baseURL}blog/${title}`)
  //   .then((res) => res.json())
  //   .then((res: BlogRoot) => {
  //     return res.blog_root.replace('"', "").replace('"', "");
  //   })
  //   .then(async (blogRoot) => {
  //     const tmpurl = `https://api.github.com/repos/pphui8/` + blogRoot + `/git/trees/main`;
  //     return await fetch(tmpurl)
  //       .then((res) => res.json())
  //       .then((res: FiletreeList) => {
  //         return res.tree;
  //       });
  //   })

  let res: FiletreeNode[] = [
    {
      path: ".gitignore",
      mode: "100644",
      type: "blob",
      sha: "a547bf36d8d11a4f89c59c144f24795749086dd1",
      size: 253,
      url: "https://api.github.com/repos/pphui8/khaos/git/blobs/a547bf36d8d11a4f89c59c144f24795749086dd1",
    },
    {
      path: "LICENCE",
      mode: "100644",
      type: "blob",
      sha: "0ed60b19f87129f5283a8b25bf1724735d3c393c",
      size: 1062,
      url: "https://api.github.com/repos/pphui8/khaos/git/blobs/0ed60b19f87129f5283a8b25bf1724735d3c393c",
    },
    {
      path: "README.md",
      mode: "100644",
      type: "blob",
      sha: "c5174923f533a8938a06d6c520379ed0abbdb3d4",
      size: 74,
      url: "https://api.github.com/repos/pphui8/khaos/git/blobs/c5174923f533a8938a06d6c520379ed0abbdb3d4",
    },
    {
      path: "index.html",
      mode: "100644",
      type: "blob",
      sha: "f329782800244ef4a140a2bf66da1111642ec2d8",
      size: 357,
      url: "https://api.github.com/repos/pphui8/khaos/git/blobs/f329782800244ef4a140a2bf66da1111642ec2d8",
    },
    {
      path: "package-lock.json",
      mode: "100644",
      type: "blob",
      sha: "706d85ff7b74762e3fa3ec1f6ed2fbb427cfc5f5",
      size: 141425,
      url: "https://api.github.com/repos/pphui8/khaos/git/blobs/706d85ff7b74762e3fa3ec1f6ed2fbb427cfc5f5",
    },
    {
      path: "package.json",
      mode: "100644",
      type: "blob",
      sha: "7309524f40bfcd47f495994bb5a8de0d413d7bba",
      size: 753,
      url: "https://api.github.com/repos/pphui8/khaos/git/blobs/7309524f40bfcd47f495994bb5a8de0d413d7bba",
    },
    {
      path: "repo.rar",
      mode: "100644",
      type: "blob",
      sha: "8ba62cd8080193858e8367936d3449ff5fca7dac",
      size: 917870,
      url: "https://api.github.com/repos/pphui8/khaos/git/blobs/8ba62cd8080193858e8367936d3449ff5fca7dac",
    },
    {
      path: "public",
      mode: "040000",
      type: "tree",
      size: 0,
      sha: "557b37c44d5cb352ff331f90e7fba0189cdfa65e",
      url: "https://api.github.com/repos/pphui8/khaos/git/trees/557b37c44d5cb352ff331f90e7fba0189cdfa65e",
    },
  ];
  
  return {
    props: { data: res },
  };
};

export default index;
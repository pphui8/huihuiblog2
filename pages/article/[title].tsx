import React from 'react'
import { GetServerSideProps } from "next";
import config from '../../config';
import { toast } from 'react-hot-toast';

type Props = {
  data: any;
}

type BlogRoot = {
  blog_root: string;
  status: number;
};

function index({ data }: Props) {
  console.log(data);
  return (
    <div className="article">
      <div className="container">
        {/* <Curfile cur_index={cur_index} cur_file={cur_file}></Curfile>
        <Article article={article}></Article> */}
      </div>
    </div>
  );
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
    })
  return {
    props: { data: res },
  };
};

//   function Curfile(props) {
//     const cur_index = props.cur_index;
//     const cur_file = props.cur_file;
//     return (
//       <ul className={isNight ? `index_night` : `index`} id="blogTreeContainer">
//         {cur_index.map((value) => {
//           return (
//             <li key={nanoid()} onClick={() => toPath(value.url)}>
//               <AiOutlineFolder />
//               {value.name}
//             </li>
//           );
//         })}
//         {cur_file.map((value) => {
//           return (
//             <li key={nanoid()} onClick={() => showFile(value.url, value.name)}>
//               <AiFillFile />
//               {value.name}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }

//   function Article(props) {
//     const article = props.article;
//     return (
//       <div
//         className={
//           isNight ? "article markdown-body-dark" : "article markdown-body"
//         }
//       >
//         <ReactMarkdown children={article}></ReactMarkdown>
//       </div>
//     );
//   }

export default index
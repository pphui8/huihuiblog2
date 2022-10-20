import React, { useEffect } from 'react'
import { GetServerSideProps } from "next";
import BlogContainer, { FiletreeList, FiletreeNode } from './components/BlogContainer';
import config from '../../config';
import { useRouter } from "next/router";
import { BlogProps } from './components/BlogContainer';

type Props = {
  data: FiletreeNode[] | undefined;
  blogRoot: string;
};

export type BlogRoot = {
  blog_root: string;
  status: number;
};

function index({ data, blogRoot }: Props) {
  const router = useRouter();
  useEffect(() => {
    if (data == undefined) {
      router.push("/error");
    }
  }, []);
  if(data == undefined) return <></>;
  return <BlogContainer data={data} blogRoot={blogRoot} />;
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const title = context.query.title;
  let tmpurl;
  const res: FiletreeNode[] | null = await fetch(`${config.baseURL}blog/${title}`)
    .then((res) => res.json())
    .then((res: BlogRoot) => {
      return res.blog_root.replace('"', "").replace('"', "");
    })
    .then(async (blogRoot) => {
      tmpurl = `https://api.github.com/repos/pphui8/${blogRoot}/git/trees/main`;
      return await fetch(tmpurl, {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${config.token}`,
        },
      })
        .then((res) => res.json())
        .then((res: FiletreeList) => {
          if(!res.tree) {
            return null;
          } else {
            return res.tree;
          }
        })
        .catch((err) => {
          return null;
        });
    })
    .catch((err) => {
      return null;
    });
  return {
    props: { data: res, blogRoot: tmpurl },
  };
};
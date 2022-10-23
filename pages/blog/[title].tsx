import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from "next";
import BlogContainer, { FiletreeList, FiletreeNode } from './components/BlogContainer';
import config from '../../config';
import { useRouter } from "next/router";
import { ParsedUrlQuery } from 'querystring';

type Props = {
  data: FiletreeNode[] | undefined;
  blogRoot: string;
  status: number;   // 200: success, 500: error
};

export type BlogRoot = {
  blog_root: string;
  status: number;
};

function Index({ data, blogRoot, status }: Props) {
  const router = useRouter();
  const blogData = data as FiletreeNode[];
  useEffect(() => {
    if (status === 500) {
      router.push("/error");
    }
  }, []);
  if (status === 500) return <></>;
  return <BlogContainer data={blogData} blogRoot={blogRoot} />;
}

export default Index;

type Res = {
  descript: string;
  id: number;
  name: string;
  tag: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: Res[] = await fetch(`${config.baseURL}index`)
    .then((res) => res.json())
  const paths = res.map((node) => ({
    params: { title: Buffer.from(node.name).toString("base64") },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  title: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { title } = context.params as IParams;
  const empty = [
    {
      path: "",
      mode: "",
      type: "",
      sha: "",
      size: 0,
      url: "",
    },
  ];
  const decodedTitle = Buffer.from(title, 'base64').toString("utf-8");
  let tmpurl = "";
  let res: FiletreeNode[] | null = await fetch(
    `${config.baseURL}blog/${decodedTitle}`
  )
    .then((res) => res.json())
    .then((res: BlogRoot) => {
      return res.blog_root.replace('"', "").replace('"', "");
    })
    .then(async (blogRoot) => {
      tmpurl = `https://api.github.com/repos/pphui8/${blogRoot}/git/trees/main`;
      return await fetch(tmpurl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Buffer.from(
            config.token,
            "base64"
          ).toString("utf-8")}`,
        },
      })
        .then((res) => res.json())
        .then((res: FiletreeList) => {
          if (!res.tree) {
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
    props: {
      data: res === null ? empty : res,
      blogRoot: tmpurl,
      status: res === null ? 500 : 200,
    },
    revalidate: 12000,
  };
};
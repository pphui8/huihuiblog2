"use client";

import React, { FC, useEffect, useState } from "react";
import BlogContainer, { FiletreeList } from "./BlogContainer";
import config from "../../../config";

interface pageProps {
  params: { title: string };
};

const Page: FC<pageProps> = ({ params }) => {
  const urlParam = decodeURIComponent(params.title);
  const title = Buffer.from(urlParam, "base64").toString("utf-8");
  const [files, setFiles] = useState<FiletreeList>();
  
  useEffect(() => {
    getData(title)
      .then((res) => {
        setFiles(res);        
      });
  }, []);

  return <BlogContainer data={files} />;
}

export default Page;

async function getData(title: string) {
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

import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import Profile from "./components/Profile";
import BlogContainer, { Res } from "./components/BlogContainer";
import config from '../../config';
import { GetStaticProps } from "next";

type Error = {
  error: string;
  status: number
}

type Props = {
  data: Res[] | Error;
};

const index = (props: Props) => {
  const { data } = props;
  const router = useRouter();
  useEffect(() => {
    if (data.toString() === '[object Object]') {
      router.push('/error');
    }
  }, []);

  return (
    <>
      <Profile />
      {data.toString() === "[object Object]" ? (
        <div>loading...</div>
      ) : (
        <BlogContainer data={data as Res[]} />
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const baseURL = config.baseURL;
  let res: Res | Error = await fetch(`${baseURL}index`)
    .then((res) => res.json())
    .catch((err) => {
      return {
        error: err,
        status: 500,
      };
    });
  return {
    props: { data: res },
    revalidate: 12000,
  };
};

export default index
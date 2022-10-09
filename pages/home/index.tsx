import React from 'react'
import Profile from "./components/Profile";
import BlogContainer, { Res } from "./components/BlogContainer";
import config from '../../config';
import { GetServerSideProps } from 'next';

type Props = {
  data: Res[];
}

const index = (props: Props) => {
  return (
    <div>
      <Profile />
      <BlogContainer data={props.data}></BlogContainer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const baseURL = config.baseURL;
  const res: Res = await fetch(`${baseURL}/index`).then((res) => res.json());
  return {
    props: { data: res },
  };
}

export default index
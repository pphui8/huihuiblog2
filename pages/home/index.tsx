import React from 'react'
import Profile from "./components/Profile";
import BlogContainer, { Res } from "./components/BlogContainer";
import config from '../../config';
import { GetServerSideProps } from 'next';
import styles from './home.module.css'

type Props = {
  data: Res[];
  error: string;
  status: number;
}

const index = (props: Props) => {
  if (props.status === 404) {
    return (
      <div className={styles.errorPageContainer}>
        <img
          src="https://img1.imgtp.com/2022/10/15/Eu34tPL2.png"
          alt="hakaseQAQ"
        />
        <h1>backend error</h1>
        <p>ごめんなさい(｡•́︿•̀｡)</p>
      </div>
    );
  } else {
    return (
      <div>
        <Profile />
        <BlogContainer data={props.data}></BlogContainer>
      </div>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const baseURL = config.baseURL;
  let res: Res = await fetch(`${baseURL}index`)
    .then((res) => res.json())
    .catch((err) => {});
  return {
    props: { data: res },
  };
}

export default index
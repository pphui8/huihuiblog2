import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import config from '../../../../config';
import styles from './Filing.module.css';
import { ThemeContext } from "../../../ThemeContext";

type Props = {}

type Filing = {
  test: number;
  note: number;
  blog: number;
  code: number;
};

let isShow = false;
const Index = (props: Props) => {
  const [tagCount, setTagCount] = useState<Filing>({
    test: 0,
    note: 0,
    blog: 0,
    code: 0,
  });
  const { isNight } = useContext(ThemeContext);
  const baseURL = config.baseURL;
  const getFiling = () => {
    if(isShow) return;
    fetch(baseURL + `filing`)
      .then((res) => res.json())
      .then((res: Filing) => setTagCount(res))
      .catch((err) => toast.error("request failed"));
    isShow = true;
  };

  useEffect(() => {
    getFiling();
  }, [isShow]);
  return (
    <div
      className={isNight ? styles.filingContainerNight : styles.filingContainer}
    >
      <h4 className={styles.filingTitle}>archive</h4>
      {Object.keys(tagCount).map((value, index) => {
        return (
          <p className={styles.filingCard} key={index}>
            {value + ` (` + tagCount[value as keyof typeof tagCount] + `)`}
          </p>
        );
      })}
    </div>
  );
};

export default Index;
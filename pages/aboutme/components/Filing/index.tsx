import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import config from '../../../../config';
import styles from './Filing.module.css';

type Props = {}

type Filing = {
  test: number;
  note: number;
  blog: number;
  code: number;
};

const index = (props: Props) => {
  const [tagCount, setTagCount] = useState<Filing>({
    test: 0,
    note: 0,
    blog: 0,
    code: 0,
  });
  const isNight = false;
  const baseURL = config.baseURL;
  const getFiling = () => {
    fetch(baseURL + `filing`)
      .then((res) => res.json())
      .then((res: Filing) => setTagCount(res))
      .catch((err) => toast.error("request failed"));
  };

  useEffect(() => {
    getFiling();
  }, []);
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
}

export default index
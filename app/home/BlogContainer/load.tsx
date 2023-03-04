import styles from "./load.module.css";

type Props = {};

const load = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.loading}>少女祈祷中...</p>
    </div>
  );
};

export default load;

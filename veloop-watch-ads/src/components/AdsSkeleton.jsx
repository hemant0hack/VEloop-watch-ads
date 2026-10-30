import styles from "./AdsSkeleton.module.css";

function AdsSkeleton() {
  return (
    <div className={styles.grid}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className={styles.card} key={item}>
          <div className={styles.top}>
            <div className={styles.icon} />
            <div className={styles.text}>
              <div className={styles.line} />
              <div className={styles.smallLine} />
            </div>
          </div>
          <div className={styles.description} />
          <div className={styles.button} />
        </div>
      ))}
    </div>
  );
}

export default AdsSkeleton;

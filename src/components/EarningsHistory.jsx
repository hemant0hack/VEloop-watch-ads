import { Coins, Clock } from "lucide-react";

import styles from "./EarningsHistory.module.css";

function EarningsHistory({ history }) {
  return (
    <section className={styles.historyCard}>
      <div className={styles.heading}>
        <div>
          <h3>Recent Earnings</h3>
          <p>Your latest completed advertisements</p>
        </div>
        <span>{history.length} Activities</span>
      </div>

      {history.length === 0 ? (
        <div className={styles.empty}>
          <Clock size={30} />
          <p>No earnings yet. Start watching ads!</p>
        </div>
      ) : (
        <div className={styles.list}>
          {history.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.icon}>
                <Coins size={20} />
              </div>
              <div className={styles.info}>
                <h4>{item.name}</h4>
                <p>
                  {item.category} · {item.time}
                </p>
              </div>
              <strong>+{item.reward} VEs</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default EarningsHistory;

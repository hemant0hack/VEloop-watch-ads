import { Target, CheckCircle2 } from "lucide-react";

import styles from "./DailyProgress.module.css";

function DailyProgress({ completed, target = 10 }) {
  const progress = Math.min((completed / target) * 100, 100);

  return (
    <section className={styles.card}>
      <div className={styles.heading}>
        <div>
          <h3>Daily Ad Progress</h3>
          <p>Complete your daily watching goal</p>
        </div>
        <Target size={25} />
      </div>

      <div className={styles.progressInfo}>
        <strong>
          {completed}/{target} Ads
        </strong>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.footer}>
        <CheckCircle2 size={16} />
        {completed >= target
          ? "Daily target completed!"
          : `${target - completed} more ads to reach your goal`}
      </div>
    </section>
  );
}

export default DailyProgress;

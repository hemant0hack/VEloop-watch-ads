import { Flame, Check } from "lucide-react";

import styles from "./DailyStreak.module.css";

const days = [
  { day: "Mon", done: true },
  { day: "Tue", done: true },
  { day: "Wed", done: true },
  { day: "Thu", done: true },
  { day: "Fri", done: true },
  { day: "Sat", done: false },
  { day: "Sun", done: false },
];

function DailyStreak() {
  return (
    <section className={styles.card}>
      <div className={styles.heading}>
        <div>
          <h3>Daily Streak</h3>
          <p>Stay consistent and keep earning!</p>
        </div>
        <div className={styles.flame}>
          <Flame size={22} fill="#f59e0b" />
          <strong>5 Days</strong>
        </div>
      </div>

      <div className={styles.days}>
        {days.map((item) => (
          <div className={styles.day} key={item.day}>
            <div className={item.done ? styles.completed : styles.pending}>
              {item.done ? <Check size={17} /> : "•"}
            </div>
            <span>{item.day}</span>
          </div>
        ))}
      </div>

      <div className={styles.streakMessage}>
        <Flame size={16} />
        Complete your daily activity to maintain your streak.
      </div>
    </section>
  );
}

export default DailyStreak;

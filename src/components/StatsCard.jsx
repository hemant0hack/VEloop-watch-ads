import styles from "./StatsCard.module.css";

function StatsCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.iconBox} style={{ "--icon-color": color }}>
          <Icon size={22} />
        </div>

        <span className={styles.indicator}>● Live</span>
      </div>

      <h3>{value}</h3>
      <p>{title}</p>
      <small>{subtitle}</small>
    </div>
  );
}

export default StatsCard;

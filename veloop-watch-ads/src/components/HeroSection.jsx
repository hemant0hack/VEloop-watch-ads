import { Play, Coins, TrendingUp, Sparkles } from "lucide-react";

import styles from "./HeroSection.module.css";

function HeroSection() {
  const todayEarnings = 96;
  const dailyTarget = 150;
  const progress = Math.min((todayEarnings / dailyTarget) * 100, 100);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.tag}>
          <Sparkles size={14} />
          REWARDS ARE WAITING
        </div>

        <h1>
          Watch Ads,
          <br />
          <span>Earn Real Rewards.</span>
        </h1>

        <p>
          Watch short advertisements, collect VEs and turn your time into real
          rewards.
        </p>

        <div className={styles.earning}>
          <Coins size={21} />
          <div>
            <small>Today&apos;s Earnings</small>
            <h3>{todayEarnings} VEs</h3>
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressText}>
            <span>Daily Earning Progress</span>
            <strong>
              {todayEarnings}/{dailyTarget} VEs
            </strong>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>

          <small>{Math.round(progress)}% of daily goal completed</small>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.glow} />

        <div className={styles.videoCard}>
          <Play size={55} fill="white" />
        </div>

        <div className={`${styles.coin} ${styles.coinOne}`}>
          <Coins size={35} />
        </div>

        <div className={`${styles.coin} ${styles.coinTwo}`}>
          <Coins size={25} />
        </div>

        <div className={styles.rewardBadge}>
          <TrendingUp size={17} />
          +38 VEs
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

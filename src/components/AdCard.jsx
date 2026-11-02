import { Play, Clock, CheckCircle2, Sparkles } from "lucide-react";

import styles from "./AdCard.module.css";

function AdCard({ ad, onWatch }) {
  const Icon = ad.icon;
  const completed = ad.status === "completed";

  return (
    <article className={styles.card}>
      <div className={styles.imageArea} style={{ "--ad-color": ad.color }}>
        {ad.sponsored && <span className={styles.sponsored}>Sponsored</span>}

        {ad.limited && (
          <span className={styles.limited}>
            <Sparkles size={11} />
            Limited Time
          </span>
        )}

        <div className={styles.adIcon}>
          <Icon size={65} strokeWidth={1.5} />
        </div>

        <div className={styles.reward}>+{ad.reward} VEs</div>
      </div>

      <div className={styles.details}>
        <div className={styles.titleRow}>
          <div>
            <h3>{ad.name}</h3>
            <span>{ad.category}</span>
          </div>

          {completed ? (
            <CheckCircle2 color="#22c55e" size={20} />
          ) : (
            <span className={styles.available}>● Available</span>
          )}
        </div>

        <p className={styles.description}>{ad.description}</p>

        <div className={styles.meta}>
          <span>
            <Clock size={14} />
            {ad.duration} sec
          </span>

          <strong>+{ad.reward} VEs</strong>
        </div>

        <button
          type="button"
          className={`${styles.watchButton} ${
            completed ? styles.completed : ""
          }`}
          disabled={completed}
          onClick={() => onWatch(ad)}
        >
          {completed ? (
            <>
              <CheckCircle2 size={16} />
              Completed
            </>
          ) : (
            <>
              <Play size={16} fill="currentColor" />
              Watch Advertisement
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default AdCard;

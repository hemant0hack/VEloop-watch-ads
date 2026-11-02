import { MonitorX, RefreshCw, Trophy } from "lucide-react";

import styles from "./EmptyState.module.css";

function EmptyState({ allCompleted, onReset }) {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>
        {allCompleted ? <Trophy size={45} /> : <MonitorX size={45} />}
      </div>

      <h2>{allCompleted ? "Amazing! All Ads Completed" : "No Ads Available"}</h2>

      <p>
        {allCompleted
          ? "You have completed all available advertisements. Great work!"
          : "There are currently no advertisements available. Please check again later."}
      </p>

      {allCompleted && (
        <button type="button" onClick={onReset}>
          <RefreshCw size={17} />
          Reset Demo Ads
        </button>
      )}
    </section>
  );
}

export default EmptyState;

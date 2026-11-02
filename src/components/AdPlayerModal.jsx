import { useEffect, useRef, useState } from "react";
import { Play, Clock, X, Coins, CheckCircle2 } from "lucide-react";

import styles from "./AdPlayerModal.module.css";

function AdPlayerModal({ ad, onClose, onComplete }) {
  const [remaining, setRemaining] = useState(ad.duration);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return undefined;

    const focusables = modal.querySelectorAll(
      "button,[href],input,select,textarea,[tabindex]:not([tabindex='-1'])",
    );
    focusables[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!isPlaying || finished) return undefined;

    const timer = setInterval(() => {
      setRemaining((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          setIsPlaying(false);
          setFinished(true);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, finished]);

  useEffect(() => {
    if (finished) {
      onComplete(ad);
    }
  }, [finished, ad, onComplete]);

  const progress = ((ad.duration - remaining) / ad.duration) * 100;

  return (
    <div className={styles.overlay}>
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="Watch advertisement"
      >
        <div className={styles.header}>
          <div>
            <small>ADVERTISEMENT PLAYER</small>
            <h2>{ad.name}</h2>
          </div>

          <button type="button" onClick={onClose} aria-label="Close player">
            <X size={20} />
          </button>
        </div>

        <div className={styles.player}>
          {finished ? (
            <div className={styles.successContent}>
              <div className={styles.successIcon}>
                <CheckCircle2 size={55} />
              </div>
              <h3>Reward Successfully Earned!</h3>
              <p>Congratulations! Your reward is ready.</p>
              <div className={styles.rewardCelebration}>+{ad.reward} VEs</div>
            </div>
          ) : (
            <>
              <div className={styles.playIcon}>
                <Play size={45} fill="white" />
              </div>
              <h3>{isPlaying ? "Advertisement Playing" : "Ready to Watch"}</h3>
              <p>Complete the advertisement to earn rewards.</p>
            </>
          )}
        </div>

        <div className={styles.timerSection}>
          <div className={styles.timerText}>
            <span>
              <Clock size={15} />
              Time Remaining
            </span>
            <strong>{remaining}s</strong>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className={styles.rewardBox}>
          <Coins size={25} />
          <div>
            <small>Your Reward</small>
            <h3>+{ad.reward} VEs</h3>
          </div>
        </div>

        {finished ? (
          <button type="button" className={styles.completeButton} onClick={onClose}>
            <CheckCircle2 size={18} />
            Done
          </button>
        ) : (
          <button
            type="button"
            className={styles.startButton}
            disabled={isPlaying}
            onClick={() => setIsPlaying(true)}
          >
            {isPlaying ? "Advertisement Playing..." : "Start Watching"}
          </button>
        )}

        <p className={styles.disclaimer}>
          Demo advertisement player using a simulated timer.
        </p>
      </div>
    </div>
  );
}

export default AdPlayerModal;

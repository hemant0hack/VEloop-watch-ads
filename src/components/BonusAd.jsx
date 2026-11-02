import { Gift, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./BonusAd.module.css";

function BonusAd() {
  return (
    <section className={styles.card}>
      <div className={styles.icon}>
        <Gift size={26} />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>
          <Sparkles size={12} />
          LIMITED-TIME BONUS
        </span>
        <h3>Earn an extra 25 VEs</h3>
        <p>Watch any 3 advertisements today to unlock your bonus.</p>
      </div>
      <Link to="/watchAd-bonus" className={styles.action}>
        View Offer
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}

export default BonusAd;

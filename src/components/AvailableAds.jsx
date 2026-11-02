import AdCard from "./AdCard";
import styles from "./AvailableAds.module.css";

function AvailableAds({ ads, onWatch }) {
  const availableCount = ads.filter((ad) => ad.status === "available").length;

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <div>
          <h2>Available Advertisements</h2>
          <p>Watch ads and earn exciting rewards.</p>
        </div>

        <span>{availableCount} Ads Available</span>
      </div>

      <div className={styles.grid}>
        {ads.map((ad) => (
          <AdCard key={ad.id} ad={ad} onWatch={onWatch} />
        ))}
      </div>
    </section>
  );
}

export default AvailableAds;

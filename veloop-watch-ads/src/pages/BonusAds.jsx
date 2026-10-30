import { Link } from "react-router-dom";
import { Gift, ArrowLeft, Coins } from "lucide-react";

import "./BonusAds.css";

function BonusAds() {
  return (
    <main className="main-content">
      <div className="dashboard-content">
        <Link to="/" className="bonus-back-link">
          <ArrowLeft size={16} />
          Back to Watch Ads
        </Link>

        <div className="bonus-page">
          <Gift size={55} color="#f5b942" />
          <h1>Bonus Ads</h1>
          <p>
            Watch limited-time bonus advertisements and earn extra rewards.
          </p>

          <div className="bonus-reward">
            <Coins size={22} />
            <span>Earn up to 100 Bonus VEs</span>
          </div>

          <p className="bonus-empty">
            No bonus advertisements available right now. Please check again
            later.
          </p>
        </div>
      </div>
    </main>
  );
}

export default BonusAds;

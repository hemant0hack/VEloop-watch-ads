import { Menu, Bell, ChevronDown, Coins } from "lucide-react";

import styles from "./Navbar.module.css";

function Navbar({ onMenuClick, balance }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu size={23} />
        </button>

        <div>
          <h2>Watch Ads</h2>
          <p>Watch advertisements and earn VEs</p>
        </div>
      </div>

      <div className={styles.right}>
        <button
          type="button"
          className={styles.notification}
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span />
        </button>

        <button type="button" className={styles.balance}>
          <Coins size={18} />
          <strong>{balance.toLocaleString("en-IN")} VEs</strong>
          <ChevronDown size={15} />
        </button>

        <div className={styles.avatar}>SM</div>
      </div>
    </header>
  );
}

export default Navbar;

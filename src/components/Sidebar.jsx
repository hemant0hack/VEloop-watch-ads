import {
  LayoutDashboard,
  PlayCircle,
  Gift,
  Wallet,
  History,
  UserRound,
  Settings,
  Headset,
  Crown,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Watch Ads", icon: PlayCircle },
  { name: "Rewards", icon: Gift },
  { name: "Wallet", icon: Wallet },
  { name: "History", icon: History },
  { name: "Profile", icon: UserRound },
  { name: "Settings", icon: Settings },
  { name: "Help & Support", icon: Headset },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      />

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <div>
            <h3>VÉLOOP</h3>
            <span>REWARDS</span>
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <p className={styles.menuLabel}>MAIN MENU</p>

        <nav className={styles.navigation}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = item.name === "Watch Ads";

            return (
              <Link
                to="/"
                key={item.name}
                onClick={onClose}
                className={`${styles.menuItem} ${
                  active ? styles.active : ""
                }`}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.upgrade}>
          <Crown size={25} />
          <h4>Go Premium</h4>
          <p>Enjoy more rewards and exclusive offers.</p>
          <button type="button">Upgrade Now →</button>
        </div>

        <div className={styles.footer}>
          © 2026 VELOOP Rewards
          <br />
          All rights reserved.
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

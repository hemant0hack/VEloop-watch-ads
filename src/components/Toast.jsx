import { CheckCircle } from "lucide-react";

import styles from "./Toast.module.css";

function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className={styles.toast} role="status">
      <CheckCircle size={22} />
      <span>{message}</span>
    </div>
  );
}

export default Toast;

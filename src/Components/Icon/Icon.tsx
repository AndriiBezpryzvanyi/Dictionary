import styles from "./icon.module.scss";
import { ICONS } from "./constants";

const Icon = (name: "brain" | "plus" | "read", size: number, color: string) => {
  return (
    <div className={styles.container} style={{ color: color }}>
    </div>
  );
};

export default Icon;

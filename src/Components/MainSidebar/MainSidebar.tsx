import { ReactComponent as BrainIcon } from "../Assets/icons/brain.svg";
import { ReactComponent as PlusIcon } from "../Assets/icons/plus.svg";
import { ReactComponent as ReadIcon } from "../Assets/icons/read.svg";
import styles from "./mainSidebar.module.scss";

const MainSidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <BrainIcon />
        <span>Повторення</span>
      </div>
      <div className={styles.button}>
        <PlusIcon />
        <span>Додати слово</span>
      </div>
      <div className={styles.button}>
        <ReadIcon />
        <span>Читання</span>
      </div>
    </div>
  );
};

export default MainSidebar;

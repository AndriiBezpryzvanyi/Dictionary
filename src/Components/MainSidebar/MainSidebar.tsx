import { ReactComponent as TrainingIcon } from "../../Assets/icons/training.svg";
import { ReactComponent as WordsIcon } from "../../Assets/icons/letters.svg";
import styles from "./mainSidebar.module.scss";

const MainSidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <WordsIcon />
        <span>Слова</span>
      </div>
      <div className={styles.button}>
        <TrainingIcon />
        <span>Тренування</span>
      </div>
    </div>
  );
};

export default MainSidebar;

import { useState } from "react";
import styles from "./wordPage.module.scss";

const AddWordPage = () => {
  const [valueWord, setValueWord] = useState("");
  const [translateWord, setTranslateWord] = useState("");

  const handleAddWord = () => {
    if (valueWord && translateWord) {
      const words = localStorage.getItem("w") || "";
      localStorage.setItem("w", `${valueWord}~${translateWord}*0*` + words);
      setValueWord("");
      setTranslateWord("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.addWordBlock}>
        <div className={styles.inputsBlock}>
          <input
            placeholder="Слово англійською"
            value={valueWord}
            onChange={(e) => setValueWord(e.target.value)}
            className={styles.input}
          />
          <div className={styles.divider} />
          <input
            placeholder="Слово українською"
            value={translateWord}
            onChange={(e) => setTranslateWord(e.target.value)}
            className={styles.input}
          />
        </div>
        <div onClick={handleAddWord} className={styles.addButton}>
          Додати до словника
        </div>
      </div>
    </div>
  );
};

export default AddWordPage;

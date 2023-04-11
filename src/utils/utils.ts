export const normalizeCase = (word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase();

export const getWordsFromLocaleStorage = () => {
  return (
    localStorage
      .getItem("w")
      ?.split(".")
      ?.map((wordsInLS) => {
        const splitWord = wordsInLS.split("*");
        return {
          word: splitWord[0],
          translate: splitWord[1],
          mark: splitWord[2],
        };
      })
      .filter((item) => item.word) ?? [{ word: "", translate: "", mark: "" }]
  );
};

export const addWordsToLocalStorage = (word: Word) =>
  localStorage.setItem(
    "w",
    `${normalizeCase(word.word)}*${normalizeCase(word.translate)}*${word.mark}.` + getWordsFromLocaleStorage(),
  );

export const updateWordInLocaleStorage = (word: Word) => {
  const currentWords = getWordsFromLocaleStorage().filter((item) => item.word !== word.word);
  localStorage.setItem(
    "w",
    [word, ...currentWords].map((item) => `${item.word}*${item.translate}*${item.mark}`).join("."),
  );
};

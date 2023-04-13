export const normalizeCase = (word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase();

export const normalizeCaseForWord = (word: Word) => ({
  word: normalizeCase(word.word.trim()),
  translate: normalizeCase(word.translate.trim()),
  mark: word.mark,
});

export const getStringWordsFromLocaleStorage = () => localStorage.getItem("w") || "";

export const getWordsFromLocaleStorage = () => {
  return (
    getStringWordsFromLocaleStorage()
      .split(".")
      .map((wordsInLS) => {
        const splitWord = wordsInLS.split("*");
        return {
          word: splitWord[0],
          translate: splitWord[1],
          mark: splitWord[2],
        };
      })
      .filter((item) => item.word) || [{ word: "", translate: "", mark: "" }]
  );
};

export const addWordToLocalStorage = (word: Word) =>
  localStorage.setItem(
    "w",
    `${normalizeCase(word.word.trim())}*${normalizeCase(word.translate.trim())}*${word.mark}.` +
      getStringWordsFromLocaleStorage(),
  );

export const updateWordInLocaleStorage = (word: Word) => {
  const currentWords = getWordsFromLocaleStorage().filter((item) => item.word !== word.word);
  localStorage.setItem(
    "w",
    [normalizeCaseForWord(word), ...currentWords]
      .map((item) => `${item.word}*${item.translate}*${item.mark}`)
      .join("."),
  );
};

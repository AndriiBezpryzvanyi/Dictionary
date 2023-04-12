import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { normalizeCase, getWordsFromLocaleStorage, updateWordInLocaleStorage } from "../../utils/utils";

const TrainingPage = () => {
  const [passedWords, setPassedWords] = useState<Word[]>([]);

  const wordsFromLocalStorage = getWordsFromLocaleStorage();
  const [currentWord, setCurrentWord] = useState<Word>(wordsFromLocalStorage[0]);

  const validateSchema = Yup.object().shape({
    translate: Yup.string()
      .required()
      .test("is-number", "", (value) => normalizeCase(value.trim()) === currentWord.translate),
  });

  const formik = useFormik({
    initialValues: {
      word: currentWord?.word,
      translate: "",
      mark: currentWord?.mark,
    },
    onSubmit: handleAnswer,
    validationSchema: validateSchema,
  });

  const getWord = () => {
    const indexCurrentWord = wordsFromLocalStorage.findIndex((word: Word) => word.word === currentWord.word);
    const newWord =
      passedWords.length + 1 === wordsFromLocalStorage?.length
        ? { word: "", translate: "", mark: "" }
        : wordsFromLocalStorage[indexCurrentWord + 1];

    setCurrentWord(newWord);
    formik.setFieldValue("word", newWord.word);
    formik.setFieldValue("translate", "");
    formik.setFieldValue("mark", newWord.mark);
  };

  function handleAnswer(value: Word) {
    const updatedWord = { ...value, mark: +value.mark + 1 };
    getWord();
    setPassedWords([...passedWords, updatedWord]);
    updateWordInLocaleStorage(updatedWord);
    formik.setFieldTouched("translate", false);
  }

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <form onSubmit={formik.handleSubmit}>
        {currentWord.word ? (
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: "7px",
              mt: 3,
              height: 'calc(100vh - 40px)',
              [theme.breakpoints.down("sm")]: { flexDirection: "column" },
            })}
          >
            <Typography>{formik.values.word}</Typography>

            <Box
              sx={(theme) => ({
                width: "15px",
                height: "5px",
                background: "grey",
                borderRadius: "20px",
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              })}
            />

            <TextField
              name="translate"
              value={formik.values.translate}
              onChange={formik.handleChange}
              sx={{ input: { color: "black" } }}
              error={formik.touched.word && Boolean(formik.errors.translate)}
            />
          </Box>
        ) : (
          <Box>
            <Typography>"Більше нема слів для повторення"</Typography>
            <Button
              onClick={() => {
                setPassedWords([]);
                getWord();
              }}
            >
              Заново
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default TrainingPage;

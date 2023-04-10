import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Word {
  word: string;
  translate: string;
  mark: string | number;
}

const wordsFromLocalStorage = localStorage
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
  .filter((item) => item.word) ?? [{ word: "", translate: "", mark: "" }];

const TrainingPage = () => {
  const [passedWords, setPassedWords] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<Word>(wordsFromLocalStorage[0]);

  const validateSchema = Yup.object().shape({
    translate: Yup.string()
      .required()
      .test("is-number", "!", (value) => value === currentWord.translate),
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
    const indexCurrentWord = wordsFromLocalStorage.findIndex((word) => word.word === currentWord.word);
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
    getWord();
    setPassedWords([...passedWords, { ...value, mark: +value.mark + 1 }]);
    formik.setFieldTouched("translate", false);
  }

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        {currentWord.word ? (
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: "7px",
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

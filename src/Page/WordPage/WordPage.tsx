import { Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useRef } from "react";
import { addWordToLocalStorage } from "../../utils/utils";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
  word: Yup.string()
    .required("Це поле обов'язкове")
    .test("is-number", "Тільки текст", (value) => !/\d/.test(value)),
  translate: Yup.string()
    .required("Це поле обов'язкове")
    .test("is-number", "Тільки текст", (value) => !/\d/.test(value)),
});

const AddWordPage = () => {
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const handleAddWord = (value: Omit<Word, "mark">) => {
    addWordToLocalStorage({ ...value, mark: 0 });
    formik.resetForm();
    firstFieldRef.current?.focus();
    console.log(firstFieldRef.current);
  };

  const formik = useFormik({
    initialValues: { word: "", translate: "" },
    onSubmit: handleAddWord,
    validationSchema: validateSchema,
  });

  return (
    <Box width="100%">
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            margin: "30px auto 0 auto",
            width: "450px",
            gap: 2,
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "calc(100vh - 40px)",
            },
          })}
        >
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                gap: 2,
              },
            })}
          >
            <TextField
              inputRef={firstFieldRef}
              placeholder="Слово англійською"
              name="word"
              value={formik.values.word}
              onChange={formik.handleChange}
              sx={(theme) => ({ input: { color: "black" }, [theme.breakpoints.down("sm")]: { width: "90%" } })}
              error={formik.touched.word && Boolean(formik.errors.word)}
              helperText={formik.touched.word && formik.errors.word}
            />
            <Box
              sx={(theme) => ({
                width: "20px",
                height: "4px",
                backgroundColor: "lightgrey",
                borderRadius: "20px",
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              })}
            />
            <TextField
              placeholder="Слово українською"
              name="translate"
              value={formik.values.translate}
              onChange={formik.handleChange}
              sx={(theme) => ({ input: { color: "black" }, [theme.breakpoints.down("sm")]: { width: "90%" } })}
              error={formik.touched.translate && Boolean(formik.errors.translate)}
              helperText={formik.touched.translate && formik.errors.translate}
            />
          </Box>
          <Button type="submit">Додати до словника</Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddWordPage;

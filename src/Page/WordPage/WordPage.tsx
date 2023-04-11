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
    console.log(firstFieldRef.current)
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
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          margin="30px auto 0 auto"
          height="100px"
          width="450px"
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <TextField
              inputRef={firstFieldRef}
              placeholder="Слово англійською"
              name="word"
              value={formik.values.word}
              onChange={formik.handleChange}
              sx={{ input: { color: "black" } }}
              error={formik.touched.word && Boolean(formik.errors.word)}
              helperText={formik.touched.word && formik.errors.word}
            />
            <Box
              sx={{
                width: "20px",
                height: "4px",
                backgroundColor: "lightgrey",
                borderRadius: "20px",
              }}
            />
            <TextField
              placeholder="Слово українською"
              name="translate"
              value={formik.values.translate}
              onChange={formik.handleChange}
              sx={{ input: { color: "black" } }}
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

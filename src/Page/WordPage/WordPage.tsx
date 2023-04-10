import { Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";

interface AddedWord {
  word: string;
  translate: string;
}

const AddWordPage = () => {
  const handleAddWord = (value: AddedWord) => {
    if (value.word && value.translate) {
      const words = localStorage.getItem("w") || "";
      localStorage.setItem("w", `${value.word}*${value.translate}*0.` + words);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: { word: "", translate: "" },
    onSubmit: handleAddWord,
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
              placeholder="Слово англійською"
              name="word"
              value={formik.values.word}
              onChange={formik.handleChange}
              sx={{ input: { color: "black" } }}
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
            />
          </Box>
          <Button type="submit">Додати до словника</Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddWordPage;

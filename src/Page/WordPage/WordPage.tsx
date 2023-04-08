import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

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
    <Box width="100%">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        margin="30px auto 0 auto"
        height="100px"
        width="450px"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <TextField
            placeholder="Слово англійською"
            value={valueWord}
            onChange={(e) => setValueWord(e.target.value)}
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
            value={translateWord}
            onChange={(e) => setTranslateWord(e.target.value)}
          />
        </Box>
        <Button onClick={handleAddWord}>Додати до словника</Button>
      </Box>
    </Box>
  );
};

export default AddWordPage;

import { ThemeProvider } from "@mui/material/styles";
import MainLayer from "./Components/MainLayer/MainLayer";
import AddWordPage from "./Page/WordPage/WordPage";
import theme from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayer>
        <AddWordPage />
      </MainLayer>
    </ThemeProvider>
  );
}

export default App;

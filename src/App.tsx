import { ThemeProvider } from "@mui/material/styles";
import MainLayer from "./Components/MainLayer/MainLayer";
import AddWordPage from "./Page/WordPage/WordPage";
import theme from "./Theme/theme";
import TrainingPage from "./Page/TrainingPage/TrainingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayer>
        <AddWordPage />
        {/* <TrainingPage /> */}
      </MainLayer>
    </ThemeProvider>
  );
}

export default App;

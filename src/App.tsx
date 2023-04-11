import { ThemeProvider } from "@mui/material/styles";
import MainLayer from "./Components/MainLayer/MainLayer";
import AddWordPage from "./Page/WordPage/WordPage";
import theme from "./Theme/theme";
import TrainingPage from "./Page/TrainingPage/TrainingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_TRAINING_PATH, ROUTE_WORDS_PATH } from "./utils/contstants";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayer>
          <Routes>
            <Route path={ROUTE_WORDS_PATH} element={<AddWordPage />}/>
            <Route path={ROUTE_TRAINING_PATH} element={<TrainingPage />}/>
          </Routes>
          {/* <AddWordPage /> */}
          {/* <TrainingPage /> */}
        </MainLayer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

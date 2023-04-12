import { ThemeProvider } from "@mui/material/styles";
import MainLayer from "./Components/MainLayout/MainLayout";
import AddWordPage from "./Page/WordPage/WordPage";
import theme from "./Theme/theme";
import TrainingPage from "./Page/TrainingPage/TrainingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTE_TRAINING_PATH, ROUTE_WORDS_PATH } from "./utils/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayer>
          <Routes>
            <Route path={ROUTE_WORDS_PATH} element={<AddWordPage />} />
            <Route path={ROUTE_TRAINING_PATH} element={<TrainingPage />} />
            <Route path="*" element={<Navigate to={ROUTE_WORDS_PATH} replace />} />
          </Routes>
        </MainLayer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

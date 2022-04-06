import './App.css';
import {MainPage} from "./pages/Main/MainPage";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Router = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/*"} element={<MainPage />} />
          </Routes>
      </BrowserRouter>
  )
}

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;

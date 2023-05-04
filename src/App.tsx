import { ThemeProvider } from "@mui/material";
import Router from "./router/Router";
import Theme from "./config/Theme";
import "./app.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

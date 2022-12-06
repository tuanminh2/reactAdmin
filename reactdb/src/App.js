import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Topbar } from "./scenes/global/Topbar.js";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>

        <div className="app">
          <main className="content">
            <Topbar></Topbar>
          </main>
        </div>
      </ThemeProvider>

    </ColorModeContext.Provider>
  );
}

export default App;

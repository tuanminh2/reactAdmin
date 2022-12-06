import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Topbar } from "./scenes/global/Topbar.js";
import Dashboard from "./scenes/dashboard"
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar.js";
import { myTheme } from "./theme.js";
function App() {
  const theme = myTheme();
  const [isSidebar, setIsSidebar] = useState(true);
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />

          </Routes>
        </main>
      </div>
    </ThemeProvider>

  );
}

export default App;

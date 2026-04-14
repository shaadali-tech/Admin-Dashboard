import React, { useState, useMemo } from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";

import GetTheme from "./Componennts/GetTheme";
import Sidebar from "./Componennts/Sidebar";
import Navbar from "./Componennts/Navbar";
import Cards from "./Componennts/Cards";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () => GetTheme(darkMode ? "dark" : "light"),
    [darkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1 }}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Cards />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

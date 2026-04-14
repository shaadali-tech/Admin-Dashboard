import React from "react";
import { Box, Drawer, AppBar, Toolbar, Typography, Card } from "@mui/material";
import Sidebar from "./Componennts/Sidebar";
import Navbar from "./Componennts/Navbar";
import Cards from "./Componennts/Cards";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Cards />
      </Box>
    </Box>
  );
}

export default App;

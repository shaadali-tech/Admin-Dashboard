import { createTheme } from "@mui/material/styles";

const GetTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // 🌞 Light mode
            background: {
              default: "#f5f5f5",
              paper: "#ffffff",
            },
          }
        : {
            // 🌙 Dark mode
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
          }),
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });

export default GetTheme;

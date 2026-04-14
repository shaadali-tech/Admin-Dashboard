import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Avatar,
  Switch,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT: Title */}
        <Typography variant="h6" fontWeight="bold">
          Admin Dashboard
        </Typography>

        {/* CENTER: Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            px: 2,
            py: 0.5,
            borderRadius: "8px",
            width: "40%",
          }}
        >
          <SearchIcon />
          <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
        </Box>

        {/* RIGHT: Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Dark Mode Toggle */}
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

          {/* Notifications */}
          <IconButton>
            <NotificationsIcon />
          </IconButton>

          {/* Settings */}
          <IconButton>
            <SettingsIcon />
          </IconButton>

          {/* Profile */}
          <Avatar
            alt="User"
            src="https://i.pravatar.cc/40"
            sx={{ width: 32, height: 32 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

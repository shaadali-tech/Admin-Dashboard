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
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "auto 1fr auto" },
          alignItems: "center",
          gap: 2,
          py: 1,
        }}
      >
        {/* LEFT: Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            flexShrink: 0,
            fontSize: { xs: "1rem", sm: "1.25rem" },
            gridColumn: { xs: "1 / -1", md: "1 / 2" },
          }}
        >
          Admin Dashboard
        </Typography>

        {/* CENTER: Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "background.default",
            px: 2,
            py: 0.5,
            borderRadius: "8px",
            width: "100%",
            minWidth: 0,
            gridColumn: { xs: "1 / -1", md: "2 / 3" },
          }}
        >
          <SearchIcon />
          <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
        </Box>

        {/* RIGHT: Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            width: { xs: "100%", md: "auto" },
            gridColumn: { xs: "1 / -1", md: "3 / 4" },
          }}
        >
          {/* Dark Mode Toggle */}
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            sx={{ display: { xs: "none", sm: "inline-flex" } }}
          />

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

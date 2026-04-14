import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const drawerWidth = 240;

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const menuItems = ["Dashboard", "Users", "Settings"];

  const drawerContent = (
    <Box sx={{ width: drawerWidth, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Admin Panel
      </Typography>

      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* 🔥 Mobile Menu Button */}
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 72,
            left: 10,
            zIndex: 1300,
            backgroundColor: "background.paper",
            boxShadow: 1,
            "&:hover": { backgroundColor: "background.default" },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* ✅ Desktop Sidebar */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}

      {/* ✅ Mobile Sidebar */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}

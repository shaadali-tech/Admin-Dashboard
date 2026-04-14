import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const data = [
  {
    title: "Users",
    value: "1,245",
    icon: <PeopleIcon />,
    color: "#1976d2",
  },
  {
    title: "Orders",
    value: "320",
    icon: <ShoppingCartIcon />,
    color: "#2e7d32",
  },
  {
    title: "Revenue",
    value: "$12,400",
    icon: <AttachMoneyIcon />,
    color: "#ed6c02",
  },
  {
    title: "Growth",
    value: "15%",
    icon: <TrendingUpIcon />,
    color: "#9c27b0",
  },
];

export default function Overviewcards() {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <CardContent>
              {/* Top Section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography color="text.secondary">{item.title}</Typography>

                <Box
                  sx={{
                    backgroundColor: item.color,
                    color: "#fff",
                    borderRadius: "50%",
                    p: 1,
                  }}
                >
                  {item.icon}
                </Box>
              </Box>

              {/* Value */}
              <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

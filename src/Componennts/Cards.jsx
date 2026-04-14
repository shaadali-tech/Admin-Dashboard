import { Box, Typography } from "@mui/material";
import Overviewcards from "./Overviewcards";
import DataTable from "./DataTable";
import Charts from "./Charts";

const Cards = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Welcome to Admin Dashboard
      </Typography>

      <Overviewcards />
      <DataTable />
      <Charts />
    </Box>
  );
};

export default Cards;

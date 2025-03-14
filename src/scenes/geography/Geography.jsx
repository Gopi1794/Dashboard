import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box P="20px">
      <Header title="Geo Chart" subtitle="Simple Geo Chart" />
      <Box
        height="80vh"
        sx={{
          border: " 1px solid #ffffff",
        }}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;

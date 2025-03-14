import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box P="40px">
      <Header title="Geo Chart" subtitle="Simple Geo Chart" />
      <Box height="100vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;

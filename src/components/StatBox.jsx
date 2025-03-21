import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "../components/ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m=" 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.gray[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px" mr="7px">
        <Typography variant="h4" sx={{ color: colors.modeColor[100] }}>
          {subtitle}
        </Typography>
        <Typography variant="h4" sx={{ color: colors.modeColor[100] }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;

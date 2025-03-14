import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="22px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion
        sx={{
          backgroundColor: colors.primary[400],
          backdropFilter: "blur(25px)",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[900]} variant="h5">
            How do I manage user accounts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maiores architecto fugit ut voluptatibus labore voluptatem non iusto
            fuga tenetur alias harum nam hic ipsam iste distinctio, quis
            ducimus! Aliquam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: colors.primary[400],
          backdropFilter: "blur(25px)",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[900]} variant="h5">
            How can I generate reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maiores architecto fugit ut voluptatibus labore voluptatem non iusto
            fuga tenetur alias harum nam hic ipsam iste distinctio, quis
            ducimus! Aliquam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: colors.primary[400],
          backdropFilter: "blur(25px)",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[900]} variant="h5">
            What permissions can I assign to users?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maiores architecto fugit ut voluptatibus labore voluptatem non iusto
            fuga tenetur alias harum nam hic ipsam iste distinctio, quis
            ducimus! Aliquam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: colors.primary[400],
          backdropFilter: "blur(25px)",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[900]} variant="h5">
            How do I configure system settings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maiores architecto fugit ut voluptatibus labore voluptatem non iusto
            fuga tenetur alias harum nam hic ipsam iste distinctio, quis
            ducimus! Aliquam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: colors.primary[400],
          backdropFilter: "blur(25px)",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[900]} variant="h5">
            How do I monitor system activity?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maiores architecto fugit ut voluptatibus labore voluptatem non iusto
            fuga tenetur alias harum nam hic ipsam iste distinctio, quis
            ducimus! Aliquam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

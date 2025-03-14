import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import DownloadIcon from "@mui/icons-material/Download";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="30px 0 30px 0">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m="20px 0 20px 0"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundImage:
                theme.palette.mode === "dark"
                  ? "linear-gradient(90deg, rgba(82,23,133,1) 55%, rgba(19,5,31,1) 100%)"
                  : "linear-gradient(90deg, rgba(97,205,187,1) 9%, rgba(27,155,134,1) 74%)",
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              transition: "0.5s",
              "&:hover": {
                filter: "brightness(1.2)",
              },
            }}
          >
            <DownloadIcon sx={{ mr: "10px" }} />
            <Typography variant="h4">Download Reports</Typography>
          </Button>
        </Box>
      </Box>

      {/* GRID */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="130px"
        gap="20px"
      >
        {/* BOX ONE */}
        <Box
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",

            "&:hover": {
              backgroundImage:
                theme.palette.mode === "dark"
                  ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 42%, rgba(82,23,133,1) 100%)"
                  : "linear-gradient(315deg, rgba(100, 98,98,0.2) 42%,rgba(27, 155, 134)100%)",
              boxShadow: "0px 0px 12px 2px rgba(97, 97, 97, 0.5);",
            },
          }}
        >
          <StatBox
            title="16,500"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            borderRadius="13px"
            icon={
              <EmailIcon sx={{ color: colors.gray[100], fontSize: "26px" }} />
            }
          />
        </Box>

        {/* BOX TWO */}
        <Box
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",

            "&:hover": {
              backgroundImage:
                theme.palette.mode === "dark"
                  ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 42%, rgba(82,23,133,1) 100%)"
                  : "linear-gradient(315deg, rgba(100, 98,98,0.2) 42%,rgba(27, 155, 134)100%)",
              boxShadow: "0px 0px 12px 2px rgba(97, 97, 97, 0.5);",
            },
          }}
        >
          <StatBox
            title="431,322"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.gray[100], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* BOX THREE */}
        <Box
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",

            "&:hover": {
              backgroundImage:
                theme.palette.mode === "dark"
                  ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 42%, rgba(82,23,133,1) 100%)"
                  : "linear-gradient(315deg, rgba(100, 98,98,0.2) 42%,rgba(27, 155, 134)100%)",
              boxShadow: "0px 0px 12px 2px rgba(97, 97, 97, 0.5);",
            },
          }}
        >
          <StatBox
            title="3.241"
            subtitle="New Clients"
            progress="0.6"
            increase="+30%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.gray[100], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",

            "&:hover": {
              backgroundImage:
                theme.palette.mode === "dark"
                  ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 42%, rgba(82,23,133,1) 100%)"
                  : "linear-gradient(315deg, rgba(100, 98,98,0.2) 42%,rgba(27, 155, 134)100%)",
              boxShadow: "0px 0px 12px 2px rgba(97, 97, 97, 0.5);",
            },
          }}
        >
          <StatBox
            title="1,355,600"
            subtitle="Traffic Received"
            progress="0.6"
            increase="+24%"
            icon={
              <TrafficIcon sx={{ color: colors.gray[100], fontSize: "26px" }} />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",

            "&:hover": {
              backgroundImage:
                theme.palette.mode === "dark"
                  ? "linear-gradient(315deg, rgba(27, 24, 24, 1) 42%, rgba(82,23,133,1) 100%)"
                  : "linear-gradient(315deg, rgba(100, 98,98,0.2) 42%,rgba(27, 155, 134)100%)",
              boxShadow: "0px 0px 12px 2px rgba(97, 97, 97, 0.5);",
            },
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.modeColor[100]}
              >
                $54.000.768
              </Typography>
            </Box>
            <Box>
              <DownloadIcon
                sx={{
                  fontSize: "26px",
                  color: colors.modeColor[100],
                }}
              />
            </Box>
          </Box>

          <Box height="250px" m="-26px 10px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, hsl(0, 5.90%, 10.00%) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.gray[100]}
            p="20px"
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              backgroundColor:
                theme.palette.mode === "dark" ? "#1b1818" : "#646262",

              "&::-webkit-scrollbar": {
                width: "21px", // Ancho del scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: colors.primary[300], // Color de la barra
                borderRadius: "4px", // Bordes redondeados
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: colors.primary[500], // Color al pasar el mouse
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: colors.primary[800], // Color del fondo del scrollbar
              },
            }}
          >
            <Typography color={colors.gray[100]} variant="h4" fontWeight={600}>
              Recent Transacrtions
            </Typography>
          </Box>

          <List>
            {mockTransactions.map((transition, i) => (
              <ListItemButton
                key={`${transition.txId}-${i}`}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "15px",
                  m: "10px",
                  borderRadius: "7px",
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#0A0A0A" : "#292929",
                }}
              >
                {/* Izquierda: txId */}
                <Box display="flex" flexDirection="column">
                  <Typography
                    color={colors.modeColor[100]}
                    variant="h6"
                    fontWeight={600}
                  >
                    {transition.txId}
                  </Typography>
                  <Typography variant="body1">{transition.user}</Typography>
                </Box>
                {/* Centro: user y date */}
                <Box textAlign="center">
                  <Typography variant="body2" color="textSecondary">
                    {transition.date}
                  </Typography>
                </Box>

                {/* Derecha: cost */}
                <Typography
                  color="#ffff"
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    padding: "5px",
                    margin: "5px",
                    borderRadius: "7px",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? colors.modeColor[400]
                        : colors.modeColor[400],
                  }}
                >
                  ${transition.cost}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, hsl(0, 5.90%, 10.00%) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",
          }}
        >
          <Box p="20px 30px">
            <Typography variant="h4" fontWeight="600" color={colors.gray[100]}>
              Campaing
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h6"
                color={colors.modeColor[100]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, hsl(0, 5.90%, 10.00%) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",
          }}
        >
          <Box p="0px 20px 0 0px">
            <Typography
              variant="h4"
              fontWeight="600"
              sx={{ p: "20px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true}></BarChart>
            </Box>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            transition:
              "background-image 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
            borderRadius: "10px",
            backgroundColor: colors.primary[600],
            backgroundImage:
              theme.palette.mode === "dark"
                ? "linear-gradient(315deg, hsl(0, 5.90%, 10.00%) 64%, rgba(27, 24, 24, 1) 100%)"
                : "linear-gradient(315deg,rgba(100, 98,98,0.2) 64%, rgba(100, 98,98,0.2) 100%)",
          }}
        >
          <Box p="0px 20px 0 0px">
            <Typography variant="h4" fontWeight="600" sx={{ p: "20px" }}>
              Geography Based Traffic
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true}></GeographyChart>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

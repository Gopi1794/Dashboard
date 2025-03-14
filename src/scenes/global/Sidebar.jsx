import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  ListItemText,
  IconButton,
  Toolbar,
  Divider,
  useTheme,
  Box,
  SvgIcon,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const drawerWidth = 250;

const IconWrapper = ({ children }) => {
  return (
    <ListItemIcon
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "8px 16px",
      }}
    >
      {children}
    </ListItemIcon>
  );
};

const drawerPaperStyles = (theme, colors) => ({
  backdropFilter: "blur(25px)",
  borderRadius: "0 15px 15px 0",
  transition: "0.3s ease-in-out",

  backgroundColor:
    theme.palette.mode === "dark" ? colors.primary[600] : colors.primary[600],
});

const MiniDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  return {
    width: open ? drawerWidth : 70,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    transition: "0.3s ease-in-out",
    // 🔥 Transición general

    "& .MuiDrawer-paper": drawerPaperStyles(theme, tokens(theme.palette.mode)),
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",

    "& .MuiDrawer-paper::-webkit-scrollbar": {
      width: "10px",
    },
    "& .MuiDrawer-paper::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#A055D3" : "#70D6BD",
      borderRadius: "4px",
    },
    "& .MuiDrawer-paper::-webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.palette.mode === "dark" ? "#753e9a" : "#60b7a1",
    },

    "& .css-1ygvgru-MuiListItemIcon-root": {
      display: "flex",
      justifyContent: "space-around",
      padding: "8px 16px",
    },

    ...(open && {
      ...theme.mixins.drawer,
      "& .MuiDrawer-paper": drawerPaperStyles(
        theme,
        tokens(theme.palette.mode)
      ),
    }),

    ...(!open && {
      "& .MuiDrawer-paper": drawerPaperStyles(
        theme,
        tokens(theme.palette.mode)
      ),
    }),
  };
});

const Sidebar = ({ isOpen, setIsOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MiniDrawer variant="permanent" open={isOpen}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: " 0 30px 0 30px",
        }}
      >
        <img
          src="/assets/logo_adm.png"
          style={{ width: "25px", display: !isOpen ? "none" : "block" }}
        />
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <MenuOpenIcon sx={{ width: 30 }} />
        </IconButton>
      </Toolbar>
      <Divider />
      {isOpen && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="20px 0 20px 0"
        >
          <Box
            display="grid"
            justifyContent="center"
            alignItems="center"
            padding="10px"
          >
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src={"/assets/user.jpg"}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                border: " solid 2px #000",
              }}
            />
          </Box>
          <Box>
            <Typography variant="h2" fontWeight="bold">
              Roh
            </Typography>
            <Typography variant="h6">VP Admin</Typography>
          </Box>
        </Box>
      )}

      <List>
        <Box paddingLeft={isOpen ? "1%" : undefined}>
          <ListItem button component={Link} to="/">
            <IconWrapper>
              <HomeOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Dashboard"
                title="Dashboard"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <Typography
            variant="h6"
            sx={{ m: "5px 5px ", p: "0 0 0 16px", color: colors.gray[100] }}
          >
            Datas
          </Typography>
          <ListItem button component={Link} to="/team">
            <IconWrapper>
              <PeopleOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Manage Team"
                title="Manage Team"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <ListItem button component={Link} to="/contacts">
            <IconWrapper>
              <ContactsOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Contacts Information"
                title="Contacts Information"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <ListItem button component={Link} to="/invoices">
            <IconWrapper>
              <ReceiptOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Invoices Balances"
                title="Invoices Balance"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <Typography
            variant="h6"
            sx={{ m: "5px 5px ", p: "0 0 0 16px", color: colors.gray[100] }}
          >
            Pages
          </Typography>
          <ListItem button component={Link} to="/form">
            <IconWrapper>
              <PersonOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Profile Form"
                title="Perfile form"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <ListItem button component={Link} to="/calendar">
            <IconWrapper>
              <CalendarTodayOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Calendar"
                title="Calendar"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <ListItem button component={Link} to="/faq">
            <IconWrapper>
              <HelpOutlineOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="FAQ Page"
                title="FAQ page"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <Typography
            variant="h6"
            sx={{ m: "5px 5px ", p: "0 0 0 16px", color: colors.gray[100] }}
          >
            Charts
          </Typography>
          <ListItem button component={Link} to="/bar">
            <IconWrapper>
              <BarChartOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Bar Chart"
                title="Bar Chart"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <ListItem button component={Link} to="/pie">
            <IconWrapper>
              <PieChartOutlineOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Pie Chart"
                title="Pie Chart"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <ListItem button component={Link} to="/line">
            <IconWrapper>
              <TimelineOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Line Chart"
                title="Line Chart"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>

          <ListItem button component={Link} to="/geography">
            <IconWrapper>
              <MapOutlinedIcon />
            </IconWrapper>
            {isOpen && (
              <ListItemText
                primary="Geography Chart"
                title="Geography Chart"
                primaryTypographyProps={{
                  variant: "h6",
                  color: colors.gray[100],
                }}
              />
            )}
          </ListItem>
        </Box>
      </List>
    </MiniDrawer>
  );
};

export default Sidebar;

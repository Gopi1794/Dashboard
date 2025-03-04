import { Drawer, List, ListItem, ListItemIcon,Typography, ListItemText, IconButton, Toolbar, Divider,useTheme ,Box } from "@mui/material";
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
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const drawerWidth = 300;

const MiniDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
    const colors = tokens(theme.palette.mode); // Accedes a colors dentro de esta función

    return {
        width: open ? drawerWidth : 56,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        transition: "0.3s ease-in-out", // 🔥 Transición general

        "& .MuiDrawer-paper": {
            transition: "0.3s ease-in-out", // 🔥 Transición también en el Drawer
            backgroundColor: theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary[400],         },

        ...(open && {
            ...theme.mixins.drawer,
            "& .MuiDrawer-paper": {
                width: drawerWidth,
                transition: "0.3s ease-in-out",
                backgroundColor: theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary[400],                 // 🔥 Mantiene la transición en apertura
            },
        }),

        ...(!open && {
            "& .MuiDrawer-paper": {
                width: 56,
                transition: "0.3s ease-in-out",
                backgroundColor: theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary[400],                 // 🔥 Mantiene la transición en cierre
            },
        }),
    };
});

const Sidebar = ({ isOpen, setIsOpen }) => {
    
        const theme = useTheme();
        const colors = tokens(theme.palette.mode);
  return (
    <MiniDrawer variant="permanent"  open={isOpen}>
      <Toolbar>
        
        <IconButton   onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon  />
        </IconButton>
      </Toolbar>
      <Divider />
      {isOpen &&
                <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                > 

     
              <Box display="grid" justifyContent="center" alignItems="center" padding="10px">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%", border:" solid 2px #000" }}
                /></Box>
           <Box>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                >
                  Roh
                </Typography>
                <Typography variant="h5">
                  VP Admin
                </Typography>
                </Box>
              </Box>
}

              
            <List>
  <Box paddingLeft={isOpen ? "1%" : undefined}>
    <ListItem button component={Link} to="/">
      <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Dashboard" title="Dashboard"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }}/>}
    </ListItem>

    <Typography variant="h6"  sx={{  m: "5px 5px ", color: colors.gray[100]}}>
      Datas
    </Typography>
    <ListItem button component={Link} to="/team">
      <ListItemIcon><PeopleOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Manage Team" title="Manage Team"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }}/>}
    </ListItem>

    <ListItem button component={Link} to="/contacts">
      <ListItemIcon><ContactsOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Contacts Information" title="Contacts Information"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }} />}
    </ListItem>

    <ListItem button component={Link} to="/invoices">
      <ListItemIcon><ReceiptOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Invoices Balances" title="Invoices Balance"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }} />}
    </ListItem>

    <Typography variant="h6" sx={{ m:"5px 5px ", color: colors.gray[100] }}>
      Pages
    </Typography>
    <ListItem button component={Link} to="/form">
      <ListItemIcon><PersonOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Profile Form" title="Perfile form"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }} />}
    </ListItem>

    <ListItem button component={Link} to="/calendar">
      <ListItemIcon><CalendarTodayOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Calendar"title="Calendar"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }} />}
    </ListItem>

    <ListItem button component={Link} to="/faq">
      <ListItemIcon><HelpOutlineOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="FAQ Page" title="FAQ page"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }} />}
    </ListItem>

    <Typography variant="h6" sx={{ m: "5px 5px " , color: colors.gray[100] }}>
      Charts
    </Typography>
    <ListItem button component={Link} to="/bar">
      <ListItemIcon><BarChartOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Bar Chart" title="Bar Chart"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }}/>}
    </ListItem>

    <ListItem button component={Link} to="/pie">
      <ListItemIcon><PieChartOutlineOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Pie Chart"title="Pie Chart"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }} />}
    </ListItem>

    <ListItem button component={Link} to="/line">
      <ListItemIcon><TimelineOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Line Chart"title="Line Chart"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }} />}
    </ListItem>

    <ListItem button component={Link} to="/geography">
      <ListItemIcon><MapOutlinedIcon /></ListItemIcon>
      {isOpen && <ListItemText primary="Geography Chart" title="Geography Chart"   primaryTypographyProps={{ variant: 'h5', color:colors.gray[200] }}/>}
    </ListItem>
  </Box>
</List>

    </MiniDrawer>
  );
};

export default Sidebar;

import { useState } from "react";
import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, GlobalStyles } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import Sidebar from "../src/scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contact";
import Invoices from "./scenes/invoices/Invoices"
import Form from "./scenes/form/form"
import Calendar from "./scenes/calendar/Calendar";


function App() {
  const { theme, colorMode, mode } = useMode();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const backgroundGradient = mode === "dark"
    ? "linear-gradient( 111.4deg,  #17171c 6.5%, rgb(17, 15, 80) 50.2% );radial-gradient( circle 382px at 50% 50.2%,  rgb(47, 64, 174) 0.1%, #030132 100.2% );"
    : "radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );"; // gradiente claro


  return (
    <colorModeContext.Provider value={colorMode}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                background: backgroundGradient,  // Aplicar gradiente dinámico
                minHeight: "100vh",
                margin: 0,
                padding: 0,
              },
            }}
          />
          <div className="app" style={{ display: "flex" }}>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main className="content" style={{ flexGrow: 1, padding: "20px" }}>
              <Topbar setIsSidebarOpen={setIsSidebarOpen} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="team" element={<Team />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="form" element={<Form />} />
                <Route path="calendar" element={<Calendar />} />


              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </colorModeContext.Provider>
  );
}

export default App;

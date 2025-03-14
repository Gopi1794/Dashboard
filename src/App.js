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
import FAQ from "./scenes/FAQ/Faq";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Geography from "./scenes/geography/Geography";
import { Height } from "@mui/icons-material";



function App() {
  const { theme, colorMode, mode } = useMode();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const backgroundGradient = mode === "dark"
    ? "background: rgb(119, 119, 119); background: linear-gradient(315deg, rgba(0,0,0,1) 54%, rgba(82,23,133,1) 100%); background-repeat: no-repeat; background-size: cover;"
    : "background: rgb(255, 255, 255); background: linear-gradient(315deg, rgba(113, 113, 113, 0.84) 54%, #61CDBB 100%); background-repeat: no-repeat; background-size: cover;";

  return (
    <colorModeContext.Provider value={colorMode}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                background: backgroundGradient,
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
                <Route path="faq" element={<FAQ />} />
                <Route path="bar" element={<Bar />} />
                <Route path="pie" element={<Pie />} />
                <Route path="line" element={<Line />} />
                <Route path="geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </colorModeContext.Provider>
  );
}

export default App;

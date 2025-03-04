import { useState } from "react";
import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import Sidebar from "../src/scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contact";
import Invoices from "./scenes/invoices/Invoices"

function App() {
  const { theme, colorMode } = useMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <colorModeContext.Provider value={colorMode}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app" style={{ display: "flex" }}>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main className="content" style={{ flexGrow: 1, padding: "20px" }}>
              <Topbar setIsSidebarOpen={setIsSidebarOpen} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="team" element={<Team />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="invoices" element={<Invoices />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </colorModeContext.Provider>
  );
}

export default App;

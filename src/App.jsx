import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarApp from "./components/NavbarApp.jsx";
import FooterApp from "./components/FooterApp.jsx";
import AboutScreen from "./pages/AboutScreen.jsx";
import IndexScreen from "./pages/IndexScreen.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import PanelAdminScreen from "./pages/PanelAdminScreen.jsx";
import PanelWaiterScreen from "./pages/PanelWaiterScreen.jsx";
import PanelkitchenScreen from "./pages/PanelkitchenScreen.jsx";
// localStorage.setItem('userRole', 'admin'); // o 'client', 'kitchen', 'waiter'


function App() {
  const [darkMode, setdarkMode] = useState(true);  
  const [login, setLogin] = useState(false);
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || 'client');
  return (
    <BrowserRouter>
      <div className="d-flex flex-column justify-content-between h-100">
        <NavbarApp darkMode={darkMode} setdarkMode={setdarkMode} login={login}/>
        <Routes>
          <Route path="/" element={<IndexScreen darkMode={darkMode} />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="admin" element={<PanelAdminScreen />} />
          <Route path="waiter" element={<PanelWaiterScreen />} />
          <Route path="kitchen" element={<PanelkitchenScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
        <FooterApp darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;


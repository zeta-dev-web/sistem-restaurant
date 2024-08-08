import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarApp from "./components/NavbarApp.jsx";
import FooterApp from "./components/FooterApp.jsx";
import AboutScreen from "./pages/AboutScreen.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import PanelAdminScreen from "./pages/PanelAdminScreen.jsx";
import PanelWaiterScreen from "./pages/PanelWaiterScreen.jsx";
import PanelkitchenScreen from "./pages/PanelkitchenScreen.jsx";



function App() {
  const [darkMode, setdarkMode] = useState(true);  
  return (
    <> <NavbarApp darkMode={darkMode} setdarkMode={setdarkMode} />
    <FooterApp darkMode={darkMode} />
      {/* <BrowserRouter>
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="Iniciar Sesion" element={<LoginScreen />} />
        <Route path="Panel Admin" element={<PanelAdminScreen />} />
        <Route path="Panel Meseros" element={<PanelWaiterScreen />} />
        <Route path="Panel Cocina" element={<PanelkitchenScreen />} />
        <Route path="/*" element={<ErrorScreen/>} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter> */}
    </>
  );
}

export default App;

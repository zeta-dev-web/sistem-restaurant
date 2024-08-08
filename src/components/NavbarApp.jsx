import React from 'react';
import "../css/NavbarApp.css";
import { Navbar, Nav, Container, NavDropdown, Form } from 'react-bootstrap';
import { TiDeviceTablet } from 'react-icons/ti';
import { LuLayoutPanelLeft, LuPanelLeftOpen, LuPanelLeftClose } from 'react-icons/lu';
import { BsInfoSquare, BsSun, BsMoon } from 'react-icons/bs'; 
import { FaSun, FaMoon  } from "react-icons/fa6";
import { IoSettingsOutline } from 'react-icons/io5';

const NavbarApp = ({ darkMode, setdarkMode }) => {

  const handleSwitchChange = () => {
    setdarkMode(!darkMode);
  };

  return (
    <Navbar expand="lg" bg={darkMode ? "dark" : "body-secondary"} data-bs-theme={darkMode ? "dark" : "light"}>
      <Container fluid>
        <Navbar.Brand className='fw-bold' href="#home">Mi Bar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#menuclients" className='fw-semibold icon-link icon-link-hover'>
              <TiDeviceTablet /> Carta para Clientes
            </Nav.Link>
            <NavDropdown className='fw-semibold icon-link-hover' data-bs-theme={darkMode ? "light" : "dark"} title={<><LuLayoutPanelLeft /> Paneles</>} id="nav-dropdown">
              <NavDropdown.Item className='fw-semibold icon-link icon-link-hover' href="#mesas">
                <LuPanelLeftOpen /> Para Pedidos
              </NavDropdown.Item>
              <NavDropdown.Item className='fw-semibold icon-link icon-link-hover' href="#cocina">
                <LuPanelLeftClose /> Para Cocina
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='fw-semibold icon-link icon-link-hover' href="#about">
              <BsInfoSquare /> Acerca de Nosotros
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className='fw-semibold icon-link icon-link-hover' href="#settings">
              <IoSettingsOutline /> Ajustes
            </Nav.Link>
            <Nav.Link className='fw-semibold' href="#link">
              <Form className="d-flex align-items-center">
                <FaSun className="sun-icon" />
                <Form.Check
                  type="switch"
                  className='ms-2'
                  id="custom-switch"
                  label=""
                  checked={darkMode}
                  onChange={handleSwitchChange}
                />
                <FaMoon className="moon-icon" />
              </Form>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import CardApp from "../components/CardApp";
import "../css/HomeScreen.css";
// import { useMediaQuery } from 'react-responsive';
import useUserRole from "../assets/hooks/useUserRole";
import adminImage from '../images/admin.webp';
import kitchenImage from '../images/kitchen.webp';
import waiterImage from '../images/waiter.webp';
import clientImage from '../images/client.webp';

const HomeScreen = () => {
  const [userRole, setUserRole] = useState('');
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  // const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' }); // lg y superiores
  // const isMediumScreen = useMediaQuery({
  //   query: '(min-width: 768px) and (max-width: 991px)',
  // }); // md
  // const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' }); // sm y menores

  return (
    <div className="h-100">
      <div className="text-center parent">
        <Col className={`p-0 ${userRole === "admin" ? "admin1" : "d-none"}`}>
          <CardApp title="Card 1" content="PANEL ADMIN" image={adminImage}/>
        </Col>
        <Col
          className={`p-0 ${
            userRole === "admin"
              ? "admin2"
              : userRole === "waiter"
              ? "waiter1"
              : userRole === "kitchen"
              ? "kitchen2"
              : "d-none"
          }`}
        >
          <CardApp title="Card 2" content="PANEL DE MOZOS" image={waiterImage} />
        </Col>
        <Col
          className={`p-0 ${
            userRole === "admin"
              ? "admin3"
              : userRole === "waiter"
              ? "d-none"
              : userRole === "kitchen"
              ? "kitchen1"
              : "d-none"
          }`}
        >
          <CardApp title="Card 3" content="PANEL COCINA" image={kitchenImage} />
        </Col>
        <Col
          className={`p-0 ${
            userRole === "admin"
              ? "admin4"
              : userRole === "waiter"
              ? "waiter2"
              : userRole === "kitchen"
              ? "kitchen3"
              : "client1"
          }`}
        >
          <CardApp title="Card 4" content="CARTA O MENU"  image={clientImage}/>
        </Col>
      </div>
    </div>
  );
};

export default HomeScreen;

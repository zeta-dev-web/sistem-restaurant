import React from "react";
import { Row, Col } from "react-bootstrap";
import CardApp from "../components/CardApp";
import { useMediaQuery } from "react-responsive";



const HomeScreen = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" }); // lg y superiores
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  }); // md
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" }); // sm y menores

  return (
    <div     className={`${
      isLargeScreen
        ? "h-100"
        : isMediumScreen
        ? "h-100"
        : isSmallScreen
        ? "vh-100"
        : ""
    }`}>
      <div className="grid text-center h-100">
        <Row className="h-100">
          <Col
            xs={12}
            md={6}
            lg={6}
            className={`${
              isLargeScreen
                ? "h-50"
                : isMediumScreen
                ? "h-50"
                : isSmallScreen
                ? "h-100"
                : ""
            } p-0`}
          >
            <CardApp title="Card 1" content="Contenido de la card 1" />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            className={`${
              isLargeScreen
                ? "h-50"
                : isMediumScreen
                ? "h-50"
                : isSmallScreen
                ? "h-100"
                : ""
            } p-0`}
          >
            <CardApp title="Card 2" content="Contenido de la card 2" />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            className={`${
              isLargeScreen
                ? "h-50"
                : isMediumScreen
                ? "h-50"
                : isSmallScreen
                ? "h-100"
                : ""
            } p-0`}
          >
            <CardApp title="Card 3" content="Contenido de la card 3" />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            className={`${
              isLargeScreen
                ? "h-50"
                : isMediumScreen
                ? "h-50"
                : isSmallScreen
                ? "h-100"
                : ""
            } p-0`}
          >
            <CardApp title="Card 4" content="Contenido de la card 4" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardApp from '../components/CardApp';
import { useMediaQuery } from 'react-responsive';
import useUserRole from '../assets/hooks/useUserRole';
import roleStyles from '../assets/hooks/roleStyles';
const HomeScreen = () => {
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const userRole = useUserRole(); // Hook para obtener el rol del usuario

  const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' }); // lg y superiores
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 991px)',
  }); // md
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' }); // sm y menores

  useEffect(() => {
    if (userRole) {
      const stylePath = roleStyles[userRole];
      if (stylePath) {
        import(`../css/${stylePath}`).then(() => setStylesLoaded(true));
      }
    }
  }, [userRole]);

  if (!stylesLoaded) {
    return <div>Loading...</div>; // Opcional: Muestra un mensaje o spinner mientras carga el estilo
  }

  return (
    <div className="h-100">
      <div className="text-center grid parent h-100">
        {userRole === 'admin' && (
          <>
            <Col className="p-0 div1">
              <CardApp title="Card 1" content="Contenido de la card 1" />
            </Col>
            <Col className="p-0 div2">
              <CardApp title="Card 2" content="Contenido de la card 2" />
            </Col>
            <Col className="p-0 div3">
              <CardApp title="Card 3" content="Contenido de la card 3" />
            </Col>
            <Col className="p-0 div4">
              <CardApp title="Card 4" content="Contenido de la card 4" />
            </Col>
          </>
        )}
        {userRole === 'client' && (
          <Col className="p-0 div1">
            <CardApp title="Card 1" content="Contenido de la card 1" />
          </Col>
        )}
        {userRole === 'kitchen' && (
          <>
            <Col className="p-0 div1">
              <CardApp title="Card 1" content="Contenido de la card 1" />
            </Col>
            <Col className="p-0 div2">
              <CardApp title="Card 2" content="Contenido de la card 2" />
            </Col>
            <Col className="p-0 div3">
              <CardApp title="Card 3" content="Contenido de la card 3" />
            </Col>
          </>
        )}
        {userRole === 'waiter' && (
          <>
            <Col className="p-0 div1">
              <CardApp title="Card 1" content="Contenido de la card 1" />
            </Col>
            <Col className="p-0 div2">
              <CardApp title="Card 2" content="Contenido de la card 2" />
            </Col>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
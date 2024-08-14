import React from 'react'
import { Card } from 'react-bootstrap';
import '../css/CardApp.css'; // Asegúrate de tener un archivo CSS

const CardApp = ({ title, content, image }) => {
  return (
    <div className="card-container">
      <Card.Img className="card-image" src={image} alt={title} />
    </div>
  );
};

export default CardApp;



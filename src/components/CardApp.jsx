import React from 'react'
import { Card } from 'react-bootstrap';

const CardApp = ({ title, content, image }) => {
  return (
      <Card className="w-100 h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img>{image}</Card.Img>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardApp

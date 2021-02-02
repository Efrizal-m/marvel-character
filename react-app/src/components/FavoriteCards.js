import React from 'react'
import { Card } from 'react-bootstrap'

export default function FavoriteCards(props) {
    return (
        <Card style={{ width: '18rem' }} className="mr-5">
        <Card.Img variant="top" src={props.favorite.thumbnail.path+'/landscape_xlarge.jpg'} alt="No Photos Available" />
        <Card.Body>
          <Card.Title>{props.favorite.name}</Card.Title>
        </Card.Body>
      </Card>
    )
}

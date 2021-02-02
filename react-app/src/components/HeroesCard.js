import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchFavorites } from '../store/actions/favoriteAction'

export default function HeroesCard(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleDetail = (id) => {
      history.push(`/heroes/${id}`)
    }

    const handleFavorites = (id) => {
      dispatch(fetchFavorites(id))
    }


    return (
        <Card style={{ width: '18rem' }} className="mr-1">
          <Card.Img variant="top" src={props.hero.thumbnail.path+'/landscape_xlarge.jpg'} alt="No Photos Available" />
          <Card.Body>
            <Card.Title className="d-flex justify-content-center text-center">{props.hero.name}</Card.Title>
            <div className="d-flex justify-content-center">
            <Button onClick={() => handleDetail(props.hero.id)} variant="primary"><i className="fas fa-list-ul"></i></Button>
            <Button onClick={() => handleFavorites(props.hero.id)} variant="success"><i className="fas fa-heart"></i></Button>
            </div>
          </Card.Body>
        </Card>
    )
}
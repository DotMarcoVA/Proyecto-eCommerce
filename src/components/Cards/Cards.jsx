/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
import React from 'react'
import './cards.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'



const Cards = ({ products }) => {

  return (
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Img variant='top' src={products.image} />
        <Card.Body>
          <Card.Title>{products.product_name}</Card.Title>
          <Card.Text>
            {products.description}
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Cards 

/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
import React from 'react'
import './cards.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'
import { useProductsContext } from '../../context/ProductsContext'
import { Link } from 'react-router-dom'


const Cards = ({ products }) => {
  const context = useProductsContext()
  return (
    <>
      <Link to={`/details/${products._id}`}>
        <Card
          style={{ width: '15rem' }} onClick={() => {
            context.setSelectedItem(products._id)
            console.log(context.item) 
          }}
        >
          <Card.Img variant='top' src={products.image} />
          <Card.Body>
            <Card.Title>{products.product_name}</Card.Title>
            <Card.Text>
              {products.description}
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

export default Cards 

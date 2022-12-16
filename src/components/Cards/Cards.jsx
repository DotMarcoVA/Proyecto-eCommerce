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
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

  const handleImageError = (e) => {
    e.target.src = placeholderImage
  }

  const context = useProductsContext()
  return (
    <>
      <Link to={`/details/${products._id}`} style={{ textDecoration: 'none' }}>
        <Card
          style={{ width: '15rem' }} onClick={() => {
            context.setSelectedItem(products._id)
            console.log(context.item) 
          }}
        >
          <Card.Img variant='top' src={products.image} onError={handleImageError} />
          <Card.Body>
            <Card.Title>{products.product_name}</Card.Title>
            <Card.Text>
              {products.description}
            </Card.Text>
            <Button variant='primary'>Ver Detalles</Button>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

export default Cards 

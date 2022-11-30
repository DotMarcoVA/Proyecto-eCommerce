/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
import React from 'react'
import './cards.css'

const Cards = ({ products }) => {

  return (
    <>
      <div className='column is-4-desktop is-6-tablet'>
        <div className='card-image'>
          <figure className='image is-16by9'>
            <img src={products.image} alt='Placeholder image' />
          </figure>
        </div>
        <div className='card-content'>
          <span className='tag is-danger'>{products.product_name} </span>
          <div className='is-flex is-justify-content-space-between is-align-items-center'>
            <div className='content mb-0'>
              <p className='mb-0 is-size-7'>{products.description}</p>
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default Cards

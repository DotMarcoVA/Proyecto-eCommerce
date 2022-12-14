/* eslint-disable-next-line react/jsx-closing-tag-location */
import React from 'react'
import './details.css'
import { Link } from 'react-router-dom'

const DetailsItem = ({ details }) => {
  return (
    <>
      <>
        <Link to='/' className='botOn'>Atrás</Link>
        <div className='cardContainer'>
          <img src={details.image} />
          <div className='cardDescription'>
            <h2>{details.product_name}</h2>
            <h5>{details.category}</h5>
            <h4>{details.brand}</h4>
            <p>{details.description}</p>
            <h4> ${details.price}</h4>

            <div className='button'>
              <button className='btn btn-primary' style={{ }}>Comprar</button>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default DetailsItem

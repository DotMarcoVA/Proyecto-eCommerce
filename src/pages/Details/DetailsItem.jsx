/* eslint-disable-next-line react/jsx-closing-tag-location */
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './details.css'
import { Link } from 'react-router-dom'

const DetailsItem = ({ details }) => {
  const { isAuth } = useContext(AuthContext)
  return (
    <div className='detailsContainer'>
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
            {!isAuth
              ? (
                <>
                  <div className='button'>
                    <br />
                    <p>Inicia Sesion para proceder a la compra</p>
                    <Link to='/login'><button className='btn btn-primary' style={{ }}>Iniciar Sesion</button></Link>
                  </div>
                </>
                )
              : (
                <>
                  <div className='button'>
                    <button className='btn btn-primary' style={{ }}>Comprar</button>
                  </div>
                </>
                )}

          </div>
        </div>
        <Link to='/' className='botOn'>
          <img className='back-arrow' src='../src/assets/back-arrow.png' alt='back' />
          <p>Ver lista de productos</p>
        </Link>
      </div>
    </div>
  )
}

export default DetailsItem

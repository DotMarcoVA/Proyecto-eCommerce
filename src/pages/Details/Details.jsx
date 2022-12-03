// import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams /* useNavigate */ } from 'react-router-dom'
import DetailsItem from './DetailsItem'

const Details = () => {
  const [itemDetails, setItemDetails] = useState({})
  const [loadingDetails, setLoadingDetails] = useState(true)
  const { pid } = useParams()

  const fetchItem = async (id) => {
    const IURL = `https://e-commerce-backend-production-ad56.up.railway.app/api/v1/item/${id}`
    try {
      const results = await axios.get(`${IURL}`)
      setItemDetails(results.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchItem(pid)
    setLoadingDetails(false)
  }, [])
  return (
    <>
      {
      loadingDetails
        ? <h1> Cargando </h1>
        : <div>
          <DetailsItem />
          <h2>{itemDetails.product_name}</h2>
          <h5>{itemDetails.category}</h5>
          <h4>{itemDetails.brand}</h4>
          <h4>{itemDetails.price}</h4>
          <p>{itemDetails.sku}</p>
          <p>{itemDetails.description}</p>
          <button style={{ }}>Comprar</button>
          {/* eslint-disable-next-line react/jsx-closing-tag-location */}
        </div>
    }

    </>
  )
}

export default Details

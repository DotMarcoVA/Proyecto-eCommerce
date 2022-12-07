/* eslint-disable react/jsx-indent */
/* eslint-disable no-trailing-spaces */
// import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams /* useNavigate */ } from 'react-router-dom'
import MainNavbar from '../../components/MainNavbar.jsx/MainNavbar'
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
        : <> 
          <MainNavbar />
          <DetailsItem 
            details={itemDetails}
          />
          </>
          
    }

    </>
  )
}

export default Details

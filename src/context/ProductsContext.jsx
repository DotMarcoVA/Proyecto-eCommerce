import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const ProductsContext = createContext()

const getProducts = () => {
  let products = {}
  axios
    .get('https://ecomerce-master.herokuapp.com/api/v1/item')
    .then((response) => {
      // handle success
      products = response.data.results
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
  return products
}

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(getProducts)
    console.log(products)
  })

  return (
    <div />
  )
}
